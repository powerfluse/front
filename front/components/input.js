import { useForm } from 'react-hook-form'

export default function Input(props) {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const { isDirty, isValid, isSubmitting, isSubmitSuccessful, errors } =
    formState
  const error = eval(`errors.${props.name}`)
  const title = props.name.split('_')[0]
  return (
    <>
      <div className="flex justify-between">
        <label
          htmlFor={props.name}
          className="block text-sm font-source font-bold text-gray-300 capitalize"
        >
          {title}
        </label>
        <span
          id={props.msg.replace(/[^\w ]+/g, '').replace(/ +/g, '-')}
          className="hidden lg:block text-sm font-source text-gray-300"
        >
          {props.msg}
        </span>
      </div>
      <input
        type={props.type}
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
        {...register(props.name, props.validation)}
      />
    </>
  )
}
