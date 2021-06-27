import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Newsletter from '../components/newsletter'
import Head from 'next/head'
import Modal from '../components/modal'
import { useForm } from 'react-hook-form'
import Input from '../components/input'
import Select from '../components/select'
import { countries } from '../components/countries.js'

export default function Example() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful, errors } =
    formState
  console.log(countries[0])

  return (
    <>
      <Head>
        <title>BVPK - Bundesverband für Pyrotechnik und Kunstfeuerwerk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="min-h-screen bg-purple-900 pt-32 px-4 lg:px-8">
        <div></div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-purple-600" />
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-xl font-titillium font-bold leading-6 text-gray-300">
                  Daten Firma
                </h3>
                <p className="mt-1 text-md font-source text-gray-400">
                  Trage hier bitte die Eckdaten deiner Firma ein
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-purple-800 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      {/* Firmenname */}
                      <div className="col-span-6 md:col-span-6">
                        <Input
                          type="text"
                          name="firmenname"
                          msg="Max. 70 Zeichen"
                          autoComplete="organization"
                          validation={{
                            required: 'true',
                            maxLength: 70,
                          }}
                        />
                      </div>
                      {/* Strasse */}
                      <div className="col-span-4 md:col-span-5">
                        <Input
                          type="text"
                          name="strasse"
                          msg="Max. 30 Zeichen"
                          autoComplete="street-address"
                          validation={{ required: 'true', maxLength: 30 }}
                        />
                      </div>
                      {/* Hausnummer */}
                      <div className="col-span-2 md:col-span-1">
                        <Input
                          type="text"
                          name="hausnummer"
                          msg=" "
                          autoComplete="off"
                          validation={{ required: 'true', maxLength: 5 }}
                        />
                      </div>
                      {/* PLZ */}
                      <div className="col-span-3 md:col-span-2">
                        <Input
                          type="text"
                          name="Postleitzahl"
                          msg="Max. 5 Zeichen"
                          autoComplete="off"
                          validation={{
                            required: 'true',
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
                          name="ort"
                          msg="Max. 35 Zeichen"
                          autoComplete="address-level2"
                          validation={{
                            required: 'true',
                            maxLength: 35,
                          }}
                        />
                      </div>
                      {/* Land */}
                      <div className="col-span-6 md:col-span-2">
                        <Select
                          name="land"
                          autoComplete="country"
                          options={countries}
                          defaultValue="Deutschland"
                        />
                      </div>
                      {/* Email */}
                      <div className="col-span-6 md:col-span-3">
                        <Input
                          type="email"
                          name="email"
                          msg=" "
                          autoComplete="email"
                          validation={{
                            required: 'true',
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
                          name="telefonnummer_firma"
                          msg=" "
                          autoComplete="phone"
                          validation={{
                            required: 'true',
                            maxLength: 15,
                            pattern: {
                              value: /[0-9]*/,
                              message: 'Diese Email-Addresse ist ungültig',
                            },
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden sm:block" aria-hidden="true">
          <div className="py-5">
            <div className="border-t border-purple-600" />
          </div>
        </div>
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-source font-bold leading-6 text-gray-300">
                  Notifications
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Decide which communications you'd like to receive and how.
                </p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form action="#" method="POST">
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-purple-800 space-y-6 sm:p-6">
                    <fieldset>
                      <legend className="text-base font-source font-bold text-gray-300">
                        By Email
                      </legend>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="comments"
                              name="comments"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="comments"
                              className="font-source font-bold text-gray-300"
                            >
                              Comments
                            </label>
                            <p className="text-gray-500">
                              Get notified when someones posts a comment on a
                              posting.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="candidates"
                              name="candidates"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="candidates"
                              className="font-source font-bold text-gray-300"
                            >
                              Candidates
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate applies for a job.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input
                              id="offers"
                              name="offers"
                              type="checkbox"
                              className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                            />
                          </div>
                          <div className="ml-3 text-sm">
                            <label
                              htmlFor="offers"
                              className="font-source font-bold text-gray-300"
                            >
                              Offers
                            </label>
                            <p className="text-gray-500">
                              Get notified when a candidate accepts or rejects
                              an offer.
                            </p>
                          </div>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset>
                      <div>
                        <legend className="text-base font-source font-bold text-gray-300">
                          Push Notifications
                        </legend>
                        <p className="text-sm text-gray-500">
                          These are delivered via SMS to your mobile phone.
                        </p>
                      </div>
                      <div className="mt-4 space-y-4">
                        <div className="flex items-center">
                          <input
                            id="push_everything"
                            name="push_notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push_everything"
                            className="ml-3 block text-sm font-source font-bold text-gray-300"
                          >
                            Everything
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push_email"
                            name="push_notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push_email"
                            className="ml-3 block text-sm font-source font-bold text-gray-300"
                          >
                            Same as email
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="push_nothing"
                            name="push_notifications"
                            type="radio"
                            className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                          />
                          <label
                            htmlFor="push_nothing"
                            className="ml-3 block text-sm font-source font-bold text-gray-300"
                          >
                            No push notifications
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
