import {
  namedOperations,
  useCreateAgentMutation,
} from '@billboards-org/network/src/generated'
import { Button } from '../../atoms/Button'
import { Form } from '../../atoms/Form'
import { HtmlInput } from '../../atoms/HtmlInput'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { useFormCreateAgent } from '@billboards-org/forms'
import { Container } from '../../atoms/Container'

export interface ICreateAgentProps {
  uid: string
}

export const CreateAgent = ({ uid }: ICreateAgentProps) => {
  const { register, handleSubmit } = useFormCreateAgent()
  const [mutateAsync, { loading }] = useCreateAgentMutation()

  return (
    <Container>
      <Form
        onSubmit={handleSubmit(async (ownerData) => {
          const { name } = ownerData
          const { data } = await mutateAsync({
            variables: {
              createAgentInput: { name, uid },
            },
            awaitRefetchQueries: true,
            refetchQueries: [namedOperations.Query.getAgent],
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
    </Container>
  )
}
