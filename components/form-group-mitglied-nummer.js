import Input from '../components/input'
import Checkbox from '../components/checkbox'

export default function FormGroupMitgliedNummer() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-700">
                Persönliche Daten
              </h3>
              <p className="mt-1 text-md font-source text-gray-600">
                Trage hier bitte Deine Mitgliedsdaten ein.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-gray-100 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* Nachname */}
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      type="text"
                      title="Nachname"
                      name="nachname"
                      msg="max. 35 Zeichen"
                      autoComplete="family-name"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 35,
                      }}
                    />
                  </div>
                  {/* Hausnummer */}
                  <div className="col-span-3 md:col-span-3">
                    <Input
                      type="text"
                      name="mitgliedsnummer"
                      title="Mitgliedsnummer"
                      msg=" "
                      autoComplete="off"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                      }}
                    />
                  </div>
                  {/* Email */}
                  <div className="col-span-6">
                    <Input
                      type="email"
                      title="Email"
                      name="email"
                      msg="Zur Bestätigung des Vorgangs"
                      autoComplete="email"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 50,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Diese Email-Addresse ist ungültig',
                        },
                      }}
                    />
                  </div>
                </div>
                <div className="mt-3 col-span-6">
                  {/* Really? */}
                  <Checkbox
                    name="change_to_foerder_confirm"
                    title="Ich möchte meine bestehende Mitgliedschaft bei
                      BVPK in eine Fördermitgliedschaft umwandeln. Wenn eine
                      Versicherungsmitgliedschaft besteht, bleibt diese
                      unverändert. Die Fördermitgliedschaft kann jederzeit
                      gekündigt werden."
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
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-100" />
        </div>
      </div>
    </>
  )
}
