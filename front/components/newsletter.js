export default function Newsletter() {
  return (
    <>
      <div className="bg-purple-900">
        <div className="max-w-full px-4 md:mx-0 py-24 lg:py-32 lg:px-48 lg:flex lg:items-center">
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
              action="https://seu2.cleverreach.com/f/298121-300874/wcs/"
              method="post"
              target="_blank"
            >
              <div className="font-source text-gray-300 font-bold">
                <div id={6655260} rel="email">
                  <label htmlFor="text6655260">Email</label>
                  <input
                    className="formfield"
                    type="email"
                    id="text6655260"
                    name="email"
                    placeholder="name@example.com"
                  />
                </div>
                <div id={6655262} rel="button">
                  <div className="mt-3 rounded-md shadow sm:flex-shrink-0">
                    <button type="submit" className="button">
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
        </div>
      </div>
    </>
  )
}
