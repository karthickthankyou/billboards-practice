import { Container } from '../../atoms/Container'
import { Form } from '../../atoms/Form'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { Map } from '@billboards-org/ui/src/components/organisms/Map'
import {
  FormTypeCreateBillboard,
  initialViewState,
  useCreateBillboardForm,
} from '@billboards-org/forms/src/createBillboard'
import HtmlSelect from '../../atoms/HtmlSelect'
import { Button } from '../../atoms/Button'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { useFormContext, useWatch, Controller } from 'react-hook-form'
import { ChangeEvent, useEffect, useState } from 'react'
import { ProgressBar } from '../../atoms/ProgressBar'
import {
  CenterOfMap,
  DefaultZoomControls,
} from '../../organisms/Map/ZoomControls/ZoomControls'
import { SearchPlaceBox } from '../../organisms/SearchPlaceBox'

import Link from 'next/link'

import {
  BillboardType,
  useCreateBillboardMutation,
} from '@billboards-org/network/src/generated'
import { useAppSelector } from '@billboards-org/store'
import { selectUser } from '@billboards-org/store/user'
import { notification$ } from '@billboards-org/util/subjects'
import { storage } from '@billboards-org/network/src/config/firebase'
import { Panel } from '../../organisms/Map/Panel'

import { HtmlTextArea } from '../../atoms/HtmlTextArea'
import { Dialog } from '../../atoms/Dialog'
import { Marker } from '../../organisms/Map/MapMarker'
import { IconBillboard } from '../../../assets/billboard'
import { useMap } from 'react-map-gl'
import { RangeSlider } from '../../molecules/RangeSlider'
import { useImageUpload } from '@billboards-org/forms/src/hooks'

export interface IOwnerPageProps {}

