import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from '../components/modal'

export default function Newsletter() {
  const { register, handleSubmit, setError, watch, formState } = useForm({
    mode: 'onChange',
  })
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful, errors } =
    formState

  const [openModal, setOpenModal] = useState(false)
  console.log('openModal: ', openModal)
  console.log('isSubmitSuccessful: ', isSubmitSuccessful)

  const onSubmit = async (data) => {
    return await fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('Hier gab es ein Problem!')
        }
      })
      .catch((e) => {
        console.log(e)
        setError('nl_email', {
          type: 'manual',
          message:
            'Oops. Hier gab es ein Problem. Vielleicht hast du dich schon angemeldet?',
        })
      })
  }

  return (
    <>
      <Modal open={isSubmitSuccessful} />
      <div className="bg-purple-900">
        <div className="max-w-full px-4 md:mx-0 py-24 lg:py-32 lg:px-24 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-bold font-titillium text-purple-300 sm:text-4xl">
              Bleib' auf dem Laufenden!
            </h2>
            <p className="font-source mt-3 max-w-3xl text-lg text-gray-300">
              Melde dich bei unserem Newsletter an, um die neusten Infos zu
              Feuerwerk und zum Verband zu erhalten.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form
              className="font-source sm:flex"
              onSubmit={handleSubmit(onSubmit)}
            >
              <label htmlFor="emailAddress" className="sr-only">
                Email-Addresse
              </label>
              <input
                id="nl_email"
                name="nl_email"
                type="email"
                autoComplete="email"
                required={true}
                className={
                  errors.nl_email && isDirty && !isValid
                    ? 'formfield-invalid'
                    : isValid
                    ? 'formfield-valid'
                    : 'formfield'
                }
                placeholder="E-mail eingeben"
                {...register('nl_email', {
                  required: true,
                  maxLength: 45,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Diese Email-Addresse ist ungültig',
                  },
                })}
              />

              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className={`${
                    isSubmitSuccessful ? 'button-success' : 'button'
                  }`}
                  disabled={
                    !isDirty || !isValid || isSubmitting || isSubmitSuccessful
                  }
                >
                  {`${
                    isSubmitSuccessful ? 'Danke! Wir melden uns.' : 'Anmelden'
                  }`}
                </button>
              </div>
            </form>
            <div className="text-sm font-bold mt-1 font-source text-purple-300">
              {errors.nl_email && errors.nl_email.message}
            </div>
            <div className="mt-4">
              <input
                id="zustimmung"
                name="zustimmung"
                type="checkbox"
                className="focus:ring-purple-300 h-4 w-4 text-purple-300 border-gray-300 rounded-sm h-4"
                {...register('zustimmung', {
                  required: true,
                })}
              />

              <span className="mx-2 fount-source text-sm text-gray-300">
                Ich stimme{' '}
                <a href="/datenschutz" className="underline text-purple-300">
                  der Verarbeitung meiner Daten
                </a>{' '}
                durch den bvpk e.V. zu
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
