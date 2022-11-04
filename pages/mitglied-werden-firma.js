import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import axios from 'axios'
import NavBar from '../components/navbar'
import Footer from '../components/footer'
import Head from '../components/head'
import PreviewModal from '../components/preview-modal'
import Modal from '../components/modal'
import FirmaData from '../components/firma-data'
import FormGroupFirma from '../components/form-group-firma'
import FormGroupFirmaAP from '../components/form-group-firma-ap'
import FormGroupFirmaT from '../components/form-group-firma-t'
import FormGroupFirmaFeuerwerkNet from '../components/form-group-firma-feuerwerk-net'
import FormGroupFirmaBeitrag from '../components/form-group-firma-beitrag'
import FormGroupFirmaSEPA from '../components/form-group-firma-sepa'
import FormGroupFirmaConsent from '../components/form-group-firma-consent'
import FormGroupFirmaFreitext from '../components/form-group-firma-freitext'

export default function MitgliedWerdenFirma() {
  // State for confirmation modal
  const [openModal, setOpenModal] = useState(false)

  console.log(openModal)

  // State for preview modal
  const [openPreviewModal, setOpenPreviewModal] = useState(false)
  const [previewData, setPreviewData] = useState(null)

  // Initialise needed form utilities
  const methods = useForm({
    mode: 'onChange',
  })
  const { isValid, isSubmitting, isSubmitSuccessful, errors } =
    methods.formState

  // Callback for form submission
  const onSubmit = async (data) => {
    axios
      // on submit, send a POST request to api/mitglied-werden
      .post('api/mitglied-werden-firma', data)
      // open final modal for saying thanks
      .then(() => {
        setOpenModal(true)
      })
      .catch((errors) => {
        console.error(errors)
        methods.setError('serverError', {})
      })
  }

  // Callback for form preview
  const onPreview = async (data) => {
    // Open the preview modal
    setOpenPreviewModal(true)
    // Pass the form data to the preview modal
    setPreviewData(data)
  }

  return (
    <>
      <Head />
      <NavBar />
      <PreviewModal
        modalState={openPreviewModal}
        modalStateFunction={setOpenPreviewModal}
        dataRenderComponent={FirmaData}
        data={previewData}
        submitFunction={onSubmit}
      />
      <Modal open={openModal} />
      <FormProvider {...methods}>
        <div className="min-h-screen pt-32 px-4 lg:px-8">
          <form onSubmit={methods.handleSubmit(onPreview)}>
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
                className="button"
                disabled={!isValid || isSubmitting}
              >
                Beitreten!
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
