import parse from 'html-react-parser'

export default function CleverReach() {
  return (
    <>
      <div className="mt-32 bg-purple-900">
        <form
          className="layout_form cr_form cr_font"
          action="https://seu2.cleverreach.com/f/298121-300874/wcs/"
          method="post"
          target="_blank"
        >
          <div className="cr_body cr_page cr_font formbox">
            <div className="non_sortable" style={{ textAlign: 'left' }}></div>
            <div className="editable_content" style={{ textAlign: 'left' }}>
              <div
                id={6655260}
                rel="email"
                className="cr_form-component cr_form-component--email cr_ipe_item ui-sortable musthave"
                style={{ marginBottom: '15px' }}
              >
                <div className="cr_form-inputgroup cr_form-inputgroup--typeemail">
                  <label htmlFor="text6655260">E-Mail*</label>
                  <input
                    className="cr_form-input"
                    type="email"
                    id="text6655260"
                    name="email"
                    defaultValue
                    placeholder="name@example.com"
                    style={{ width: '100%' }}
                  />
                </div>
              </div>
              <div
                id={6655262}
                rel="button"
                className="cr_form-component cr_form-component--submit cr_ipe_item ui-sortable  submit_container"
              >
                <button type="submit" className="cr_form-block cr_button">
                  Anmelden
                </button>
              </div>
            </div>
            <noscript>
              &lt;a
              href="http://www.cleverreach.de"&gt;www.CleverReach.de&lt;/a&gt;
            </noscript>
          </div>
        </form>
      </div>
    </>
  )
}
