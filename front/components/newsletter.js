export default function Newsletter() {
  return (
    <div className="bg-purple-900">
      <div className="max-w-full mx-4 md:mx-0 py-24 lg:py-32 lg:px-24 lg:flex lg:items-center">
        <div className="lg:w-0 lg:flex-1">
          <h2 className="text-3xl font-bold font-titillium text-purple-300 sm:text-4xl">
            Bleibe auf dem Laufenden!
          </h2>
          <p className="font-source mt-3 max-w-3xl text-lg text-gray-300">
            Melde dich bei unserem Newsletter an, um auf dem Laufenden zu
            bleiben
          </p>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-8">
          <form className="font-source sm:flex">
            <label htmlFor="emailAddress" className="sr-only">
              Email-Addresse
            </label>
            <input
              id="emailAddress"
              name="emailAddress"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-400 focus:ring-2 focus:ring-purple-600 focus:border-purple-300 sm:max-w-xs rounded-md"
              placeholder="E-mail eingeben"
            />
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button type="submit" className="button">
                Anmelden
              </button>
            </div>
          </form>
          <p className="mt-3 text-sm text-gray-400">
            Uns liegt{' '}
            <a href="#" className="text-purple-300 underline">
              der Schutz deiner Daten
            </a>{' '}
            am Herzen{' '}
          </p>
        </div>
      </div>
    </div>
  )
}
