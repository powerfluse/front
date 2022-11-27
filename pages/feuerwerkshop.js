import parse from 'html-react-parser'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import getFromDirectus from '../lib/directus'
import axios from 'axios'
import Head from '../components/head'
import NavBar from '../components/navbar'
import Modal from '../components/modal'
import Footer from '../components/footer'
import FormGroupMitglied from '../components/form-group-mitglied'
import FormGroupMitgliedFeuerwerk from '../components/form-group-mitglied-feuerwerk'
import FormGroupMitgliedFeuerwerkNet from '../components/form-group-mitglied-feuerwerk-net'
import FormGroupMitgliedSEPA from '../components/form-group-mitglied-sepa'
import FormGroupMitgliedConsent from '../components/form-group-mitglied-consent'
import FormGroupMitgliedFreitext from '../components/form-group-mitglied-freitext'

export default function MitgliedWerden(props) {
  // Set needed states
  const [openModal, setOpenModal] = useState(false)

  // Initialise needed form utilities
  const methods = useForm({
    mode: 'onChange',
  })
  const { isValid, isSubmitting, isSubmitSuccessful, errors } =
    methods.formState

  // Callback for form submission
  const onSubmit = async (data) => {
    // Fix data remaining in some fields after de-selecting
    if (!data.foerdermitglied) {
      data.foerderbeitrag = ''
      data.zahlungsrhythmus = ''
    }
    axios
      .post('api/mitglied-werden-promo', data)
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
      <Head />
      <NavBar />
      <Modal open={openModal} />
      <FormProvider {...methods}>
        <div className="min-h-screen pt-32 px-4 lg:px-8">
          <div className="prose-bvpk-over-forms pb-4 md:pb-12">
            {parse(props.dataPyrolandPage.text)}
          </div>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            {/* FormGroups */}
            <FormGroupMitglied />
            <FormGroupMitgliedFeuerwerk />
            <FormGroupMitgliedFeuerwerkNet />
            {/* <FormGroupMitgliedVersicherung /> */}
            {/* <FormGroupMitgliedBeitrag /> */}
            <FormGroupMitgliedSEPA />
            <FormGroupMitgliedFreitext />
            <FormGroupMitgliedConsent />
            {/* Submit */}
            <div className="py-4 sm:mt-0 flex justify-end">
              <button
                type="submit"
                className={`${
                  isSubmitSuccessful && !errors.hasOwnProperty('serverError')
                    ? 'button-success'
                    : 'button'
                }`}
                disabled={!isValid || isSubmitting || isSubmitSuccessful}
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

export async function getStaticProps() {
  const dataPyrolandPage = await getFromDirectus('/items/feuerwerkshop_page')
  return {
    props: {
      dataPyrolandPage,
    },
    revalidate: 60,
  }
}
