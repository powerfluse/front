import Input from '../components/input'
import Checkbox from '../components/checkbox'

export default function FormGroupSEPA() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-300">
                SEPA-Mandat
              </h3>
              <p className="mt-1 text-md font-source text-gray-400">
                Die Zahlung erfolgt per SEPA-Lastschrift. Hierfür benötigen wir
                ein entsprechendes Mandat
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-purple-800 sm:p-6 ">
                <div className="grid grid-cols-6 gap-6">
                  {/* Kontoinhaber:in */}
                  <div className="col-span-6">
                    <Input
                      title="Kontoinhaber:in"
                      name="sepa_kontoinhaberin"
                      autoComplete="name"
                      msg="Max. 24 Zeichen"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 24,
                      }}
                    />
                  </div>
                  {/* IBAN */}
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      title="IBAN"
                      name="sepa_iban"
                      autoComplete="name"
                      msg="genau 22 Zeichen"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 22,
                        pattern: {
                          value: /^[A-Z]{2}[0-9]{20}$/,
                          message: 'Kein gültiger IBAN',
                        },
                      }}
                    />
                  </div>
                  {/* BIC */}
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      title="BIC"
                      name="sepa_bic"
                      autoComplete="name"
                      msg="genau 11 Zeichen. Optional"
                      validation={{
                        maxLength: 22,
                        pattern: {
                          value: /^[a-z]{6}[0-9a-z]{2}([0-9a-z]{3})?\z/i,
                          message: 'Kein gültiger IBAN',
                        },
                      }}
                    />
                  </div>
                  <div className="col-span-6">
                    <Checkbox
                      name="sepa_consent"
                      title="Hiermit stimme ich der Abbuchung des Fördermitgliedsbeitrages zu und bestätige, dass ich Kontoinhaber:in bin."
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                      }}
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
