import { useCreateAgentMutation } from '@billboards-org/network/src/generated'
import { Button } from '../../atoms/Button'
import { Form } from '../../atoms/Form'
import { HtmlInput } from '../../atoms/HtmlInput'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { useFormCreateAgent } from '@billboards-org/forms'

export interface ICreateAgentProps {
  uid: string
}

export const CreateAgent = ({ uid }: ICreateAgentProps) => {
  const { register, handleSubmit } = useFormCreateAgent()
  const [mutateAsync, { loading }] = useCreateAgentMutation()

  return (
    <Form
      onSubmit={handleSubmit(async (ownerData) => {
        const { name } = ownerData
        const { data } = await mutateAsync({
          variables: {
            createAgentInput: { name, uid },
          },
        })
      })}
    >
      <HtmlLabel title="Name">
        <HtmlInput {...register('name')} />
      </HtmlLabel>
      <Button isLoading={loading} type="submit">
        Create agent
      </Button>
    </Form>
  )
}
