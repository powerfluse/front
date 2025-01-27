import parse from 'html-react-parser'
import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import getFromDirectus from '../lib/directus'
import axios from 'axios'
import HeadComponent from '../components/head'
import NavBar from '../components/navbar'
import Modal from '../components/modal'
import PreviewModal from '../components/preview-modal'
import MitgliedData from '../components/mitglied-data'
import Footer from '../components/footer'
import FormGroupMitglied from '../components/form-group-mitglied'
import FormGroupMitgliedFeuerwerk from '../components/form-group-mitglied-feuerwerk'
import FormGroupMitgliedVersicherung from '../components/form-group-mitglied-versicherung'
import FormGroupMitgliedFeuerwerkNet from '../components/form-group-mitglied-feuerwerk-net'
import FormGroupMitgliedFoerderOnlyBeitrag from '../components/form-group-mitglied-foerder-only-beitrag'
import FormGroupMitgliedSEPA from '../components/form-group-mitglied-sepa'
import FormGroupMitgliedConsent from '../components/form-group-mitglied-consent'
import FormGroupMitgliedFreitext from '../components/form-group-mitglied-freitext'

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
      .post('api/mitglied-werden', data)
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
      <HeadComponent title={'Fördermitglied werden!'} />
      <NavBar disableSticky={true}/>
      <PreviewModal
        modalState={openPreviewModal}
        modalStateFunction={setOpenPreviewModal}
        data={previewData}
        dataRenderComponent={MitgliedData}
        submitFunction={onSubmit}
      />
      <Modal open={openModal} />
      <FormProvider {...methods}>
        <div className="min-h-screen pt-12 px-4 lg:px-8">
          <div className="prose-bvpk-over-forms pb-4 md:pb-12">
            {parse(props.dataFoerderPage.text)}
          </div>
          <form onSubmit={methods.handleSubmit(onPreview)}>
            {/* FormGroups */}
            <FormGroupMitglied />
            <FormGroupMitgliedFeuerwerk />
            <FormGroupMitgliedFeuerwerkNet />
            <FormGroupMitgliedVersicherung />
            <FormGroupMitgliedFoerderOnlyBeitrag />
            <FormGroupMitgliedSEPA />
            <FormGroupMitgliedFreitext />
            <FormGroupMitgliedConsent />
            {/* Preview */}
            <div className="py-4 sm:mt-0 flex justify-end">
              <button
                type="submit"
                className="button"
                disabled={isSubmitting}
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

export async function getStaticProps() {
  const dataFoerderPage = await getFromDirectus('/items/foerder_page')
  return {
    props: {
      dataFoerderPage,
    },
    revalidate: 60,
  }
}
