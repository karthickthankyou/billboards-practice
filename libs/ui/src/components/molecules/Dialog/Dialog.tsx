import { Dialog, Transition } from '@headlessui/react'
import { IconX } from '@tabler/icons-react'

import { Dispatch, Fragment, ReactElement, SetStateAction } from 'react'

interface IMyDialogProps {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
  children: ReactElement | ReactElement[]
  className?: string
}

const MyDialog = ({ open, setOpen, children, className }: IMyDialogProps) => (
  <Transition appear show={open} as={Fragment}>
    <Dialog
      as="div"
      className={`fixed inset-0 z-10 overflow-y-auto max-w-xl mx-auto w-full `}
      onClose={() => setOpen(false)}
    >
      <div className="relative min-h-screen text-center ">
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/20" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        <span className="inline-block h-screen align-middle" aria-hidden="true">
          &#8203;
        </span>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div
            className={`${className} inline-block w-full p-6 overflow-scroll text-left transition-all rounded-sm transform bg-white shadow-xl `}
          >
            <button
              type="button"
              className="absolute top-0 right-0 flex items-center justify-center w-8 h-8"
              onClick={() => setOpen(false)}
            >
              <IconX className="text-gray-600" />
            </button>
            {children}
          </div>
        </Transition.Child>
      </div>
    </Dialog>
  </Transition>
)

const { Title } = Dialog
export { Title, MyDialog as Dialog }
