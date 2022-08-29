import Input from '../components/input'
import Checkbox from '../components/checkbox'
import { isValidIBANNumber } from '../lib/iban'
import { isAlphaNumeric } from '../lib/alnum'

export default function FormGroupFirmaSEPA() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-700">
                SEPA-Mandat
              </h3>
              <p className="mt-1 text-md font-source text-gray-600">
                Die Zahlung erfolgt per SEPA-Lastschrift. Hierfür benötigen wir
                ein entsprechendes Mandat.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-gray-100 sm:p-6 ">
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
                  {/* IBAN */}
                  <div className="col-span-6">
                    <Input
                      title="IBAN"
                      name="iban"
                      autoComplete="name"
                      msg="Bitte genau prüfen"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        validate: {
                          validIBAN: (v) =>
                            isValidIBANNumber(v) == 1 || 'Ungültige Eingabe',
                          alphaNumeric: (v) =>
                            isAlphaNumeric(v) == true ||
                            'Nur Zahlen und Buchstaben, bitte',
                        },
                      }}
                    />
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
          <div className="border-t border-gray-100" />
        </div>
      </div>
    </>
  )
}
