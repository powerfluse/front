import Image from 'next/image'
import parse from 'html-react-parser'

export default function ImageRightAndText(props) {
  return (
    <>
      <div className="relative h-full container flex flex-col items-center px-4 lg:px-12 py-12 mx-auto lg:flex-row">
        <div className="relative w-full flex justify-center shrink lg:w-1/2">
          <div className="h-80 w-full md:w-72 md:h-72 rounded-md">
            <Image
              layout="fill"
              className="object-contain"
              src={props.image}
              alt={props.alt}
            />
          </div>
        </div>
        <div className="prose-bvpk prose-headings:text-center lg:prose-headings:text-left flex flex-col items-center mt-6 lg:items-start lg:w-1/2 lg:mt-0">
          <h2>{props.title}</h2>
          <p>{parse(props.text)}</p>
        </div>
      </div>
    </>
  )
}
