export default function Blog(props) {
  const baseURL = 'https://bvpk-back.linus.cx'
  const assetURL = `${baseURL}/assets/`
  const aktuellesPage = props.props.aktuellesPage
  const aktuelles_unsorted = props.props.aktuelles
  const aktuelles = aktuelles_unsorted.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })
  return (
    <div className="relative bg-purple-900 pt-24 pb-24 px-4 sm:px-6 md:pt-28 lg:pt-32 lg:pb-28 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-5xl tracking-tight font-titillium font-bold text-purple-300">
            {aktuellesPage.title}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto font-source text-xl text-gray-300 sm:mt-4">
            {aktuellesPage.subtitle}
          </p>
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {aktuelles.map((a) => (
            <a
              href={/aktuelles/ + a.slug}
              key={a.title}
              className="flex flex-col rounded-md shadow-md transition transform hover:shadow-xl duration-500 overflow-hidden"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={assetURL + a.image}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-purple-800 p-6 flex flex-col justify-between hover:shadow-xl">
                <div className="flex-1">
                  <p className="uppercase text-md font-source font-bold text-purple-300">
                    {a.category}
                  </p>
                  <a href={a.href} className="block mt-2">
                    <p className="text-xl font-bold font-titillium text-white">
                      {a.title}
                    </p>
                    <p className="mt-3 text-base font-source text-gray-300">
                      {a.description}
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <div className="flex space-x-1 text-md font-source text-gray-400">
                      <time dateTime={a.datetime}>
                        {new Intl.DateTimeFormat('de-DE', {
                          year: 'numeric',
                          month: 'long',
                          day: '2-digit',
                        }).format(new Date(a.date))}
                      </time>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
