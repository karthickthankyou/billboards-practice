import { useTakeSkip } from '@billboards-org/hooks/src/async'
import {
  namedOperations,
  useFavoritesQuery,
  useRemoveFavoriteMutation,
} from '@billboards-org/network/src/generated'
import { ShowData } from '../../organisms/ShowData'
import { BillboardCard } from '../../organisms/BillboardsCard'
import { PlainButton } from '../../atoms/PlainButton'

export interface IAdvertiserWishlistProps {
  uid: string
}

export const AdvertiserWishlist = ({ uid }: IAdvertiserWishlistProps) => {
  const { setSkip, setTake, skip, take } = useTakeSkip()
  const { data } = useFavoritesQuery({
    variables: { where: { advertiserId: { equals: uid } } },
  })
  return (
    <div>
      <ShowData
        loading={false}
        pagination={{
          resultCount: data?.favorites.length,
          totalCount: data?.favoritesCount.count,
          setSkip,
          setTake,
          skip,
          take,
        }}
      >
        {data?.favorites.map((fav) => (
          <div>
            <BillboardCard billboard={fav.billboard} />
            <RemoveFromFavorites
              uid={uid}
              billboardId={fav.billboard.id}
              className="mt-2"
            />
          </div>
        ))}
      </ShowData>
    </div>
  )
}

export const RemoveFromFavorites = ({
  uid,
  billboardId,
  className,
}: {
  uid: string
  billboardId: number
  className?: string
}) => {
  const [removeFavorite, { data, loading }] = useRemoveFavoriteMutation()
  return (
    <PlainButton
      className={`underline underline-offset-4 text-xs ${className}`}
      onClick={async () => {
        await removeFavorite({
          variables: {
            where: {
              advertiserId_billboardId: { advertiserId: uid, billboardId },
            },
          },
          awaitRefetchQueries: true,
          refetchQueries: [namedOperations.Query.favorites],
        })
      }}
      loading={loading}
    >
      Remove
    </PlainButton>
  )
}
