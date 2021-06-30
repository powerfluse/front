import { useFormContext } from 'react-hook-form'

export default function CheckBokSatzungBeitragsordnung(props) {
  const { register, formState } = useFormContext()
  const { isDirty, isValid, errors } = formState
  const error = eval(`errors.${props.name}`)
  return (
    <>
      <input
        type="checkbox"
        name={props.name}
        id={props.name}
        autoComplete={props.autoComplete}
        className="checkbox"
        {...register(props.name, props.validation)}
      />
      <span className="mx-3 font-source font-bold text-gray-300 ">
        <span>
          Ja, ich erkenne die{' '}
          <a
            className="text-purple-300 hover:underline focus:ring focus:ring-1 focus:ring-white focus:rounded-sm"
            href="/bvpk_satzung.pdf"
            target="_blank"
          >
            Satzung
          </a>{' '}
          und die{' '}
          <a
            className="text-purple-300 hover:underline focus:ring focus:ring-1 focus:ring-white focus:rounded-sm"
            href="/bvpk_beitragsordnung.pdf"
            target="_blank"
          >
            Beitragsordnung
          </a>{' '}
          an.
        </span>
      </span>
      <div>
        {error && (
          <div className="pt-1 text-red-500 font-source">{error.message}</div>
        )}
      </div>
    </>
  )
}
