import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'
import { TitleValue } from '@billboards-org/ui/src/components/atoms/TitleValue'
import { HtmlLabel } from '@billboards-org/ui/src/components/atoms/HtmlLabel'
import { HtmlInput } from '@billboards-org/ui/src/components/atoms/HtmlInput'
import { HtmlTextArea } from '@billboards-org/ui/src/components/atoms/HtmlTextArea'
import { Button } from '@billboards-org/ui/src/components/atoms/Button'
import { Container } from '@billboards-org/ui/src/components/atoms/Container'

const TextComment = ({ children }: { children: ReactNode }) => (
  <span className="text-gray-700">{children}</span>
)

const Contact = () => {
  const contactFormSchema = z
    .object({
      fullName: z.string().min(1, { message: 'Please enter your name' }),
      email: z.string().min(1, { message: 'Please enter your email' }).email(),
      phone: z.string().optional(),
      message: z.string().min(1, { message: 'Please enter your message' }),
    })
    .required()

  type ContactFormType = z.infer<typeof contactFormSchema>

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })
  return (
    <Container className="grid gap-8 py-12 text-lg leading-loose lg:grid-cols-3">
      <div className="flex flex-col max-w-md col-span-1 gap-4">
        <h1 className="text-xl font-black">Get in touch</h1>
        <p>
          If you have any questions or concerns about our services, we&apos;d be
          delighted to hear from you. You can reach us by phone{' '}
          <TextComment>
            (just don&apos;t call us in the middle of the night, okay?)
          </TextComment>
          , email, or in person at our office in Tokyo{' '}
          <TextComment>
            (we have a really comfy couch, you should come sit on it sometime)
          </TextComment>
          .
        </p>
        <TitleValue title="Phone">03-1234-5678</TitleValue>
        <TitleValue title="Email">info@billboards.com</TitleValue>
        <TitleValue title="Address">
          <p>Billboards Co. Ltd.</p>
          <p>2-3-4 Roppongi, Minato-ku</p>
          <p>Tokyo, Japan 106-0032</p>
        </TitleValue>

        <p>
          Our office is open from 9am to 5pm, Monday through Friday{' '}
          <TextComment>
            (unless it&apos;s raining, in which case we might close early to go
            have some fun in the rain)
          </TextComment>
          . We look forward to hearing from you!
        </p>
      </div>
      <div className="col-span-2 gap-4 rounded-sm">
        <form
          onSubmit={onSubmit}
          className="grid grid-cols-2 gap-4 lg:p-12 lg:bg-white "
        >
          <HtmlLabel title="Fullname" error={errors.fullName?.message}>
            <HtmlInput placeholder="Enter name" {...register('fullName')} />
          </HtmlLabel>
          <HtmlLabel title="Email" error={errors.email?.message}>
            <HtmlInput
              placeholder="Enter email"
              type="email"
              {...register('email')}
            />
          </HtmlLabel>
          <HtmlLabel title="Phone" error={errors.phone?.message} optional>
            <HtmlInput placeholder="Enter phone" {...register('phone')} />
          </HtmlLabel>
          <HtmlLabel title="Message" error={errors.message?.message}>
            <HtmlTextArea
              placeholder="Enter what is in your heart"
              {...register('message')}
            />
          </HtmlLabel>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    </Container>
  )
}

export default Contact
