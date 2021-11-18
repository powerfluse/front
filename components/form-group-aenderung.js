import Radio from '../components/radio'
import { useFormContext } from 'react-hook-form'

export default function FormGroupFirmaAenderung() {
  const { watch } = useFormContext()
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-300">
                Änderung Deiner Mitgliedschaft
              </h3>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-purple-800 sm:p-6 ">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <Radio
                      name="f_grundmitgliedschaft_behalten"
                      value="Ja"
                      title="Ich wandle meine Grundmitgliedschaft in eine Firmenmitgliedschaft um und bleibe zusätzlich auch als Privatperson Grundmitglied."
                    />
                  </div>
                  <div className="col-span-6">
                    <Radio
                      name="f_grundmitgliedschaft_behalten"
                      value="Nein"
                      title="Ich wandle nur meine Grundmitgliedschaft in eine Firmenmitgliedschaft um."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-purple-600" />
        </div>
      </div>
    </>
  )
}
