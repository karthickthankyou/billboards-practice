import { useFormCreateAdvertiser } from '@billboards-org/forms/src/createAdvertiser'
import { useCreateAdvertiserMutation } from '@billboards-org/network/src/generated'
import { Container } from '../../atoms/Container'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { Form } from '../../atoms/Form'
import { Button } from '../../atoms/Button'

export interface ICreateAdvertiserProps {
  uid: string
}

export const CreateAdvertiser = ({ uid }: ICreateAdvertiserProps) => {
  const { register, handleSubmit } = useFormCreateAdvertiser()
  const [mutateAsync, { loading }] = useCreateAdvertiserMutation()

  return (
    <Container>
      <Form
        onSubmit={handleSubmit(async (ownerData) => {
          const { name } = ownerData
          const { data } = await mutateAsync({
            variables: {
              createAdvertiserInput: { name, uid },
            },
          })
        })}
      >
        <HtmlLabel title="Name">
          <HtmlInput placeholder="Enter your name" {...register('name')} />
        </HtmlLabel>
        <Button isLoading={loading} type="submit">
          Create advertiser
        </Button>
      </Form>
    </Container>
  )
}
