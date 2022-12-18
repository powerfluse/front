export default function Newsletter() {
  return (
    <>
      <section className="bg-gray-50">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold text-gray-700 lg:text-4xl">
              Bleib' auf dem Laufenden!
            </h2>
            <p className="hidden text-gray-600 sm:mt-4 sm:block">
              Melde dich bei unserem Newsletter an, um die neusten Infos zu
              Feuerwerk und zum Verband zu erhalten.
            </p>
          </div>
          <div className="mx-auto mt-8 max-w-xl">
            <form
              className="sm:flex sm:gap-4"
              action="https://seu2.cleverreach.com/f/298121-300874/wcs/"
              method="post"
              target="_blank"
            >
              <div id={6655260} className="sm:flex-1">
                <label htmlFor="text6655260" className="sr-only">
                  Email
                </label>
                <input type="email" placeholder="Email" className="formfield" />
              </div>
              <button type="submit" className="button">
                Anmelden
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
