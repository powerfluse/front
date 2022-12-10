import Link from 'next/link'
export default function BlogIndex(props) {
  const postsUnsorted = props.props.items
  const posts = postsUnsorted.sort(function (a, b) {
    return new Date(b.date) - new Date(a.date)
  })

  return (
    <div className="relative overflow-hidden max-w-full pb-12">
      <div className="relative mx-4 py-12 lg:mx-24 divide-y divide-gray-300">
        <div>
          <h2 className="text-3xl font-bold font-titillium text-gray-700">
            Pressemitteilungen
          </h2>
        </div>
        <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-1 xl:grid-cols-1 lg:gap-x-5 lg:gap-y-12">
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
                <p className="text-xl font-titillium font-bold text-gray-700">
                  {post.title}
                </p>
                <p className="mt-3 font-source text-gray-600">
                  {post.description}
                </p>
              </a>
              <div className="mt-3">
                <a
                  href={'/aktuelles/' + post.slug}
                  className="font-bold font-source text-bvpk-600 hover:text-bvpk-800 duration-300"
                >
                  Zur Pressemitteilung
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center ">
        <Link href="/aktuelles">
          <button className="button">
            Schaue dir an, was wir sonst noch machen
          </button>
        </Link>
      </div>
    </div>
  )
}
