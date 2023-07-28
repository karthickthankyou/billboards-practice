import { useTakeSkip } from '@billboards-org/hooks/src/async'
import {
  namedOperations,
  useFavoritesQuery,
  useRemoveFavoriteMutation,
} from '@billboards-org/network/src/generated'
import { ShowData } from '../../organisms/ShowData'
import { BillboardCard } from '../../organisms/BillboardsCard'
import { PlainButton } from '../../atoms/PlainButton'
import { ShowDataSimple } from '../../organisms/ShowData/ShowData'

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
      <ShowDataSimple
        loading={false}
        pagination={{
          resultCount: data?.favorites.length || 0,
          setSkip,
          setTake,
          skip,
          take,
        }}
        title={'Favorites'}
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
      </ShowDataSimple>
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
