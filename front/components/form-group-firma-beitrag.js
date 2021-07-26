import InputEuro from '../components/input-euro'
import Select from '../components/select'

export default function FormGroupFirmaBeitrag() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-300">
                Mitgliedsbeitrag
              </h3>
              <p className="mt-1 text-md font-source text-gray-400">
                Gib hier Deinen jährlichen Mitgliedsbeitrag ein
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-purple-800 sm:p-6 ">
                <p className="text-gray-300 font-source font-bold mb-4">
                  Mitglieder, die dem Verband als Betrieb beitreten, setzen
                  ihren Beitrag frei fest. Die Mitglieder sind dazu angehalten,
                  ihren Beitrag so auszuwählen, dass dieser etwa 0,2% ihres
                  jährlichen Umsatzes entspricht. Der jährliche Mindestbetrag
                  für Firmenmitglieder beträgt 150,- Euro. Wenn Du Fragen zum
                  Mitgliedsbeitrag hast, wende Dich gerne direkt an{' '}
                  <a
                    className="text-purple-300 hover:underline"
                    href="mailto:info@bvpk.org"
                  >
                    info@bvpk.org
                  </a>
                  . Wir beraten Dich dann gerne persönlich!
                </p>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                    <InputEuro
                      title="Jährlicher Mitgliedsbeitrag"
                      name="f_beitrag"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 12,
                        min: { value: 150, message: 'min. 150€' },
                      }}
                    />
                  </div>
                  <div className="col-span-3 lg:col-span-4">
                    <Select
                      title="Zahlungsrhythmus"
                      name="zahlungsrhythmus"
                      options={[
                        'Monatlich',
                        'Vierteljährlich',
                        'Halbjährlich',
                        'Jährlich',
                      ]}
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
