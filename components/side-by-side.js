import parse from 'html-react-parser'
import Image from 'next/image'
import voicePic from '../public/voice.jpg'
import fascinationPic from '../public/fascination.jpg'
import attackPic from '../public/attack.jpg'
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
            <div className="mx-4 pt-6 lg:mx-16 prose prose-lg prose-on-purple">
              {parse(props.props.page.voice)}
            </div>
          </div>
          <div className="relative h-96 w-full lg:h-full" data-aos="fade-left">
            <Image
              className="object-cover rounded-none"
              src={voicePic}
              layout="fill"
              alt="Feuerwerk braucht eine starke Stimme"
            />
          </div>
        </section>
        {/* Section 2 */}
        <div className="bg-purple-900 relative lg:grid lg:grid-cols-2 lg:items-center">
          <div
            className="relative bg-purple-900 py-12 md:h-full"
            data-aos="fade-left"
          >
            <div className="mx-4 pt-6 lg:mx-16 prose prose-lg prose-on-purple">
              {parse(props.props.page.fascination)}
            </div>
          </div>
          <div
            className="relative order-first w-full h-96 lg:h-full"
            data-aos="fade-right"
          >
            <Image
              className="lg:block md:h-full w-full object-cover rounded-none"
              src={fascinationPic}
              layout="fill"
              alt="Feuerwerk fasziniert"
            />
          </div>
        </div>
        {/* Section 3 */}
        <div className="bg-purple-900 relative lg:grid lg:grid-cols-2 lg:items-center">
          <div
            className="order-first relative bg-purple-900 py-12 md:h-full"
            data-aos="fade-right"
          >
            <div className="mx-4 pt-6 lg:mx-16 prose prose-lg prose-on-purple">
              {parse(props.props.page.attack)}
            </div>
          </div>
          <div className="relative w-full h-96 lg:h-full" data-aos="fade-left">
            <Image
              className="lg:block md:h-full w-full object-cover rounded-none"
              src={attackPic}
              layout="fill"
              alt="Feuerwerk steht unter Beschuss"
            />
          </div>
        </div>
      </div>
    </main>
  )
}
