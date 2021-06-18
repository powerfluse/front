import parse from 'html-react-parser'
export default function SideBySide(props) {
  const bodyFascination = props.props.data.fascination
  const bodyVoice = props.props.data.voice
  const bodyAttack = props.props.data.attack
  return (
    <main id="feuerwerk" className="snap snap-y snap-mandatory">
      <div className="relative w-full">
        {/* Section 1 */}
        <section className="snap-start relative lg:grid lg:grid-cols-2 lg:items-center">
          <div className="w-full lg:h-full">
            <img
              className="md:h-full w-full object-cover"
              src="/fascination.jpg"
              alt=""
            />
          </div>
          <div className="relative bg-purple-900 py-12 md:pt-6 md:h-full">
            <div className="mx-8 pt-6 lg:mx-24 prose prose-xl prose-on-purple">
              {parse(bodyFascination)}
            </div>
          </div>
        </section>
        {/* Section 2 */}
        <div className="snap-start relative lg:grid lg:grid-cols-2 lg:items-center">
          <div className="w-full lg:h-full">
            <img
              className="md:h-full w-full object-cover"
              src="/voice.jpg"
              alt=""
            />
          </div>
          <div className="relative bg-purple-900 order-first py-12 md:pt-6 md:h-full">
            <div className="mx-8 pt-6 lg:mx-24 prose prose-xl prose-on-purple">
              {parse(bodyVoice)}
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div className="snap-start relative lg:grid lg:grid-cols-2 lg:items-center">
          <div className="w-full lg:h-full">
            <img
              className="md:h-full w-full object-cover"
              src="/attack.jpg"
              alt=""
            />
          </div>
          <div className="relative bg-purple-900 py-12 md:pt-6 md:h-full">
            <div className="mx-8 pt-6 lg:mx-24 prose prose-xl prose-on-purple">
              {parse(bodyAttack)}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
