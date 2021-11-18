import Input from '../components/input'
import Select from '../components/select'
import Checkbox from '../components/checkbox'

export default function FormGroupFirmaSEPA() {
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
                      name="f_kontoinhaber"
                      autoComplete="name"
                      msg="max. 24 Zeichen"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 24,
                      }}
                    />
                  </div>
                  {/* IBAN */}
                  <div className="col-span-6">
                    <Input
                      title="IBAN"
                      name="f_iban"
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
                  <div className="col-span-6 md:col-span-2">
                    <Select
                      title="Zahlungsrhythmus"
                      name="f_zahlungsrhythmus"
                      options={['Vierteljährlich', 'Halbjährlich', 'Jährlich']}
                    />
                  </div>
                  <div className="col-span-6">
                    <Checkbox
                      name="f_sepa_consent"
                      title="Hiermit ermächtige ich den Bundesverband für Pyrotechnik und Kunstfeuerwerk e.V. Zahlungen zu Lasten meines Kontos einzuziehen. Zugleich weise ich mein Kreditinstitut an, die vom BVPK auf mein Konto gezogenen Lastschriften einzulösen. Hinweis: Ich kann innerhalb von acht Wochen, beginnend mit dem Belastungsdatum, die Erstattung des belasteten Betrages verlangen. Es gelten dabei die mit meinem Kreditinstitut vereinbarten Bedingungen."
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
