import Link from 'next/link'

import { Button } from '../../atoms/Button'
import { Form } from '../../atoms/Form'
import { HtmlInput } from '../../atoms/HtmlInput'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { useAppSelector } from '@billboards-org/store'
import { selectUser } from '@billboards-org/store/user'
import { useFormCreateOwner } from '@billboards-org/forms'
import {
  useCreateOwnerMutation,
  useGetOwnerQuery,
  useGetRolesQuery,
} from '@billboards-org/network/src/generated'

export interface IGetAccessPageProps {}

export const GetAccessPage = ({}: IGetAccessPageProps) => {
  const user = useAppSelector(selectUser)

  if (!user.uid) return <Link href="/login">Login</Link>

  return (
    <div>
      <CreateOwner uid={user.uid} />
    </div>
  )
}

export const CreateOwner = ({ uid }: { uid: string }) => {
  const { data } = useGetOwnerQuery({
    variables: { where: { uid } },
  })

  const [createOwnerAsync, { loading }] = useCreateOwnerMutation()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormCreateOwner()

  if (!data?.owner) {
    return (
      <Form
        className="w-full max-w-md mx-auto"
        onSubmit={handleSubmit(async ({ name }) => {
          console.log(data)
          await createOwnerAsync({
            variables: {
              createOwnerInput: { name, uid },
            },
          })
        })}
      >
        <HtmlLabel title="name" error={errors.name?.message}>
          <HtmlInput {...register('name')} />
        </HtmlLabel>
        <Button isLoading={loading} type="submit">
          Get owner access
        </Button>
      </Form>
    )
  }

  return (
    <div>
      <div>Owner</div>
    </div>
  )
}
