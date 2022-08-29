import Checkbox from '../components/checkbox'
import { useFormContext } from 'react-hook-form'

export default function FormGroupMitgliedFeuerwerk() {
  const { watch } = useFormContext()
  const wantsInsurance = watch('feuerwerk_versicherung')
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-700">
                Versicherung
              </h3>
              <p className="mt-1 text-md font-source text-gray-600">
                Sicher Deine privaten Feuerwerke mit der Haftpflichtversicherung
                des BVPK ab
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-gray-100 sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <Checkbox
                      name="feuerwerk_versicherung"
                      title="Ich möchte meinen privaten Feuerwerke mit der Haftpflichtversicherung des BVPK für 36,00€/Jahr absichern."
                    />
                  </div>
                  {wantsInsurance && (
                    <>
                      <div
                        className="font-source font-bold text-gray-700 col-span-6"
                        data-aos="fade-left"
                      >
                        Für die Versicherung wird ein zusätzlicher Beitrag von
                        36,00€/Jahr fällig, hinzu kommen geringe Beiträge pro
                        Feuerwerk je nach dessen Materialwert. Weitere Infos
                        gibt’s{' '}
                        <a
                          className="text-gray-700 font-bold underline decoration-bvpk-300 hover:decoration-2"
                          href="https://media.bvpk.org/versicherung/bvpk_versicherung.pdf"
                        >
                          hier
                        </a>
                        .
                      </div>
                    </>
                  )}
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
