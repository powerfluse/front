import InputEuro from '../components/input-euro'
import React from 'react'
import Select from '../components/select'

export default function FormGroupMitgliedFoerderOnlyBeitrag() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-xl font-titillium font-bold leading-6 text-gray-700">
                Förderbeitrag
              </h3>
              <p className="mt-1 text-md font-source text-gray-600">
                Hier legst du die Höhe deines Förderbeitrags fest.
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-gray-100 sm:p-6 ">
                <p className="text-gray-700 font-source font-bold mb-4">
                  Der Förderbeitrag wird zusätzlich zum Grundbeitrag von
                  24€/Jahr erhoben. Der jährliche Förderbeitrag ist der gesamte
                  Förderbeitrag pro Jahr. Der Zahlungsrhythmus bestimmt, in
                  welchem Rhythmus entsprechende Teilbeträge abgebucht werden
                  (z.B. 100€ Jahresbeitrag / quartalsweise = 4 Abbuchungen à 25€
                  pro Jahr + 24€ Grundbeitrag pro Jahr = 124€ insgesamt pro
                  Jahr). Die Fördermitgliedschaft kann jederzeit gekündigt
                  werden.
                </p>
                <div className="mt-4 grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-2">
                    <InputEuro
                      title="Förderbeitrag in €"
                      name="foerderbeitrag"
                      msg="z.B. 15"
                      validation={{
                        required: {
                          value: true,
                          message: 'Pflichtfeld für Fördermitglieder',
                        },
                        maxLength: {
                          value: 12,
                          message: 'Nur realistische Beträge, bitte ;)',
                        },
                        min: {
                          value: 3,
                          message: 'min. 3€',
                        },
                      }}
                    />
                  </div>
                  <div className="col-span-3 md:col-span-4">
                    <Select
                      title="Zahlungsrhythmus"
                      name="zahlungsrhythmus"
                      defaultValue="Monatlich"
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
          <div className="border-t border-gray-100" />
        </div>
      </div>
    </>
  )
}
