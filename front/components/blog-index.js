export default function BlogIndex(props) {
  const posts = props.props.dataAktuelles10
  return (
    <div className="bg-purple-900 max-w-full ">
      <div className="relative mx-4 py-24 lg:py-32 lg:mx-24 divide-y-2 divide-purple-800">
        <div>
          <h2 className="text-3xl tracking-tight font-extrabold text-purple-300 sm:text-4xl">
            Aktuelles
          </h2>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 xl:grid-cols-3 lg:gap-x-5 lg:gap-y-12">
          {posts.map((post) => (
            <div key={post.title}>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>
                  {new Intl.DateTimeFormat('de-DE', {
                    year: 'numeric',
                    month: 'long',
                    day: '2-digit',
                  }).format(new Date(post.date))}
                </time>
              </p>
              <a href="#" className="mt-2 block">
                <p className="text-xl font-semibold text-white">{post.title}</p>
                <p className="mt-3 text-base text-gray-300">
                  {post.description}
                </p>
              </a>
              <div className="mt-3">
                <a
                  href={'/aktuelles' + post.slug}
                  className="text-base font-semibold text-purple-300 hover:text-purple-600"
                >
                  Zum Artikel
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
