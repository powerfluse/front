import parse from 'html-react-parser'
export default function SideBySide(props) {
  const bodyFascination = props.props.data.fascination
  const bodyVoice = props.props.data.voice
  const bodyAttack = props.props.data.attack
  return (
    <div className="overflow-hidden">
      <div className="relative w-full">
        {/* Section 1 */}
        <div className="relative my-12 md:my-16 lg:my-36">
          <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-3 lg:gap-8 lg:items-center">
            <div className="lg:col-start-2 lg:col-span-2 mx-5">
              <div className="pb-12 mx-auto lg:ml-8 prose prose-xl prose-on-white">
                {parse(bodyFascination)}
              </div>
            </div>
            <div className="hidden lg:block relative lg:col-start-1">
              <img className="w-full lg:max-w-2xl" src="drawings.png" alt="" />
            </div>
          </div>
        </div>
        {/* Section 2 */}
        <div className="bg-purple-800 relative lg:grid lg:grid-cols-2 lg:items-center">
          <div className="h-96 w-full lg:h-full">
            <img
              className="md:h-full w-full object-cover"
              src="/voice.jpg"
              alt=""
            />
          </div>
          <div className="relative order-first py-12 z-10 bg-purple-800 -mt-12 md:mt-8 pt-4">
            <div className="mx-8 pt-6 lg:mx-24 prose prose-xl prose-on-purple">
              {parse(bodyVoice)}
            </div>
          </div>
        </div>
        {/* Section 3 */}
        <div className="bg-purple-800 relative lg:grid lg:grid-cols-2 lg:items-center">
          <div className="h-96 w-full lg:h-full">
            <img
              className="md:h-full w-full object-cover"
              src="/attack.jpg"
              alt=""
            />
          </div>
          <div className="relative py-12 z-10 bg-purple-800 -mt-12 md:mt-8 pt-4">
            <div className="mx-8 pt-6 lg:mx-24 prose prose-xl prose-on-purple">
              {parse(bodyAttack)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
