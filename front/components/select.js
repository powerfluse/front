import { useForm } from 'react-hook-form'

export default function Select(props) {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful, errors } =
    formState
  const error = eval(`errors.${props.name}`)
  const title = props.name.split('_')[0]
  console.log(title)
  return (
    <>
      <label
        htmlFor={props.name}
        className="block text-sm font-source font-bold text-gray-300 capitalize"
      >
        {title}
      </label>
      <select
        name={props.name}
        id={props.name}
        autoComplete={props.autoComplete}
        className={
          error || (isDirty && !isValid)
            ? 'formfield-invalid'
            : isValid
            ? 'formfield-valid'
            : 'formfield'
        }
        defaultValue={props.defaultValue}
      >
        {props.options.map((o) => (
          <option value={o}>{o}</option>
        ))}
      </select>
    </>
  )
}
