import Map, { LngLatBounds, useMap } from 'react-map-gl'

import { SearchPlaceBox } from '../../organisms/SearchPlaceBox'
import { useEffect, useState } from 'react'
import 'mapbox-gl/dist/mapbox-gl.css'

import { Button } from '../../atoms/Button'
import {
  IconAlertCircle,
  IconCurrentLocation,
  IconFilter,
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
} from '@billboards-org/network/src/generated'

export interface ISearchPageTemplateProps {}

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

  const [bounds, setBounds] = useState<LngLatBounds>()
  const [switchMode, setSwitchMode] = useState(false)

  const dispatch = useAppDispatch()

  const { variables } = useConvertSearchFormToVariables()

  return (
    <div>
      <Map
        {...viewState}
        projection={'globe'}
        doubleClickZoom={false}
        onMove={(evt) => setViewState(evt.viewState)}
        onLoad={(evt) => {
          // @ts-ignore
          const { _sw, _ne } = evt.target.getBounds()
          setBounds(evt.target.getBounds())
          console.log(_sw, _ne, evt.target.getBounds())
          setValue('locationFilter', {
            nw_lat: _ne.lat,
            nw_lng: _sw.lng,
            se_lat: _sw.lat,
            se_lng: _ne.lng,
          })
        }}
        onMoveEnd={(evt) => {
          // @ts-ignore
          const { _sw, _ne } = evt.target.getBounds()
          setBounds(evt.target.getBounds())
          console.log(_sw, _ne, evt.target.getBounds())
          setValue('locationFilter', {
            nw_lat: _ne.lat,
            nw_lng: _sw.lng,
            se_lat: _sw.lat,
            se_lng: _ne.lng,
          })
        }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken="pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ"
        style={{ height: '92vh' }}
        pitch={viewState.zoom > 6 ? 45 : 0}
        scrollZoom={false}
      >
        <DisplayMarkers variables={variables} switchMode={switchMode} />
        {/* <Panel position="right-center">
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

          <span className="px-2 pt-2 text-sm text-gray-500 border-2 border-gray-200 stroke-2 focus:ring-4 stroke-gray-200 fill-gray-500">
            <input
              type="date"
              placeholder="Start time"
              {...register('dateRange.startDate')}
            />
          </span>

          <span className="px-2 pt-2 text-sm text-gray-500 border-2 border-gray-200 stroke-2 focus:ring-4 stroke-gray-200 fill-gray-500">
            <input
              type="date"
              placeholder="End time"
              {...register('dateRange.endDate')}
            />
          </span>
          <Switch
            value={switchMode}
            onChange={(e) => setSwitchMode(e.target.checked)}
          />
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
          {Object.entries(errors).map(([title, value]) => (
            <div
              key={title}
              className="flex items-center gap-1 px-2 py-1 bg-white/10 backdrop-blur-sm"
            >
              <IconAlertCircle /> {value.message}
            </div>
          ))}
        </Panel> */}
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
        console.log('Data form: ', data)
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
