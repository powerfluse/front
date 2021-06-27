export default function BlogIndex(props) {
  // TODO Clean up blog on homepage
  const posts = props.props.dataAktuelles6
  return (
    <div className="bg-purple-900 max-w-full ">
      <div className="relative mx-4 py-24 lg:py-32 lg:mx-24 divide-y-2 divide-purple-800">
        <div>
          <h2 className="text-4xl tracking-tight font-bold font-titillium text-purple-300">
            Aktuelles
          </h2>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="font-source text-gray-400">
                <time dateTime={post.datetime}>
                  {new Intl.DateTimeFormat('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  }).format(new Date(post.date))}
                </time>
              </p>
              <a href={'/aktuelles/' + post.slug} className="mt-2 block">
                <p className="text-xl font-titillium font-bold text-gray-300">
                  {post.title}
                </p>
                <p className="mt-3 font-source text-gray-400">
                  {post.description}
                </p>
              </a>
              <div className="mt-3">
                <a
                  href={'/aktuelles/' + post.slug}
                  className="font-bold font-source text-purple-300 hover:underline"
                >
                  Zum Artikel
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <a href="/aktuelles">
          <button className="button">Schaue dir alle unsere Beiträge an</button>
        </a>
      </div>
    </div>
  )
}
