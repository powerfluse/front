import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import axios from 'axios'
import HeadComponent from '../components/head'
import NavBar from '../components/navbar'
import PreviewModal from '../components/preview-modal'
import FirmaDataSlim from '../components/firma-data-slim'
import Modal from '../components/modal'
import parse from 'html-react-parser'
import FormGroupFirmaSlim from '../components/form-group-firma-slim'
import FormGroupFirmaBeitrag from '../components/form-group-firma-beitrag'
import FormGroupFirmaFreitext from '../components/form-group-firma-freitext'
import Footer from '../components/footer'
import getFromDirectus from '../lib/directus'

export default function Firmenbeitrag(props) {
  // State for confirmation modal
  const [openModal, setOpenModal] = useState(false)

  // State for preview modal
  const [openPreviewModal, setOpenPreviewModal] = useState(false)
  const [previewData, setPreviewData] = useState(null)

  // Initialise needed form utilities
  const methods = useForm({
    mode: 'onChange',
  })
  const { isValid, isSubmitting, errors } = methods.formState

  // Callback for form submission
  const onSubmit = async (data) => {
    axios
      // on submit, send a POST request to api/firmenbeitrag
      .post('api/firmenbeitrag', data)
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
      <HeadComponent title={props.title} />
      <NavBar disableSticky={true}/>
      <PreviewModal
        modalState={openPreviewModal}
        modalStateFunction={setOpenPreviewModal}
        dataRenderComponent={FirmaDataSlim}
        data={previewData}
        submitFunction={onSubmit}
        submitName={'Absenden!'}
      />
      <Modal open={openModal} formName={'deine Beitragsänderung'} />
      <FormProvider {...methods}>
        <div className="min-h-screen pt-32 px-4 lg:px-8">
          <div className="prose-bvpk-over-forms pb-4 md:pb-12">
            {parse(props.text)}
          </div>
          <form onSubmit={methods.handleSubmit(onPreview)}>
            {/* FormGroups */}
            <FormGroupFirmaSlim />
            <FormGroupFirmaBeitrag />
            <FormGroupFirmaFreitext />
            {/* Submit */}
            <div className="py-4 sm:mt-0 flex justify-end">
              <button
                type="submit"
                className="button"
                disabled={isSubmitting}
              >
                Absenden!
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
  const dataFirmenBeitragPage = await getFromDirectus(
    '/items/firmenbeitrag_page'
  )
  return {
    props: {
      title: dataFirmenBeitragPage.title,
      text: dataFirmenBeitragPage.text
    },
    revalidate: 60,
  }
}
