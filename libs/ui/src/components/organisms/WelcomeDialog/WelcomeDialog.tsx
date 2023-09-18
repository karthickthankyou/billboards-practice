import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Dialog } from '../../atoms/Dialog'

export interface IWelcomeDialogProps {
  delay?: number
}

export const WelcomeDialog = ({ delay = 5000 }: IWelcomeDialogProps) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const hasOpened = localStorage.getItem('hasOpened')
      if (!hasOpened) {
        setOpen(true)
        localStorage.setItem('hasOpened', 'true')
      }
    }, delay)

    // Clean up timeout when the component is unmounted or when delay changes
    return () => clearTimeout(timeoutId)
  }, [delay])

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      title={'Hey, thanks for checking out my app.'}
    >
      <div>
        Hey there. I&apos;m Karthick Ragavendran. The creator of this
        application.
      </div>
      <div>Im looking for a full time job..</div>
      <div>
        <Link href="https://www.linkedin.com/in/iamkarthickr/" target="_blank">
          Contact me through Linkedin.
        </Link>
      </div>
    </Dialog>
  )
}
