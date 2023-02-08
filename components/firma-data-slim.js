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
      <span className="font-bold">Mitgliedsbeitrag: </span>
      {data.f_beitrag}€ Jährlich
      {data.f_freitext && (
        <div>
          <span className="font-bold">Deine Nachricht an uns: </span>
          {data.f_freitext}
        </div>
      )}
    </div>
  )
}
