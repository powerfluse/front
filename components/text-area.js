import { useFormContext } from 'react-hook-form'

export default function TextArea(props) {
  const { register, formState } = useFormContext()
  const { isDirty, isValid, errors } = formState
  const error = eval(`errors.${props.name}`)
  const title_from_name = props.name.split('_')[0]
  return (
    <>
      <div className="flex justify-between">
        <label
          htmlFor={props.name}
          className="block font-source font-bold text-gray-300"
        >
          {props.title ? props.title : title_from_name}
        </label>
        <span
          id={props.msg.replace(/[^\w ]+/g, '').replace(/ +/g, '-')}
          className="hidden lg:block text-sm font-source text-gray-300"
        >
          {props.msg}
        </span>
      </div>
      <textarea
        rows={props.rows}
        name={props.name}
        id={props.name}
        className={
          error && isDirty && !isValid
            ? 'formfield-invalid'
            : isValid
            ? 'formfield-valid'
            : 'formfield'
        }
        {...register(props.name, props.validation)}
      />
      <div>
        {error && (
          <div className="pt-1 text-red-500 font-source">{error.message}</div>
        )}
      </div>
    </>
  )
}
