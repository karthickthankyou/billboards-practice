import { Container } from '../../atoms/Container'
import { format } from 'date-fns'
import { Form } from '../../atoms/Form'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { useCreateBillboardForm } from '@billboards-org/forms/src/createBillboard'
import HtmlSelect from '../../atoms/HtmlSelect'
import { Button } from '../../atoms/Button'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'

import { ChangeEvent, useEffect, useState } from 'react'
import { ProgressBar } from '../../atoms/ProgressBar'
import 'mapbox-gl/dist/mapbox-gl.css'

import { SearchPlaceBox } from '../../organisms/SearchPlaceBox'

import Map, { Marker, NavigationControl } from 'react-map-gl'

import { RangeSlider } from '../../molecules/RangeSlider'

import {
  BillboardType,
  GetOwnerQuery,
  useCreateBillboardMutation,
} from '@billboards-org/network/src/generated'
import { useAppSelector } from '@billboards-org/store'
import { selectUser } from '@billboards-org/store/user'
import { notification$ } from '@billboards-org/util/subjects'
import { storage } from '@billboards-org/network/src/config/firebase'

export interface IOwnerPageProps {
  data: GetOwnerQuery
}

export const OwnerPage = ({ data }: IOwnerPageProps) => {
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    watch,
    formState: { errors },
  } = useCreateBillboardForm()

  const formData = watch()
  console.log(formData, errors)

  const [percent, setPercent] = useState(0)
  const [images, setImages] = useState<string[]>([])
  const [markerPosition, setMarkerPosition] = useState({
    longitude: -100,
    latitude: 40,
  })

  const [mutateAsync, { loading }] = useCreateBillboardMutation()

  const [markerRotation, setMarkerRotation] = useState(0)

  console.log('markerPosition', markerPosition)
  const [viewState, setViewState] = useState({
    longitude: -100,
    latitude: 40,
    zoom: 3.5,
  })

  useEffect(() => {
    setValue('images', images)
  }, [images, setValue])

  useEffect(() => {
    console.log('markerPosition', markerPosition)
    setValue('lat', markerPosition.latitude)
    setValue('lng', markerPosition.longitude)
  }, [markerPosition, setValue])

  const handleUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files?.length) {
      //   setError('images')
      alert('Please upload an image first!')
      return
    }

    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const storageRef = ref(storage, `/files/${file.name}`) // progress can be paused and resumed. It also exposes progress updates. // Receives the storage reference and the file to upload.
      const uploadTask = uploadBytesResumable(storageRef, file)
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const percent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
          ) // update progress
          setPercent(percent)
        },
        (err) => console.log(err),
        () => {
          // download url
          getDownloadURL(uploadTask.snapshot.ref).then((url) => {
            setImages((state) => [...state, url])
            console.log(url)
          })
        },
      )
    }
  }

  const user = useAppSelector(selectUser)

  return (
    <Container className="space-y-2">
      <div className="text-xl font-bold">{data.owner.name}</div>
      <div className="text-sm">
        Role granted on {format(new Date(data.owner.createdAt), 'PPPP')}
      </div>
      <div>{JSON.stringify(data.owner.billboards)}</div>
      <Form
        onSubmit={handleSubmit(async (data) => {
          if (!user.uid) {
            notification$.next({ message: 'You are not logged in.' })
            return
          }
          const { images, ...rest } = data
          await mutateAsync({
            variables: {
              createBillboardInput: {
                ...rest,
                images,
                ownerId: user.uid,
              },
            },
          })
        })}
      >
        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <HtmlLabel title="Width" error={errors.width?.message}>
              <HtmlInput
                type="number"
                {...register('width', { valueAsNumber: true })}
              />
            </HtmlLabel>
            <HtmlLabel title="Height" error={errors.height?.message}>
              <HtmlInput
                type="number"
                {...register('height', { valueAsNumber: true })}
              />
            </HtmlLabel>
            <HtmlLabel
              title="Impressions Per Day"
              error={errors.impressionsPerDay?.message}
            >
              <HtmlInput
                type="number"
                {...register('impressionsPerDay', { valueAsNumber: true })}
              />
            </HtmlLabel>
            <HtmlLabel
              title="Minimum booking days"
              error={errors.minBookingDays?.message}
            >
              <HtmlInput
                type="number"
                {...register('minBookingDays')}
                defaultValue={0}
              />
            </HtmlLabel>
            <HtmlLabel title="Elevation" error={errors.elevation?.message}>
              <HtmlInput
                type="number"
                {...register('elevation', { valueAsNumber: true })}
                defaultValue={0}
              />
            </HtmlLabel>
            <HtmlLabel
              title="Price per day"
              error={errors.pricePerDay?.message}
            >
              <HtmlInput
                type="number"
                {...register('pricePerDay', { valueAsNumber: true })}
              />
            </HtmlLabel>
            <HtmlLabel title="Images">
              <HtmlInput
                multiple
                type="file"
                placeholder="Upload images"
                accept="image/*"
                onChange={handleUpload}
              />
              {percent > 0 ? (
                <ProgressBar variant="determinate" value={percent} />
              ) : null}
            </HtmlLabel>
            <HtmlLabel title="Type" error={errors.type?.message}>
              <HtmlSelect {...register('type')}>
                <option value={BillboardType.Classic}>Classic</option>
                <option value={BillboardType.Led}>LED</option>
                <option value={BillboardType.Neon}>Neon</option>
                <option value={BillboardType.ThreeDimensional}>3D</option>
                <option value={BillboardType.Vinyl}>Vinyl</option>
              </HtmlSelect>
            </HtmlLabel>
            <div className="mt-auto">
              <Button isLoading={loading} className="w-full" type="submit">
                Create billboard
              </Button>
            </div>
          </div>
          <Map
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            mapStyle="mapbox://styles/mapbox/light-v11"
            mapboxAccessToken="pk.eyJ1IjoiaWFta2FydGhpY2siLCJhIjoiY2t4b3AwNjZ0MGtkczJub2VqMDZ6OWNrYSJ9.-FMKkHQHvHUeDEvxz2RJWQ"
            style={{ height: '60vh' }}
          >
            {/* <NavigationControl /> */}
            <Marker
              pitchAlignment="auto"
              longitude={markerPosition.longitude}
              latitude={markerPosition.latitude}
              draggable
              rotation={markerRotation}
              onDragEnd={({ lngLat }) => {
                setMarkerPosition({
                  latitude: lngLat.lat,
                  longitude: lngLat.lng,
                })
              }}
            >
              {/* <Icon360View className="w-5 h-5" /> */}
              <div className="flex flex-col items-center justify-center w-6 h-6 rounded-full cursor-pointer bg-black/10">
                <div className="w-5 h-0.5 bg-black" />
                <div className="w-2 h-0.5 bg-black" />
              </div>
            </Marker>
            {/* <Panel position="left-top">
              <SearchPlaceBox
                setLocationInfo={(locationInfo) => {
                  const { latLng } = locationInfo
                  setViewState({
                    latitude: latLng[0],
                    longitude: latLng[1],
                    zoom: 12,
                  })
                  setMarkerPosition({
                    latitude: latLng[0],
                    longitude: latLng[1],
                  })
                }}
              />
              <DefaultZoomControls />
              <RangeSlider
                step={5}
                aria-label="Angle"
                value={markerRotation}
                min={0}
                max={360}
                valueLabelFormat={(val) => `${val}°`}
                onChange={(e, newValue) => {
                  setMarkerRotation(newValue as number)
                  setValue('angle', newValue as number)
                }}
              />
            </Panel> */}
          </Map>
        </div>
      </Form>
    </Container>
  )
}
