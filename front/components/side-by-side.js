import parse from 'html-react-parser'
// TODO try with smaller text
// TODO extract side-by-side sections into components
export default function SideBySide(props) {
  return (
    <main id="feuerwerk">
      <div className="relative w-full overflow-hidden">
        {/* Section 1 */}
        <section className="bg-purple-900 relative lg:grid lg:grid-cols-2 lg:items-center">
          <div
            className="relative bg-purple-900 py-12 md:h-full"
            data-aos="fade-right"
          >
            <div className="mx-4 pt-6 lg:mx-24 prose prose-lg prose-on-purple">
              {parse(props.props.dataIndexPage.voice)}
            </div>
          </div>
          <div className="w-full lg:h-full" data-aos="fade-left">
            <img
              className="lg:block md:h-full w-full object-cover"
              src="/voice.jpg"
              alt=""
            />
          </div>
        </section>
        {/* Section 2 */}
        <div className="bg-purple-900 relative lg:grid lg:grid-cols-2 lg:items-center">
          <div
            className="relative bg-purple-900 py-12 md:h-full"
            data-aos="fade-left"
          >
            <div className="mx-4 pt-6 lg:mx-24 prose prose-lg prose-on-purple">
              {parse(props.props.dataIndexPage.fascination)}
            </div>
          </div>
          <div className="order-first w-full lg:h-full" data-aos="fade-right">
            <img
              className="md:h-full w-full object-cover"
              src="/fascination.jpg"
              alt=""
            />
          </div>
        </div>
        {/* Section 3 */}
        <div className="bg-purple-900 relative lg:grid lg:grid-cols-2 lg:items-center">
          <div
            className="order-first relative bg-purple-900 py-12 md:h-full"
            data-aos="fade-right"
          >
            <div className="mx-4 pt-6 lg:mx-24 prose prose-lg prose-on-purple">
              {parse(props.props.dataIndexPage.attack)}
            </div>
          </div>
          <div className="w-full lg:h-full" data-aos="fade-left">
            <img
              className="md:h-full w-full object-cover"
              src="/attack.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </main>
  )
}
