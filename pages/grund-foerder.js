import parse from 'html-react-parser'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import getFromDirectus from '../lib/directus'
import axios from 'axios'
import Head from '../components/head'
import NavBar from '../components/navbar'
import Modal from '../components/modal'
import PreviewModal from '../components/preview-modal'
import GrundFoerderData from '../components/grund-foerder-data'
import Footer from '../components/footer'
import FormGroupMitgliedNummer from '../components/form-group-mitglied-nummer'
import FormGroupMitgliedFoerderOnlyBeitrag from '../components/form-group-mitglied-foerder-only-beitrag'
import FormGroupMitgliedSEPA from '../components/form-group-mitglied-sepa'
import FormGroupMitgliedFreitext from '../components/form-group-mitglied-freitext'
import FormGroupMitgliedConsent from '../components/form-group-mitglied-consent'

export default function MitgliedWerden(props) {
  // State for confirmation modal
  const [openModal, setOpenModal] = useState(false)

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
    // For people signing up here the following always applies
    data.foerdermitglied = true
    axios
      // on submit, send a POST request to api/mitglied-werden
      .post('api/grund-foerder', data)
      // open final modal for saying thanks
      .then(() => {
        setOpenModal(true)
      })
      // catch any errors
      .catch((errors) => {
        console.error(errors)
        methods.setError('serverError', {})
      })
  }

  // Callback for form preview
  const onPreview = async (data) => {
    // For people signing up here the following always applies
    data.foerdermitglied = true
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
        data={previewData}
        dataRenderComponent={GrundFoerderData}
        submitFunction={onSubmit}
      />
      <Modal open={openModal} />
      <FormProvider {...methods}>
        <div className="mx-auto max-w-7xl min-h-screen pt-32 px-4 lg:px-8">
          {/* <div className="prose-bvpk mx-auto pb-4 md:pb-12"> */}
          {/*   {parse(props.dataMitgliedWerdenPage.text)} */}
          {/* </div> */}
          <form onSubmit={methods.handleSubmit(onPreview)}>
            {/* FormGroups */}
            <FormGroupMitgliedNummer />
            <FormGroupMitgliedFoerderOnlyBeitrag />
            <FormGroupMitgliedSEPA />
            <FormGroupMitgliedFreitext />
            <FormGroupMitgliedConsent />
            {/* Preview */}
            <div className="py-4 sm:mt-0 flex justify-end">
              <button type="submit" className="button" disabled={isSubmitting}>
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

export async function getStaticProps() {
  const dataMitgliedWerdenPage = await getFromDirectus(
    '/items/mitglied_werden_page'
  )
  return {
    props: {
      dataMitgliedWerdenPage,
    },
    revalidate: 60,
  }
}
