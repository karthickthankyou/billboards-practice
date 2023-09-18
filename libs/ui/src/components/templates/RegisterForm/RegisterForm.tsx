import { Button } from '../../atoms/Button'
import { HtmlInput } from '../../atoms/HtmlInput'
import { HtmlLabel } from '../../atoms/HtmlLabel'
import Link from 'next/link'
import { register as registerUser } from '@billboards-org/network/src/auth'

import { Form } from '../../atoms/Form'
import {
  FormTypeRegister,
  useFormRegister,
} from '@billboards-org/forms/src/register'
import { useAsync } from '@billboards-org/hooks/src/fetcher'
import { useAppSelector } from '@billboards-org/store'
import { selectUser } from '@billboards-org/store/user'
import { notification$ } from '@billboards-org/util/subjects'
import { useRouter } from 'next/navigation'

export interface ISignupFormProps {
  onCompletion?: (args: { displayName: string; uid: string }) => void
}

export const RegisterForm = ({ onCompletion }: ISignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormRegister()

  const { data, loading, error, success, callAsyncFn } = useAsync(
    (data: FormTypeRegister) => registerUser(data),
    (err: any) => {
      console.log('err', err)
      if (err.code === 'auth/email-already-in-use') {
        const error = 'Email already in use.'
        notification$.next({ message: error, duration: 8000, type: 'error' })
        return error
      }
      return 'Something went wrong. Please try again.'
    },
  )

  const user = useAppSelector(selectUser)
  const router = useRouter()

  if (user.uid) {
    router.push('/')
  }

  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        const { email, password, displayName } = data
        await callAsyncFn({ email, password, displayName })
      })}
    >
      <HtmlLabel title="Email" error={errors.email?.message}>
        <HtmlInput placeholder="Enter the email." {...register('email')} />
      </HtmlLabel>
      <HtmlLabel title="Password" error={errors.password?.message}>
        <HtmlInput
          type="password"
          placeholder="······"
          {...register('password')}
        />
      </HtmlLabel>
      <HtmlLabel title="Display name" error={errors.displayName?.message}>
        <HtmlInput
          placeholder="Enter your name."
          {...register('displayName')}
        />
      </HtmlLabel>
      {Object.keys(errors).length ? (
        <div className="text-xs text-gray-600">
          Please fix the above {Object.keys(errors).length} errors
        </div>
      ) : null}
      <Button type="submit" isLoading={loading} fullWidth>
        Create account
      </Button>
      <div className="mt-4 text-sm ">
        Already have an billboards account?
        <br />
        <Link href="/login" className="font-bold">
          Login{' '}
        </Link>
        now.
      </div>
    </Form>
  )
}
