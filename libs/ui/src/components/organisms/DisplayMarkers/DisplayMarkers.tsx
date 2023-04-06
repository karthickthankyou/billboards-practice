import { ReactNode, useEffect, useState } from 'react'
import { Marker, Popup } from 'react-map-gl'

import { Button } from '../../atoms/Button'

import { IconBillboard } from '../../../assets/billboard'
import { IconHeart, IconLoader, IconX } from '@tabler/icons-react'
import HScroll from '../../molecules/HScroll'
import { AnimatePresence, motion } from 'framer-motion'

import Tooltip from '../../atoms/Tooltip'

import { useAppDispatch, useAppSelector } from '@billboards-org/store'
import { selectUser } from '@billboards-org/store/user'
import { notification$ } from '@billboards-org/util/subjects'
import {
  addBillboardToCampaign,
  removeBillboardFromCampaign,
} from '@billboards-org/store/campaigns'
import { useKeypress } from '@billboards-org/hooks'
import {
  BillboardType,
  SearchBillboardsQuery,
  SearchBillboardsQueryVariables,
  useCreateFavoriteMutation,
  useSearchBillboardsQuery,
  useGetFavoriteQuery,
  useRemoveFavoriteMutation,
  useGetFavoriteLazyQuery,
} from '@billboards-org/network/src/generated'

const displayText = {
  [BillboardType.Classic]: 'Classic',
  [BillboardType.Led]: 'LED',
  [BillboardType.Neon]: 'Neon',
  [BillboardType.ThreeDimensional]: '3D',
  [BillboardType.Vinyl]: 'Vinyl',
}

export const DisplayMarkers = ({
  variables,
  switchMode,
}: {
  variables: SearchBillboardsQueryVariables
  switchMode: boolean
}) => {
  const { data, loading } = useSearchBillboardsQuery({ variables })

  return (
    <div>
      {data?.searchBillboards.map((marker) => (
        <MarkerWithPopup key={marker.id} marker={marker} />
      ))}
    </div>
  )
}

