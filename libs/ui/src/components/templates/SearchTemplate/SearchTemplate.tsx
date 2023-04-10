import { useMap, Map } from 'react-map-gl'

import { SearchPlaceBox } from '../../organisms/SearchPlaceBox'
import { useEffect, useRef, useState } from 'react'

import { Button } from '../../atoms/Button'
import {
  IconAlertCircle,
  IconCurrentLocation,
  IconFilter,
  IconRefresh,
} from '@tabler/icons-react'

import { FilterSidebar } from '../../organisms/FilterSidebar'
import { PulsingDot } from '../../atoms/Dot/Dot'
import { useConvertSearchFormToVariables } from '@billboards-org/forms/src/hooks'

import { useFormContext, useWatch } from 'react-hook-form'

import { DisplayMarkers } from '../../organisms/DisplayMarkers'

import { Switch } from '../../atoms/Switch'

import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { Form } from '../../atoms/Form'
import { FormError } from '../../atoms/FormError'
import { Dialog2 } from '../../atoms/Dialog2'
import HScroll from '../../molecules/HScroll'

import { LocationInfo, setRecentSearch } from '@billboards-org/store/search'
import { useAppDispatch, useAppSelector } from '@billboards-org/store'
import { SearchBillboardFormType } from '@billboards-org/forms'
import { notification$ } from '@billboards-org/util/subjects'
import {
  removeBillboardFromCampaign,
  resetCampaign,
} from '@billboards-org/store/campaigns'
import { useCurrentLocation } from '@billboards-org/hooks/src/location'
import { selectUser } from '@billboards-org/store/user'
import {
  BookingWithInCampaign,
  useCreateCampaignMutation,
  useSearchBillboardsLazyQuery,
} from '@billboards-org/network/src/generated'
import { Panel } from '../../organisms/Map/Panel'
import { DefaultZoomControls } from '../../organisms/Map/ZoomControls/ZoomControls'
import { useDebouncedValue } from '@billboards-org/hooks/src/async'

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
  const [allowed, setAllowed] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)
  const [openCreateCampaign, setOpenCreateCampaign] = useState(false)

  const {
    register,
    setValue,
    trigger,
    formState: { dirtyFields, errors },
  } = useFormContext<SearchBillboardFormType>()

  const formData = useWatch<SearchBillboardFormType>()

  useEffect(() => {
    trigger(['dateRange', 'locationFilter'])
  }, [formData, trigger])

  const [mapRotate, setMapRotate] = useState(true)
  const billboards = useAppSelector((state) => state.campaigns.billboards)

  useEffect(() => {
    setViewState((state) => ({ ...state, longitude: state.longitude + 0.01 }))
  }, [mapRotate])

  const { moveMapToCurrentLocation } = useCurrentLocation({
    allowed,
    setLocationInfo: (currentLocation: LocationInfo) =>
      setValue('locationInfo', currentLocation),
  })

  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  })

  const debouncedViewState = useDebouncedValue(viewState, 300)

  const [switchMode, setSwitchMode] = useState(false)

  const dispatch = useAppDispatch()

  const { variables } = useConvertSearchFormToVariables()

  const [fetchData, { data, loading }] = useSearchBillboardsLazyQuery({
    variables,
  })

  useEffect(() => {
    if (variables.dateFilter && variables.locationFilter) fetchData()
  }, [variables])

  const mapRef = useRef(null)

  useEffect(() => {
    if (mapRef.current) {
      // @ts-ignore
      const { _sw, _ne } = mapRef.current.getBounds()
      setValue('locationFilter', {
        nw_lat: _ne.lat,
        nw_lng: _sw.lng,
        se_lat: _sw.lat,
        se_lng: _ne.lng,
      })
    }
  }, [debouncedViewState])

  return (
    <div>
      <Map
        ref={mapRef}
        {...viewState}
        projection={'globe'}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken="pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ"
        style={{ height: '92vh' }}
        pitch={viewState.zoom > 6 ? 45 : 0}
        scrollZoom={false}
        onMove={(evt) => {
          setViewState(evt.viewState)
        }}
        // onLoad={(evt) => {
        //   // @ts-ignore
        //   const { _sw, _ne } = evt.target.getBounds()
        //   setLocationFilter({ ne: _ne, sw: _sw })
        // }}
        // onMoveEnd={(evt) => {
        //   // @ts-ignore
        //   const { _sw, _ne } = evt.target.getBounds()
        //   //   setLocationFilter({ ne: _ne, sw: _sw })
        // }}
      >
        <DisplayMarkers
          searchBillboards={data?.searchBillboards || []}
          switchMode={switchMode}
        />
        <Panel position="right-center">
          <DefaultZoomControls />
        </Panel>
        <Panel position="left-top">
          <SearchPlaceBox
            setLocationInfo={(locationInfo) => {
              const { latLng } = locationInfo
              dispatch(setRecentSearch(locationInfo))
              setViewState({
                latitude: latLng[0],
                longitude: latLng[1],
                zoom: 12,
              })
            }}
          />
          {/* , { valueAsDate: true } */}
          <HtmlInput
            type="date"
            placeholder="Start time"
            {...register('dateRange.startDate')}
          />
          <HtmlInput
            type="date"
            placeholder="End time"
            {...register('dateRange.endDate')}
          />
          <div>
            <span>Show angle</span>
            <Switch
              value={switchMode}
              disableRipple
              onChange={(e) => setSwitchMode(e.target.checked)}
            />
          </div>
        </Panel>
        <Panel position="right-top">
          <div className="flex gap-2">
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
            <Button
              variant="text"
              size="none"
              className="hover:bg-gray-200"
              onClick={() => {
                if (!allowed) {
                  setAllowed(true)
                }

                moveMapToCurrentLocation()
              }}
            >
              <IconCurrentLocation className="stroke-1.5" />
            </Button>
            <Button
              variant="text"
              size="none"
              onClick={() => setOpenFilter(true)}
              className=" hover:bg-gray-200"
            >
              <IconFilter className="stroke-1.5 " />

              {Object.keys(dirtyFields).length ? <PulsingDot /> : null}
            </Button>
            <FilterSidebar open={openFilter} setOpen={setOpenFilter} />
            <Dialog2
              open={openCreateCampaign}
              setOpen={setOpenCreateCampaign}
              title={'Create campaign'}
            >
              <CreateCampaignContent
                onCompletion={() => setOpenCreateCampaign(false)}
              />
            </Dialog2>
          </div>
        </Panel>
        <Panel position="center-bottom">
          <Fetching fetching={loading} />
          {Object.entries(errors).map(([title, value]) => (
            <div
              key={title}
              className="flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm"
            >
              <IconAlertCircle /> {value.message}
            </div>
          ))}
        </Panel>
        <StyleMap />
      </Map>
    </div>
  )
}

