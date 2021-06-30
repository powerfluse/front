import Input from '../components/input'
import Select from '../components/select'
import { countries } from '../components/countries.js'

export default function FormGroupFirma() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-300">
                Daten Firma
              </h3>
              <p className="mt-1 text-md font-source text-gray-400">
                Trage hier bitte die Eckdaten Deiner Firma ein
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-purple-800 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* Firmenname */}
                  <div className="col-span-6 md:col-span-6">
                    <Input
                      type="text"
                      title="Firmenname"
                      name="f_name"
                      msg="max. 70 Zeichen"
                      autoComplete="organization"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 70,
                      }}
                    />
                  </div>
                  {/* Strasse */}
                  <div className="col-span-4 md:col-span-5">
                    <Input
                      type="text"
                      title="Straße"
                      name="f_strasse"
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
                      name="f_hausnummer"
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
                      name="f_addresszusatz"
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
                      name="f_plz"
                      msg="max. 5 Zeichen"
                      autoComplete="off"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 5,
                        minLength: 5,
                        pattern: {
                          value: /[0-9]{5}/,
                        },
                      }}
                    />
                  </div>
                  {/* Ort */}
                  <div className="col-span-3 md:col-span-2">
                    <Input
                      type="text"
                      title="Ort"
                      name="f_ort"
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
                      name="f_land"
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
                      name="f_email"
                      msg=" "
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
                  {/* Telefonnummer */}
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      type="tel"
                      title="Telefon"
                      name="f_telefon"
                      msg="max. 15 Ziffern"
                      autoComplete="phone"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
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
