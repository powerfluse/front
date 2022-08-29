import { useFormContext } from 'react-hook-form'

export default function Select(props) {
  const { register, formState } = useFormContext()
  const { isDirty, isValid, errors } = formState
  const error = eval(`errors.${props.name}`)
  const title_from_name = props.name.split('_')[0]
  return (
    <>
      <label
        htmlFor={props.name}
        className="block font-source font-bold text-gray-700 capitalize"
      >
        {props.title ? props.title : title_from_name}
      </label>
      <select
        name={props.name}
        id={props.name}
        autoComplete={props.autoComplete}
        className={
          error && isDirty && !isValid
            ? 'formfield-invalid'
            : isValid
            ? 'formfield-valid'
            : 'formfield'
        }
        defaultValue={props.defaultValue}
        {...register(props.name, props.validation)}
      >
        {props.options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </>
  )
}
