import Input from '../components/input'
import Select from '../components/select'
import { countries } from '../components/countries.js'

export default function FormGroupMitglied() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-300">
                Persönliche Daten
              </h3>
              <p className="mt-1 text-md font-source text-gray-400">
                Trage hier bitte deine persönlichen Daten ein.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-purple-800 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* Anrede */}
                  <div className="col-span-3 md:col-span-2">
                    <Select
                      title="Anrede"
                      name="anrede"
                      options={['keine Angabe', 'Frau', 'Herr', 'Divers']}
                      autoComplete="honorific-prefix"
                    />
                  </div>
                  {/* Titel */}
                  <div className="col-span-3 md:col-span-2">
                    <Input
                      type="text"
                      title="Titel"
                      name="titel"
                      msg="max. 35 Zeichen"
                      autoComplete="honorific-suffix"
                    />
                  </div>
                  {/* Vorname */}
                  <div className="col-span-6 md:col-span-2">
                    <Input
                      type="text"
                      title="Vorname"
                      name="vorname"
                      msg="max. 35 Zeichen"
                      autoComplete="given-name"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 35,
                      }}
                    />
                  </div>
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
                  {/* Geburtsdatum */}
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      type="text"
                      title="Geburtsdatum"
                      name="geburtsdatum"
                      msg="genau 10 Zeichen (TT.MM.JJJJ)"
                      autoComplete="family-name"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 10,
                        pattern: {
                          value: /[0-9.]{10}/,
                          message: 'Kein gültiges Geburtsdatum',
                        },
                      }}
                    />
                  </div>
                  {/* Strasse */}
                  <div className="col-span-4 md:col-span-5">
                    <Input
                      type="text"
                      title="Straße"
                      name="strasse"
                      msg="max. 30 Zeichen"
                      autoComplete="street-address"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 30,
                      }}
                    />
                  </div>
                  {/* Hausnummer */}
                  <div className="col-span-2 md:col-span-1">
                    <Input
                      type="text"
                      name="hausnummer"
                      title="Nr."
                      msg=" "
                      autoComplete="off"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 5,
                      }}
                    />
                  </div>
                  {/* Addresszusatz */}
                  <div className="col-span-6 md:col-span-6">
                    <Input
                      type="text"
                      title="Addresszusatz"
                      name="addresszusatz"
                      msg="max. 35 Zeichen"
                      autoComplete="street-address"
                      validation={{ maxLength: 35 }}
                    />
                  </div>
                  {/* PLZ */}
                  <div className="col-span-3 md:col-span-2">
                    <Input
                      type="text"
                      title="Postleitzahl"
                      name="plz"
                      msg="genau 5 Ziffern"
                      autoComplete="off"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 5,
                        minLength: 5,
                        pattern: {
                          value: /[0-9]{5}/,
                          message: 'keine gültige PLZ',
                        },
                      }}
                    />
                  </div>
                  {/* Ort */}
                  <div className="col-span-3 md:col-span-2">
                    <Input
                      type="text"
                      title="Ort"
                      name="ort"
                      msg="max. 35 Zeichen"
                      autoComplete="address-level2"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 35,
                      }}
                    />
                  </div>
                  {/* Land */}
                  <div className="col-span-6 md:col-span-2">
                    <Select
                      name="land"
                      title="Land"
                      autoComplete="country"
                      options={countries}
                      defaultValue="Deutschland"
                    />
                  </div>
                  {/* Email */}
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      type="email"
                      title="Email"
                      name="email"
                      msg=" "
                      autoComplete="email"
                      validation={{
                        maxLength: 50,
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Diese Email-Addresse ist ungültig',
                        },
                      }}
                    />
                  </div>
                  {/* Telefonnummer */}
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      type="tel"
                      title="Telefon"
                      name="telefon"
                      msg=" "
                      autoComplete="phone"
                      validation={{
                        maxLength: 15,
                        pattern: {
                          value: /[0-9]{1,15}/,
                          message: 'Diese Telefonnummer ist ungültig',
                        },
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
