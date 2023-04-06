import { HtmlLabel } from '../../atoms/HtmlLabel'
import { HtmlInput } from '../../atoms/HtmlInput'
import { Button } from '../../atoms/Button'
import Link from 'next/link'

import { FormTypeLogin, useFormLogin } from '@billboards-org/forms/src/login'
import { useAsync } from '@billboards-org/hooks/src/fetcher'
import { FormError } from '../../atoms/FormError'
import { Form } from '../../atoms/Form'

import { useRouter } from 'next/navigation'
import { useDebounce } from '@billboards-org/hooks/src/async'
import { notification$ } from '@billboards-org/util/subjects'
import { selectUser } from '@billboards-org/store/user'
import { useAppSelector } from '@billboards-org/store'
import { login } from '@billboards-org/network/src/auth'

export interface ILoginFormProps {
  className?: string
}

const LoginForm = ({ className }: ILoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormLogin()

  const user = useAppSelector(selectUser)

  const { loading, error, success, callAsyncFn } = useAsync(
    (data: FormTypeLogin) => login(data),
    (err: any) => {
      if (err.code === 'auth/user-not-found') {
        return 'Invalid email.'
      } else if (err.code === 'auth/wrong-password') {
        return 'Invalid password.'
      }
      return 'Something went wrong. Please try again.'
    },
  )

  const debounce$ = useDebounce(4000)

  const router = useRouter()

  if (user.uid) {
    notification$.next({ message: 'Logged in. Redirecting...' })
    debounce$.next(() => router.push('/'))
  }
  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        const { email, password } = data
        const user = await callAsyncFn({ email, password })
        console.log('Login data: ', data, user)
      })}
    >
      <HtmlLabel title="Email" error={errors.email?.message}>
        <HtmlInput placeholder="Enter the email." {...register('email')} />
      </HtmlLabel>
      <HtmlLabel title="Password" error={errors.password?.message}>
        <HtmlInput
          type="password"
          placeholder="********"
          {...register('password')}
        />
      </HtmlLabel>
      <Button isLoading={loading} type="submit" fullWidth>
        Login
      </Button>
      {error ? <FormError error={error} /> : null}
      <div className="mt-4 text-sm">
        Do not have a billboards account?
        <br />
        <Link href="/register" className="font-bold">
          Create one{' '}
        </Link>
        now.
      </div>
    </Form>
  )
}

export { LoginForm }