export const MarkerWithPopup = ({
  marker,
}: {
  marker: SearchBillboardsQuery['searchBillboards'][number]
}) => {
  const [showPopup, setShowPopup] = useState(false)
  useKeypress(['Escape'], () => setShowPopup(false))
  const user = useAppSelector(selectUser)
  const [mutateCreateFavoriteAsync, { loading: addingFavorite }] =
    useCreateFavoriteMutation()
  const [mutateRemoveFavoriteAsync, { loading: removingFavorite }] =
    useRemoveFavoriteMutation()
  const [refetchFavorite, { data: favoriteBillboard }] =
    useGetFavoriteLazyQuery()

  useEffect(() => {
    if (user.uid && marker.id) {
      refetchFavorite({
        variables: {
          where: {
            advertiserId_billboardId: {
              billboardId: +marker.id,
              advertiserId: user.uid,
            },
          },
        },
      })
    }
  }, [user.uid, marker.id, refetchFavorite])

  return (
    <div key={marker.id}>
      {showPopup ? (
        <Popup
          latitude={marker.lat}
          longitude={marker.lng}
          onOpen={() => console.log('Opened')}
          closeOnClick={false}
          anchor="bottom"
          offset={24}
          closeButton={false}
        >
          <PopupContent onClose={() => setShowPopup(false)}>
            <HScroll className="relative">
              <div className="absolute flex items-center justify-between w-full h-full ">
                <HScroll.Arrow
                  distance={200}
                  className="z-10 "
                  arrowClassName="shadow-md bg-white/80 text-black"
                />
                <HScroll.Arrow
                  right
                  distance={200}
                  className="z-10 "
                  arrowClassName="shadow-md  bg-white/80 text-black"
                />
              </div>
              <HScroll.Body>
                {marker.images?.map((img) => (
                  <img key={img} src={img} />
                ))}
              </HScroll.Body>
            </HScroll>
            <div className="p-2 space-y-1">
              <div className="grid grid-cols-2 gap-1">
                <TitleValue title="Elevation">
                  {marker.elevation || '-'} ft
                </TitleValue>
                <TitleValue title="Height">{marker.height} ft</TitleValue>
                <TitleValue title="Width">{marker.width} ft</TitleValue>
                <TitleValue title="Type">{displayText[marker.type]}</TitleValue>
              </div>
              <TitleValue title="Daily impressions">
                {marker.impressionsPerDay}
              </TitleValue>
              <TitleValue title="Minimum days">
                {marker.minBookingDays}
              </TitleValue>
              <TitleValue title="Price per day">
                Rs. {marker.pricePerDay}
              </TitleValue>
              <Tooltip
                placement="top"
                arrow
                title={!favoriteBillboard?.favorite ? 'Wishlist' : 'Unwishlist'}
              >
                <Button
                  variant="text"
                  onClick={async () => {
                    if (!user.uid) {
                      notification$.next({ message: 'You are not logged in.' })
                      return
                    }
                    if (!favoriteBillboard?.favorite) {
                      const { data, errors } = await mutateCreateFavoriteAsync({
                        variables: {
                          createFavoriteInput: {
                            billboardId: marker.id,
                            advertiserId: user.uid,
                          },
                        },
                      })
                      if (errors) {
                        notification$.next({ message: 'Please try again.' })
                      }
                    } else {
                      await mutateRemoveFavoriteAsync({
                        variables: {
                          where: {
                            advertiserId_billboardId: {
                              billboardId: +marker.id,
                              advertiserId: user.uid,
                            },
                          },
                        },
                      })
                    }
                    await refetchFavorite()
                  }}
                >
                  {addingFavorite || removingFavorite ? (
                    <IconLoader className="animate-spin" />
                  ) : favoriteBillboard?.favorite ? (
                    <IconHeart className="text-red-600 fill-red-500 " />
                  ) : (
                    <IconHeart />
                  )}
                </Button>
              </Tooltip>
            </div>
            <ButtonStatus billboard={marker} />
          </PopupContent>
        </Popup>
      ) : null}

      <Marker
        anchor="bottom"
        latitude={marker.lat}
        longitude={marker.lng}
        // rotation={switchMode ? marker.angle || 0 : 0}

        onClick={() => {
          console.log('Cklicked', marker.id)
          setShowPopup((state) => !state)
        }}
      >
        {/* {console.log('marker id', marker.id)} */}
        <div className="cursor-pointer">
          <IconBillboard type={'front'} />
        </div>
        {/* <motion.div
          key={marker.id}
          whileHover={{ scale: 1.5 }}
          initial={{ opacity: 0, translateY: 12 }}
          animate={{ opacity: 1, translateY: 0 }}
          exit={{ opacity: 0, translateY: 6 }}
          className="origin-bottom cursor-pointer"
          //   onClick={() => {
          //     console.log('on click', +marker.id)
          //     setShowPopup(true)
          //   }}
        ></motion.div> */}
      </Marker>
    </div>
  )
}

export const PopupContent = ({
  onClose,
  children,
}: {
  onClose: () => void
  children: ReactNode
}) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, transform: 'translateY(50%)' }}
        animate={{ opacity: 1, transform: 'translateY(0px)' }}
        exit={{ opacity: 0, transform: 'translateY(50%)' }}
        className="grid grid-cols-1 grid-rows-1 "
      >
        <div className="col-start-1 row-start-1 ">{children}</div>
        <div className="flex justify-end col-start-1 row-start-1 p-2 items-top">
          <button
            type="button"
            className="absolute top-0 right-0 p-0.5 rounded-bl bg-black/30 hover:bg-black/40"
            onClick={onClose}
          >
            <IconX className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export const TitleValue = ({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) => {
  if (!children) return null
  return (
    <div>
      <div className="text-xs font-bold">{title}</div>
      <div>{children}</div>
    </div>
  )
}

export const ButtonStatus = ({
  billboard,
}: {
  billboard: SearchBillboardsQuery['searchBillboards'][number]
}) => {
  const dispatch = useAppDispatch()
  const billboardsInCampaign = useAppSelector(
    (state) => state.campaigns.billboards,
  )

  if (billboardsInCampaign.filter((bill) => bill.id === billboard.id).length) {
    return (
      <Button
        className="w-full"
        variant="text"
        onClick={() => {
          dispatch(removeBillboardFromCampaign(billboard.id))
        }}
      >
        Remove from campaign
      </Button>
    )
  }

  return (
    <Button
      className="w-full"
      onClick={() => {
        dispatch(addBillboardToCampaign(billboard))
      }}
    >
      Add to campaign
    </Button>
  )
}
