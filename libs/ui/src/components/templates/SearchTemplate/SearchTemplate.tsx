import { toLocalISOString } from '@billboards-org/util'
import { Map } from '../../organisms/Map'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import { Button } from '../../atoms/Button'
import {
  IconCurrentLocation,
  IconExclamationCircle,
  IconInfoCircle,
  IconRefresh,
} from '@tabler/icons-react'

import { FilterSidebar } from '../../organisms/FilterSidebar'
import { useConvertSearchFormToVariables } from '@billboards-org/forms/src/hooks'

import { useFormContext, useWatch } from 'react-hook-form'

import { Switch } from '../../atoms/Switch'

import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { Form } from '../../atoms/Form'
import { FormError } from '../../atoms/FormError'
import HScroll from '../../molecules/HScroll'

import { LocationInfo } from '@billboards-org/store/search'
import { useAppDispatch, useAppSelector } from '@billboards-org/store'
import { SearchBillboardFormType } from '@billboards-org/forms'
import { notification$ } from '@billboards-org/util/subjects'
import {
  removeBillboardFromCampaign,
  resetCampaign,
} from '@billboards-org/store/campaigns'
import { useSearchLocation } from '@billboards-org/hooks/src/location'
import { selectUser } from '@billboards-org/store/user'
import {
  BookingWithInCampaign,
  SearchBillboardsQuery,
  useCreateCampaignMutation,
  useSearchBillboardsLazyQuery,
} from '@billboards-org/network/src/generated'
import { Panel } from '../../organisms/Map/Panel'
import { DefaultZoomControls } from '../../organisms/Map/ZoomControls/ZoomControls'
import { BillboardCardSm } from '../../organisms/BillboardCardSm/BillboardCardSm'
import { ViewStateChangeEvent, useMap } from 'react-map-gl'
import { Autocomplete } from '../../atoms/Autocomplete'
import { MarkerWithPopup } from '../../organisms/DisplayMarkers/DisplayMarkers'
import { initialViewState } from '@billboards-org/forms/src/createBillboard'
import { PulsingDot } from '../../atoms/Dot'
import { Dialog } from '../../atoms/Dialog'

export interface ISearchPageTemplateProps {}

export const Fetching = ({ fetching }: { fetching: boolean }) => {
  return fetching ? (
    <div className="p-1 text-white border border-black rounded-full shadow-xl bg-black/80">
      <IconRefresh className="w-8 h-8 animate-spin-reverse" />
    </div>
  ) : null
}

type LatLng = { lng: number; lat: number }

export const SearchPageTemplate = ({}: ISearchPageTemplateProps) => {
  const [openCreateCampaign, setOpenCreateCampaign] = useState(false)

  const {
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext<SearchBillboardFormType>()

  const formData = useWatch<SearchBillboardFormType>()

  useEffect(() => {
    trigger(['dateRange', 'locationFilter'])
  }, [formData, trigger])

  const billboards = useAppSelector((state) => state.campaigns.billboards)

  const [switchMode, setSwitchMode] = useState(false)

  const [showCampaignSuccessDialog, setshowCampaignSuccessDialog] =
    useState(false)

  function handleMapChange(bounds: mapboxgl.LngLatBounds) {
    const locationFilter = {
      nw_lat: bounds?.getNorthWest().lat || 0,
      nw_lng: bounds?.getNorthWest().lng || 0,
      se_lat: bounds?.getSouthEast().lat || 0,
      se_lng: bounds?.getSouthEast().lng || 0,
    }

    setValue('locationFilter', locationFilter)
  }

  return (
    <Map
      initialViewState={initialViewState}
      pitch={30}
      onZoomEnd={(e) => handleMapChange(e.target.getBounds())}
      onDragEnd={(e) => handleMapChange(e.target.getBounds())}
      onLoad={(e) => handleMapChange(e.target.getBounds())}
    >
      <ShowMarkers switchMode={switchMode} />
      <Panel position="left-top" className="bg-white/50">
        <div className="flex flex-col items-stretch gap-2 py-2">
          {/* Self managing search box. Moves map to the selected location. */}
          <SearchBox />

          <HtmlLabel
            title="Start time"
            error={errors.dateRange?.startDate?.message}
          >
            <HtmlInput
              type="date"
              className="w-full p-2 text-lg font-light"
              min={toLocalISOString(new Date()).slice(0, 16)}
              {...register('dateRange.startDate')}
            />
          </HtmlLabel>

          <HtmlLabel
            title="End time"
            error={errors.dateRange?.endDate?.message}
          >
            <HtmlInput
              min={toLocalISOString(new Date()).slice(0, 16)}
              type="date"
              className="w-full p-2 text-lg font-light"
              {...register('dateRange.endDate')}
            />
          </HtmlLabel>
          <div>
            <span>Show angle</span>
            <Switch
              value={switchMode}
              disableRipple
              onChange={(e) => setSwitchMode(e.target.checked)}
            />
          </div>
        </div>
      </Panel>
      <Panel position="right-top">
        <div className="flex ">
          {billboards.length ? (
            <Button
              variant="contained"
              size="sm"
              onClick={() => {
                setOpenCreateCampaign((state) => !state)
              }}
            >
              Create campaign
              <PulsingDot>{billboards.length}</PulsingDot>
            </Button>
          ) : null}

          <Dialog
            open={openCreateCampaign}
            setOpen={setOpenCreateCampaign}
            title={'Create campaign'}
          >
            <CreateCampaignContent
              onCompletion={() => {
                setOpenCreateCampaign(false)
                setshowCampaignSuccessDialog(true)
              }}
            />
          </Dialog>
          <Dialog
            setOpen={setshowCampaignSuccessDialog}
            open={showCampaignSuccessDialog}
            title={'Success.'}
          >
            <div className="space-y-2">
              <div className="font-bold">
                Your campaign has been successfully created! 🎉
              </div>
              <div className="text-sm">
                Once approved, you'll be on your way to a high-impact
                advertising campaign.
              </div>
              <Link
                href="/campaigns"
                className="inline-block text-sm underline underline-offset-4"
              >
                Go to dashboard.
              </Link>
            </div>
          </Dialog>
          <CurrentLocationButton />
          <FilterSidebar />
        </div>
      </Panel>
      <Panel position="right-center">
        <DefaultZoomControls />
      </Panel>
      {Object.entries(errors).length ? (
        <Panel position="center-bottom">
          {Object.entries(errors).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center gap-1 p-2 border border-red"
            >
              <IconExclamationCircle />
              <div className="font-medium">
                {key}: {value.message}
              </div>
            </div>
          ))}
        </Panel>
      ) : null}
    </Map>
  )
}

