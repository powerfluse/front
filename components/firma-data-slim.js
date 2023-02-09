import { computeGesamtBeitrag } from '../lib/compute-gesamt-beitrag'

export default function FirmaData(props) {
  const data = props.props

  return (
    <div>
      <span className="font-bold">Ansrepchpartner:in: </span>
      {data.f_ap_anrede} {data.f_ap_vorname} {data.f_ap_nachname}
      <br />
      <span className="font-bold">E-mail: </span>
      {data.f_ap_email}
      <br />
      <span className="font-bold">Jahresbeitrag (gesamt): </span>
      {computeGesamtBeitrag(data.f_beitrag, data.f_zahlungsrhythmus)}
      <br />
      <span className="font-bold">Zahlungsrhythmus: </span>
        {data.f_zahlungsrhythmus}
      {data.f_freitext && (
        <div>
          <span className="font-bold">Deine Nachricht an uns: </span>
          {data.f_freitext}
        </div>
      )}
    </div>
  )
}
