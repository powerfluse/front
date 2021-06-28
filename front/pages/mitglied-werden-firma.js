import { useState } from 'react'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Head from 'next/head'
import Modal from '../components/modal'
import { useForm, FormProvider } from 'react-hook-form'
import FormGroupFirma from '../components/form-group-firma'
import FormGroupAnsprechpartner from '../components/form-group-ansprechpartner'
import FormGroupTaetigkeit from '../components/form-group-taetigkeit'
import FormGroupFeuerwerkNet from '../components/form-group-feuerwerk-net'
import FormGroupBeitragFirma from '../components/form-group-beitrag-firma'
import FormGroupSEPA from '../components/form-group-sepa'
import FormGroupConsent from '../components/form-group-consent'

export default function MitgliedWerdenFirma() {
  const methods = useForm({
    mode: 'onChange',
  })
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful, errors } =
    methods.formState

  const [openModal, setOpenModal] = useState(false)
  const [submitErrorMessage, setSubmitErrorMessage] = useState('')

  const onSubmit = async (data) => {
    return await fetch('/api/mitglied-werden-firma', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) {
          setSubmitErrorMessage(
            'Hier gab es ein Problem! Schreib uns am Besten eine Mail.'
          )
          throw new Error('Hier gab es ein Problem!')
        } else {
          setOpenModal(true)
        }
      })
      .catch((e) => {
        console.log(e)
      })
  }

  return (
    <>
      <Head>
        <title>BVPK - Bundesverband für Pyrotechnik und Kunstfeuerwerk</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Modal open={openModal} />
      <FormProvider {...methods}>
        <div className="min-h-screen bg-purple-900 pt-32 px-4 lg:px-8">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* FormGroups */}
            <FormGroupFirma />
            <FormGroupAnsprechpartner />
            <FormGroupTaetigkeit />
            <FormGroupFeuerwerkNet />
            <FormGroupBeitragFirma />
            <FormGroupSEPA />
            <FormGroupConsent />
            {/* Submit */}
            <div className="py-4 sm:mt-0 flex justify-end">
              <button
                type="submit"
                className={`${
                  isSubmitSuccessful && !submitErrorMessage
                    ? 'button-success'
                    : 'button'
                }`}
                disabled={
                  !isDirty ||
                  !isValid ||
                  isSubmitting ||
                  (isSubmitSuccessful && !submitErrorMessage)
                }
                /* onClick={() => setOpenModal(true)} */
              >
                {`${
                  isSubmitSuccessful && !submitErrorMessage
                    ? 'Danke für eure Unterstützung!'
                    : 'Beitreten!'
                }`}
              </button>
            </div>
            {submitErrorMessage && (
              <div className="flex justify-end -mt-3 font-source py-3 text-red-500">
                {submitErrorMessage}
              </div>
            )}
          </form>
        </div>
      </FormProvider>
      <Footer />
    </>
  )
}
