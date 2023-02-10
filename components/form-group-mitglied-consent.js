import Checkbox from '../components/checkbox'

import { useFormContext } from 'react-hook-form'

export default function FormGroupMitgliedConsent() {
  const { watch } = useFormContext()
  const wantsInsurance = watch('feuerwerk_versicherung')
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0"></div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-gray-100 sm:p-6 ">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <Checkbox
                      name="gdpr_consent"
                      href="/datenschutz"
                      pre_href_text="Ja, ich akzeptiere die "
                      href_text="Datenschutzerklärung"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                      }}
                    />
                  </div>
                  {wantsInsurance && (
                    <div className="-mt-3 col-span-6">
                      <Checkbox
                        name="versicherung"
                        href="https://media.bvpk.org/versicherung/bvpk_versicherung.pdf"
                        pre_href_text="Ich habe"
                        href_text=" die Informationen und Modalitäten der Feuerwerkversicherung"
                        post_href_text=" zur Kenntnis genommen und erkenne diese an."
                        validation={{
                          required: { value: `${wantsInsurance ? 'true' : false}`, message: 'Pflichtfeld' },
                        }}
                      />
                    </div>
                  )}
                  <div className="-mt-3 col-span-6">
                    <Checkbox
                      name="nl_consent"
                      title="Ja, ich möchte regelmäßig per Email über die Arbeit des BVPK informiert werden."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
