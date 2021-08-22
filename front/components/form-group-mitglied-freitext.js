import TextArea from '../components/text-area'

export default function FormGroupMitgliedFreitext() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-300">
                Deine Nachricht an uns
              </h3>
              <p className="mt-1 text-md font-source text-gray-400">
                Hier ist der Platz für Deine offenen Fragen.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-purple-800 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  {/* Freitext */}
                  <div className="col-span-6 md:col-span-6 ">
                    <TextArea
                      title="Deine Nachricht (optional)"
                      rows={4}
                      name="freitext"
                      msg="max. 500 Zeichen"
                      autoComplete="family-name"
                      validation={{
                        maxLength: 500,
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
