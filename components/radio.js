import { useFormContext } from 'react-hook-form'

export default function Input(props) {
  const { register, formState } = useFormContext()
  const { isDirty, isValid, errors } = formState
  const error = eval(`errors.${props.name}`)
  return (
    <>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        id={props.name}
        className="checkbox"
        {...register(props.name, props.validation)}
      />
      <span className="mx-3 font-source font-bold text-gray-300 ">
        {props.href ? (
          <span>
            {props.pre_href_text}
            <a
              className="text-bvpk-300 hover:underline focus:ring focus:ring-1 focus:ring-white focus:rounded-sm"
              href={props.href}
              rel="noopener noreferrer"
              target="_blank"
            >
              {props.href_text}
            </a>
          </span>
        ) : (
          props.title
        )}
      </span>
      <div>
        {error && (
          <div className="pt-1 text-red-500 font-source">{error.message}</div>
        )}
      </div>
    </>
  )
}