export const StyleMap = () => {
  const { current } = useMap()
  current?.on('style.load', () => {
    current?.getMap().setFog({
      color: 'rgb(255, 255, 255)', // Lower atmosphere
      range: [1, 10],
      //   @ts-ignore
      'high-color': 'rgb(200, 200, 200)', // Upper atmosphere
      'horizon-blend': 0.05, // Atmosphere thickness (default 0.2 at low zooms)
      'space-color': 'rgb(150, 150, 150)', // Background color
      'star-intensity': 0.5, // Background star brightness (default 0.35 at low zoooms )
    })
  })
  return null
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

  const [mutateAsync, { loading }] = useCreateCampaignMutation()
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
      <HScroll>
        <HScroll.Body className="gap-2">
          {billboards.map((billboard) => (
            <HScroll.Child className="relative w-32 mb-2" key={billboard.id}>
              <img
                className="object-cover w-full h-32"
                src={billboard.images?.[0] || ''}
                alt=""
              />
              <div key={billboard.id}>{billboard.minBookingDays}</div>
              <div key={billboard.id}>{billboard.pricePerDay}</div>
              <Button
                size="none"
                fullWidth
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
      <div>Selected billboards: {billboards.length}</div>
      <div>
        Total: Rs.{' '}
        {billboards.reduce((acc, bill) => acc + (bill?.pricePerDay || 0), 0)}{' '}
        /day
      </div>
      <Button isLoading={loading} type="submit">
        Create campaign
      </Button>
    </Form>
  )
}