export const ZOOM_LIMIT = 8

export const ShowMarkers = ({ switchMode }: { switchMode: boolean }) => {
  const { current: map } = useMap()
  const [searchBillboards, { loading, data }] = useSearchBillboardsLazyQuery()

  const { variables } = useConvertSearchFormToVariables()

  const TOO_ZOOMED_OUT = (map?.getZoom() || 0) < ZOOM_LIMIT

  useEffect(() => {
    if (variables) {
      searchBillboards({ variables })
    }
  }, [variables])

  if (data?.searchBillboards.length === 0) {
    return (
      <Panel position="center-center" className="bg-white/50">
        <div className="flex items-center justify-center gap-2 ">
          <IconInfoCircle /> <div>No billboards found in this area.</div>
        </div>
      </Panel>
    )
  }

  if (TOO_ZOOMED_OUT) {
    return (
      <Panel position="center-center">
        <div className="p-2 bg-white">Too zoomed out</div>
      </Panel>
    )
  }

  return (
    <>
      {loading ? (
        <Panel position="center-bottom">
          <IconRefresh className="animate-spin-reverse" />
        </Panel>
      ) : null}
      {data?.searchBillboards.map((billboard) => (
        <MarkerWithPopup
          switchMode={switchMode}
          key={billboard.id}
          marker={billboard}
        />
      ))}
    </>
  )
}

