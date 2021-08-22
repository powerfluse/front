import Checkbox from '../components/checkbox'
// import CheckboxSatzungBeitragsordnung from '../components/checkbox-satzung-beitragsordnung'

export default function FormGroupFirmaConsent() {
  return (
    <>
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0"></div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-purple-800 sm:p-6 ">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6">
                    <Checkbox
                      name="f_gdpr_consent"
                      href="/datenschutz"
                      pre_href_text="Ja, ich akzeptiere die "
                      href_text="Datenschutzerklärung"
                      validation={{
                        required: { value: 'true', message: 'Pflichtfeld' },
                      }}
                    />
                  </div>
                  {/* <div className="-mt-3 col-span-6"> */}
                  {/*   <CheckboxSatzungBeitragsordnung */}
                  {/*     name="f_bvpk_consent" */}
                  {/*     validation={{ */}
                  {/*       required: { value: 'true', message: 'Pflichtfeld' }, */}
                  {/*     }} */}
                  {/*   /> */}
                  {/* </div> */}
                  <div className="-mt-3 col-span-6">
                    <Checkbox
                      name="f_nl_consent"
                      title="Ja, ich möchte regelmäßig per Email über die Arbeit des BVPK informiert werden."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
