import InputEuro from '../components/input-euro'

export default function FormGroupFirma() {
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
                Trage hier bitte den gewünschten Mitgliedsbeitrag ein
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
                  für Firmenmitglieder beträgt 150,- Euro.
                </p>

                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-2 lg:col-span-1">
                    <InputEuro
                      title="Mitgliedsbeitrag"
                      name="f_beitrag"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                        maxLength: 12,
                        min: { value: 150, message: 'min. 150€' },
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
