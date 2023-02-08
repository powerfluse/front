import Select from './select'
import Input from './input'

export default function FormGroupFirmaSlim() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-700">
                Daten Deiner Firma
              </h3>
              <p className="mt-1 text-md font-source text-gray-600">
                Trage hier bitte die Eckdaten Deiner Firma ein
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-gray-100 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* Anrede */}
                  <div className="col-span-3 md:col-span-2">
                    <Select
                      title="Anrede"
                      name="f_ap_anrede"
                      options={[null, 'Frau', 'Herr', 'Divers']}
                      autoComplete="honorific-prefix"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                      }}
                    />
                  </div>
                  {/* Vorname */}
                  <div className="col-span-6 md:col-span-2">
                    <Input
                      type="text"
                      title="Vorname"
                      name="f_ap_vorname"
                      msg="max. 35 Zeichen"
                      autoComplete="given-name"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 35,
                      }}
                    />
                  </div>
                  {/* Nachname */}
                  <div className="col-span-6 md:col-span-2">
                    <Input
                      type="text"
                      title="Nachname"
                      name="f_ap_nachname"
                      msg="max. 35 Zeichen"
                      autoComplete="family-name"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 35,
                      }}
                    />
                  </div>
                  {/* Firmenname */}
                  <div className="col-span-6 md:col-span-3">
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
                  {/* Email */}
                  <div className="col-span-6 md:col-span-3">
                    <Input
                      type="email"
                      title="Email"
                      name="f_ap_email"
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
