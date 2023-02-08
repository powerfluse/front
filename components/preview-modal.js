import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/24/outline'
import router from 'next/router'
import MitgliedData from './mitglied-data'

export default function Modal(props) {
  if (!props.modalState) {
    return null
  }

  const Data = props.dataRenderComponent
  const cancelButtonRef = useRef()

  return (
    <Transition.Root show={props.modalState} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        open={props.modalState}
        onClose={props.modalStateFunction}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-500">
                  <CheckIcon
                    className="h-8 w-8 text-green-800"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl leading-6 font-titillium font-bold text-gray-700"
                  >
                    Danke! Hier nochmal die Eingaben zum Überprüfen:
                  </Dialog.Title>
                  <div className="mt-4 text-left">
                    <Data props={props.data} />
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6 grid grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
                <button
                  type="button"
                  className="col-span-2 md:col-span-1 button-secondary w-full mb-2"
                  onClick={() => {
                    props.modalStateFunction(false)
                  }}
                >
                  Da ist was falsch...
                </button>
                <button
                  type="submit"
                  className="col-span-2 md:col-span-1 button w-full mb-2"
                  onClick={() => {
                    props.submitFunction(props.data)
                    props.modalStateFunction(false)
                  }}
                >
                  Das passt so. Beitreten!
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