export const CreateBillboard = () => {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useFormContext<FormTypeCreateBillboard>()

  const [mutateAsync, { loading, data: newlyCreatedBillboard }] =
    useCreateBillboardMutation()

  const [showDialog, setshowDialog] = useState(false)

  useEffect(() => {
    if (newlyCreatedBillboard?.createBillboard) {
      reset()
      setshowDialog(true)
    }
  }, [newlyCreatedBillboard])

  const [{ percent, uploading }, uploadImages] = useImageUpload()

  const user = useAppSelector(selectUser)

  return (
    <Container className="space-y-2">
      <Form
        onSubmit={handleSubmit(async (data) => {
          if (!user.uid) {
            notification$.next({ message: 'You are not logged in.' })
            return
          }
          const uploadedImages = await uploadImages(data.images)
          const { images, ...rest } = data
          await mutateAsync({
            variables: {
              createBillboardInput: {
                ...rest,
                images: uploadedImages,
                ownerId: user.uid,
              },
            },
          })
        })}
      >
        <div className="grid gap-2 md:grid-cols-2">
          <div className="flex flex-col h-full gap-2 min-h-[60rem]">
            <HtmlLabel title="Name" error={errors.name?.message}>
              <HtmlInput
                placeholder="Enter the name of the billboard"
                type="string"
                {...register('name')}
              />
            </HtmlLabel>
            <HtmlLabel title="Address" error={errors.address?.message}>
              <HtmlTextArea type="string" {...register('address')} />
            </HtmlLabel>
            <div className="grid grid-cols-3 gap-2">
              <HtmlLabel title="Width" error={errors.width?.message}>
                <HtmlInput
                  placeholder="Width in meters"
                  type="number"
                  {...register('width', { valueAsNumber: true })}
                />
              </HtmlLabel>
              <HtmlLabel title="Height" error={errors.height?.message}>
                <HtmlInput
                  placeholder="Height in meters"
                  type="number"
                  {...register('height', { valueAsNumber: true })}
                />
              </HtmlLabel>
              <HtmlLabel title="Elevation" error={errors.elevation?.message}>
                <HtmlInput
                  placeholder="Elevation from floor in meters"
                  type="number"
                  {...register('elevation', { valueAsNumber: true })}
                  defaultValue={0}
                />
              </HtmlLabel>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <HtmlLabel
                title="Impressions Per Day"
                error={errors.impressionsPerDay?.message}
              >
                <HtmlInput
                  placeholder="Impressions count"
                  type="number"
                  {...register('impressionsPerDay', { valueAsNumber: true })}
                />
              </HtmlLabel>
              <HtmlLabel
                title="Minimum booking days"
                error={errors.minBookingDays?.message}
              >
                <HtmlInput
                  placeholder="Minimum booking days"
                  type="number"
                  {...register('minBookingDays')}
                  defaultValue={0}
                />
              </HtmlLabel>
              <HtmlLabel
                title="Price per day"
                error={errors.pricePerDay?.message}
              >
                <HtmlInput
                  placeholder="Price in rupees per day"
                  type="number"
                  {...register('pricePerDay', { valueAsNumber: true })}
                />
              </HtmlLabel>
            </div>
            <HtmlLabel
              title="Images"
              error={errors.images?.message?.toString()}
            >
              <Controller
                control={control}
                name={`images`}
                render={({ field }) => (
                  <HtmlInput
                    type="file"
                    accept="image/*"
                    multiple={true}
                    onChange={(e) => field.onChange(e?.target?.files)}
                  />
                )}
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
              <Button isLoading={loading} className="w-full " type="submit">
                Create billboard
              </Button>
            </div>
          </div>
          <Map
            initialViewState={initialViewState}
            heightClasses="h-full min-h-[24rem]"
          >
            <MapMarker />

            <Panel position="left-top">
              <SearchBox
                onChange={({ lat, lng }) => {
                  setValue('lat', lat, { shouldValidate: true })
                  setValue('lng', lng, { shouldValidate: true })
                }}
              />
            </Panel>
            <Panel position="right-center">
              <DefaultZoomControls>
                <CenterOfMap
                  onClick={(latLng) => {
                    const lat = parseFloat(latLng.lat.toFixed(6))
                    const lng = parseFloat(latLng.lng.toFixed(6))
                    console.log('set lat,lng', lat, lng)
                    setValue('lat', lat, { shouldValidate: true })
                    setValue('lng', lng, { shouldValidate: true })
                  }}
                />
              </DefaultZoomControls>
            </Panel>
            <Panel className="w-full max-w-xs" position="center-bottom">
              <Controller
                control={control}
                name={`angle`}
                render={({ field }) => (
                  <RangeSlider
                    step={10}
                    aria-label="Angle"
                    value={field.value}
                    min={0}
                    max={360}
                    valueLabelFormat={(val) => `${val}°`}
                    onChange={(e, newValue) => {
                      setValue('angle', newValue as number)
                    }}
                  />
                )}
              />
            </Panel>
          </Map>
        </div>
      </Form>
      <Dialog title="Congrats." setOpen={setshowDialog} open={showDialog}>
        <div>Your billboard request is created.</div>
        <Link href="/">Go to owner dashboard.</Link>
      </Dialog>
    </Container>
  )
}

export const SearchBox = ({
  onChange,
}: {
  onChange: ({ lat, lng }: { lat: number; lng: number }) => void
}) => {
  const { current: map } = useMap()
  return (
    <SearchPlaceBox
      setLocationInfo={(locationInfo) => {
        const lat = locationInfo.latLng[0]
        const lng = locationInfo.latLng[1]
        onChange({ lat, lng })

        map?.flyTo({
          center: { lat, lng },
          essential: true,
        })
      }}
    />
  )
}

export const MapMarker = () => {
  const { setValue } = useFormContext<FormTypeCreateBillboard>()
  const { lat, lng, angle } = useWatch<FormTypeCreateBillboard>()
  console.log('lat, lng', lat, lng)

  return (
    <Marker
      pitchAlignment="auto"
      longitude={lng || 0}
      latitude={lat || 0}
      draggable
      rotation={angle}
      onDragEnd={({ lngLat }) => {
        const { lat, lng } = lngLat
        setValue('lat', lat || 0)
        setValue('lng', lng || 0)
      }}
    >
      <IconBillboard type="top" />
    </Marker>
  )
}
