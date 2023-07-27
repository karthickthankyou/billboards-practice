import { Button } from '../../atoms/Button'
import { Form } from '../../atoms/Form'
import { HtmlInput } from '../../atoms/HtmlInput'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { useFormCreateOwner } from '@billboards-org/forms'
import {
  namedOperations,
  useCreateOwnerMutation,
} from '@billboards-org/network/src/generated'

export interface IGetAccessPageProps {
  uid: string
}

export const GetOwnerAccessPage = ({ uid }: IGetAccessPageProps) => {
  const [createOwnerAsync, { loading }] = useCreateOwnerMutation()

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormCreateOwner()
  return (
    <Form
      className="w-full max-w-md mx-auto"
      onSubmit={handleSubmit(async ({ name }) => {
        await createOwnerAsync({
          variables: {
            createOwnerInput: { name, uid },
          },
          awaitRefetchQueries: true,
          refetchQueries: [namedOperations.Query.ownerMe],
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
