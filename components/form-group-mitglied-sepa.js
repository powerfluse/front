import { useEffect } from 'react'
import Input from '../components/input'
import Select from '../components/select'
import Checkbox from '../components/checkbox'
import { useFormContext } from 'react-hook-form'

const countriesIBAN = ['Deutschland', 'Niederlande', 'Österreich']
const regexesIBAN = {
  Deutschland: /^DE\d{20}$/,
  Niederlande: /^NL\d{2}[A-Z]{4}\d{10}$/,
  Österreich: /^AT\d{18}$/,
}

export default function FormGroupFirmaSEPA() {
  const { watch, trigger } = useFormContext()
  let countryIBAN = watch('land_iban')
  let regexIBAN = regexesIBAN[countryIBAN]
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
                ein entsprechendes Mandat.
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
                      name="kontoinhaber"
                      autoComplete="name"
                      msg="max. 24 Zeichen"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 24,
                      }}
                    />
                  </div>
                  {/* Land IBAN */}
                  <div className="col-span-6 md:col-span-2 lg:col-span-2">
                    <Select
                      name="land_iban"
                      title="Land"
                      autoComplete="country"
                      options={countriesIBAN}
                      defaultValue="Deutschland"
                    />
                  </div>
                  {/* IBAN */}
                  <div className="col-span-6 md:col-span-4 lg:col-span-2">
                    <Input
                      title="IBAN"
                      name="iban"
                      autoComplete="name"
                      msg="genau 22 Zeichen"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 22,
                        pattern: {
                          value: regexIBAN,
                          message: 'Kein gültiger IBAN',
                        },
                      }}
                    />
                  </div>
                  <div className="col-span-6 lg:col-span-2">
                    <button
                      className="whitespace-nowrap inline-flex items-center justify-center w-full mt-5 px-8 py-2 border border-transparent rounded-md text-lg font-source font-bold text-white bg-purple-300 transition transform duration-500 hover:bg-purple-600 hover:ring-2 hover:ring-purple-300 hover:shadow-xl disabled:opacity-30 disabled:ring-0"
                      type="button"
                      onClick={() => {
                        trigger('iban')
                      }}
                    >
                      IBAN prüfen
                    </button>
                  </div>
                  <div className="col-span-6">
                    <Checkbox
                      name="sepa_consent"
                      title="Hiermit ermächtige ich den Bundesverband für Pyrotechnik und Kunstfeuerwerk e.V. Zahlungen zu Lasten meines Kontos einzuziehen. Zugleich weise ich mein Kreditinstitut an, die vom BVPK auf mein Konto gezogenen Lastschriften einzulösen. Hinweis: Dieses Lastschriftmandat dient nur dem Einzug von Lastschriften, die auf Konten von Unternehmen gezogen sind. Ich bin nicht berechtigt, nach der erfolgten Einlösung eine Erstattung des belasteten Betrages zu verlangen. Ich bin berechtigt, mein Kreditinstitut bis zum Fälligkeitstag anzuweisen, Lastschriften nicht einzulösen."
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