export const CreateCampaignContent = ({
  onCompletion,
}: {
  onCompletion: () => void
}) => {
  const billboards = useAppSelector((state) => state.campaigns.billboards)
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormContext<SearchBillboardFormType>()

  const [mutateAsync, { loading, data }] = useCreateCampaignMutation()
  const user = useAppSelector(selectUser)

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        const bookings: Array<BookingWithInCampaign> = billboards.map(
          (billboard) => ({
            billboard: { connect: { id: billboard.id } },
            pricePerDay: billboard.pricePerDay || 0,
          }),
        )
        if (!user.uid) {
          console.log('uiser', user.uid, notification$)
          notification$.next({ message: 'You are not logged in.' })
          return
        }
        const { data: createCampaignSuccessData, errors } = await mutateAsync({
          variables: {
            createCampaignInput: {
              advertiserId: user.uid,
              bookings,
              startDate: data.dateRange.startDate,
              endDate: data.dateRange.endDate,
              name: data.campaignName,
            },
          },
        })
        if (errors) {
          notification$.next({
            message: 'Campaign creation failed.',
            type: 'error',
          })
        }
        if (createCampaignSuccessData?.createCampaign) {
          notification$.next({
            message: 'Campaign creation success. Pending approval.',
            type: 'success',
          })
          dispatch(resetCampaign())
        }

        onCompletion()
      })}
    >
      <HtmlLabel title="Campaign name" error={errors.campaignName?.message}>
        <HtmlInput placeholder="Enter the name" {...register('campaignName')} />
      </HtmlLabel>
      <FormError error={errors.dateRange?.message} />
      {billboards.length > 0 ? (
        <HScroll>
          <HScroll.Body className="gap-2">
            {billboards.map((billboard) => (
              <HScroll.Child className="relative w-48 mb-2" key={billboard.id}>
                <BillboardCardSm billboard={billboard} />
                <Button
                  className="pl-2"
                  size="none"
                  variant="text"
                  onClick={() =>
                    dispatch(removeBillboardFromCampaign(billboard.id))
                  }
                >
                  Remove
                </Button>
              </HScroll.Child>
            ))}
          </HScroll.Body>
          <div className="flex justify-end gap-2 py-2">
            <HScroll.Arrow />
            <HScroll.Arrow right />
          </div>
        </HScroll>
      ) : (
        <div className="py-3 text-red">Add billboards to create campaign.</div>
      )}
      <div className="grid grid-cols-2 gap-2">
        <HtmlLabel
          title="Start date"
          error={errors.dateRange?.startDate?.message}
        >
          <HtmlInput type="date" {...register('dateRange.startDate')} />
        </HtmlLabel>
        <HtmlLabel title="End date" error={errors.dateRange?.endDate?.message}>
          <HtmlInput type="date" {...register('dateRange.endDate')} />
        </HtmlLabel>
      </div>

      <div className="mt-4 text-lg">
        <span className="font-bold">{billboards.length}</span> billboard(s)
        selected, costing Rs.{' '}
        <span className="font-bold">
          {billboards.reduce((acc, bill) => acc + (bill?.pricePerDay || 0), 0)}
        </span>
        /day with{' '}
        <span className="font-bold">
          {billboards.reduce(
            (acc, bill) => acc + (bill?.impressionsPerDay || 0),
            0,
          )}
        </span>
        daily impressions.
      </div>
      <div>Ready to launch your impactful campaign?</div>
      <Button
        disabled={billboards.length === 0}
        isLoading={loading}
        type="submit"
      >
        Create campaign
      </Button>
    </Form>
  )
}

export const CurrentLocationButton = () => {
  const { current: map } = useMap()

  return (
    <Button
      variant="text"
      className="hover:bg-gray-200"
      onClick={() => {
        navigator.geolocation.getCurrentPosition(
          ({ coords: { latitude, longitude } }) => {
            map?.flyTo({ center: { lat: latitude, lng: longitude }, zoom: 10 })
          },
          (error) => {
            console.error(error)
          },
          { enableHighAccuracy: true, timeout: 20000 },
          //   { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        )
      }}
    >
      <IconCurrentLocation className="stroke-1.5" />
    </Button>
  )
}

export const majorCitiesLocationInfo: LocationInfo[] = [
  {
    placeName: 'Chennai, Tamil Nadu, India',
    latLng: [13.0827, 80.2707],
  },
  {
    placeName: 'New York, New York, United States',
    latLng: [40.7128, -74.006],
  },
  {
    placeName: 'London, Greater London, England, United Kingdom',
    latLng: [51.5074, -0.1278],
  },
  {
    placeName: 'Paris, France',
    latLng: [48.8566, 2.3522],
  },
  {
    placeName: 'Berlin, Germany',
    latLng: [52.52, 13.405],
  },
  {
    placeName: 'Sydney, New South Wales, Australia',
    latLng: [-33.8688, 151.2093],
  },
  {
    placeName: 'Rio de Janeiro, Brazil',
    latLng: [-22.9068, -43.1729],
  },
  {
    placeName: 'Cape Town, Western Cape, South Africa',
    latLng: [-33.9249, 18.4241],
  },
  {
    placeName: 'Moscow, Russia',
    latLng: [55.7558, 37.6176],
  },
  {
    placeName: 'Beijing, China',
    latLng: [39.9042, 116.4074],
  },
]

export const SearchBox = () => {
  const { current: map } = useMap()
  const { loading, setLoading, searchText, setSearchText, locationInfo } =
    useSearchLocation()

  return (
    <Autocomplete<LocationInfo, false, false, false>
      options={locationInfo.length ? locationInfo : majorCitiesLocationInfo}
      isOptionEqualToValue={(option, value) =>
        option.placeName === value.placeName
      }
      noOptionsText={searchText ? 'No options.' : 'Type something...'}
      getOptionLabel={(x) => x.placeName}
      onInputChange={(_, v) => {
        setLoading(true)
        setSearchText(v)
      }}
      loading={loading}
      onChange={(_, v) => {
        if (v) {
          const { latLng, placeName } = v
          map?.flyTo({ center: { lat: latLng[0], lng: latLng[1] }, zoom: 10 })
        }
      }}
    />
  )
}
