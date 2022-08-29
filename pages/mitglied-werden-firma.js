import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Head from '../components/head'
import Modal from '../components/modal'
import FormGroupFirma from '../components/form-group-firma'
import FormGroupFirmaAP from '../components/form-group-firma-ap'
import FormGroupFirmaT from '../components/form-group-firma-t'
import FormGroupFirmaFeuerwerkNet from '../components/form-group-firma-feuerwerk-net'
import FormGroupFirmaBeitrag from '../components/form-group-firma-beitrag'
import FormGroupFirmaSEPA from '../components/form-group-firma-sepa'
import FormGroupFirmaConsent from '../components/form-group-firma-consent'
import FormGroupFirmaFreitext from '../components/form-group-firma-freitext'

export default function MitgliedWerdenFirma() {
  // Set needed states
  const [openModal, setOpenModal] = useState(false)

  // Initialise needed form utilities
  const methods = useForm({
    mode: 'onChange',
  })
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful, errors } =
    methods.formState

  const onSubmit = async (data) => {
    axios
      .post('api/mitglied-werden-firma', data)
      .then(() => {
        setOpenModal(true)
      })
      .catch((errors) => {
        console.error(errors)
        methods.setError('serverError', {})
      })
  }

  return (
    <>
      <NavBar />
      <Head />
      <Modal open={openModal} />
      <FormProvider {...methods}>
        <div className="min-h-screen pt-32 px-4 lg:px-8">
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* FormGroups */}
            <FormGroupFirma />
            <FormGroupFirmaAP />
            <FormGroupFirmaT />
            <FormGroupFirmaFeuerwerkNet />
            <FormGroupFirmaBeitrag />
            <FormGroupFirmaSEPA />
            <FormGroupFirmaFreitext />
            <FormGroupFirmaConsent />
            {/* Submit */}
            <div className="py-4 sm:mt-0 flex justify-end">
              <button
                type="submit"
                className={`${
                  isValid &&
                  isSubmitSuccessful &&
                  !errors.hasOwnProperty('serverError')
                    ? 'button-success'
                    : 'button'
                }`}
                disabled={
                  !isDirty || !isValid || isSubmitting || isSubmitSuccessful
                }
              >
                {`${
                  isSubmitSuccessful && !errors.hasOwnProperty('serverError')
                    ? 'Danke für Deine Unterstützung!'
                    : errors.hasOwnProperty('serverError')
                    ? 'Das hat leider nicht funktioniert'
                    : 'Beitreten!'
                }`}
              </button>
            </div>
            {errors.hasOwnProperty('serverError') && (
              <div className="-mt-4 py-3 text-right text-red-500 font-source">
                Bitte kontaktiere unseren Support unter{' '}
                <a href="mailto:support@bvpk.org" className="underline">
                  support@bvpk.org
                </a>
              </div>
            )}
          </form>
        </div>
      </FormProvider>
      <Footer />
    </>
  )
}
