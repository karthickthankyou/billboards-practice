import { CreateBillboard } from '@billboards-org/ui/src/components/templates/CreateBillboard'
import { IsOwner } from '@billboards-org/ui/src/components/templates/IsOwner'
import { IsLoggedIn } from '@billboards-org/ui/src/components/templates/IsLoggedIn'

const CreateBillboardPage = () => {
  return (
    <IsLoggedIn>
      {(uid) => (
        <IsOwner uid={uid}>
          <CreateBillboard />
        </IsOwner>
      )}
    </IsLoggedIn>
  )
}

export default CreateBillboardPage
