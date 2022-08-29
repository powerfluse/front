import Input from '../components/input'
import Checkbox from '../components/checkbox'
import { useFormContext } from 'react-hook-form'

export default function FormGroupFirmaFeuerwerkNet() {
  const { watch } = useFormContext()
  const isMember = watch('feuerwerk_net_mitglied')
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-700">
                Mitgliederbereich
              </h3>
              <p className="mt-1 text-md font-source text-gray-600">
                Zugang zum BVPK-Migliederbereich{' '}
                <a
                  className="text-bvpk-700 font-bold underline decoration-bvpk-300 hover:decoration-2"
                  href="http://feuerwerk.net"
                >
                  auf FEUERWERK.net
                </a>
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-gray-100 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <Checkbox
                      name="feuerwerk_net_mitglied"
                      title="Ich bin Mitglied im FEUERWERK.net Forum und möchte, dass der BVPK-Mitgliederbereich für mich freigeschaltet wird. Mit der Angabe meines Mitgliedsname stimme ich der Übermittlung des Mitgliedsnamens an feuerwerk.net zu."
                    />
                  </div>
                  {isMember && (
                    <div className="col-span-6">
                      <Input
                        name="feuerwerk_net"
                        msg="max. 40 Zeichen"
                        title="Mitgliedsname"
                        validation={{
                          maxLength: 40,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-100" />
        </div>
      </div>
    </>
  )
}
