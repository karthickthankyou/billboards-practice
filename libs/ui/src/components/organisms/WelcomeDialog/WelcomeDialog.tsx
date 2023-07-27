import { useEffect, useState } from 'react'
import { Dialog } from '../../atoms/Dialog'

export interface IWelcomeDialogProps {
  delay?: number
}

export const WelcomeDialog = ({ delay = 2000 }: IWelcomeDialogProps) => {
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

  console.log('open ', open)

  return (
    <Dialog
      open={open}
      setOpen={setOpen}
      title={'Hey, thanks for checking out my app.'}
    >
      <div>Hey there.</div>
      <div>Im looking for a full time job..</div>
    </Dialog>
  )
}
