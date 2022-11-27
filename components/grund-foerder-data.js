export default function GrundFoerderData(props) {
  const data = props.props
  console.log(data)

  return (
    <div>
      <span className="font-bold">Name: </span>
      {data.anrede} {data.titel} {data.vorname} {data.nachname}
      <br />
      <span className="font-bold">Mitgliedsnummer: </span>
      {data.mitgliedsnummer}
      <br />
      <span className="font-bold">E-mail: </span>
      {data.email}
      <br />
      <span className="font-bold">IBAN: </span>
      {data.iban}
      <br />
      <span className="font-bold">Grundmitgliedschaft: </span>
      24€ Jährlich
      <br />
      {data.feuerwerk_erlaubnis && (
        <div>
          <span className="font-bold">Feuerwerk Erlaubnisschein: </span>
          {data.feuerwerk_para_20 ? '§20' : ' '}
          {data.feuerwerk_para_27 ? ' | §27' : ' '}
          {data.feuerwerk_para_7 ? ' | §7' : ' '}
        </div>
      )}
      {(data.feuerwerk_f3 ||
        data.feuerwerk_buehne ||
        data.feuerwerk_sfx ||
        data.feuerwerk_gf) && (
        <div>
          <span className="font-bold">
            Feuerwerk Erlaubnisschein Bereiche:{' '}
          </span>
          {data.feuerwerk_f3 ? 'F3' : ' '}
          {data.feuerwerk_buehne ? ' | Bühne' : ' '}
          {data.feuerwerk_sfx ? ' | SFX' : ' '}
          {data.feuerwerk_gf ? ' | Großfeuerwerk' : ' '}
        </div>
      )}
      {data.foerdermitglied && (
        <div>
          <span className="font-bold">Förderbeitrag: </span>
          {data.foerderbeitrag}€ {data.zahlungsrhythmus}
        </div>
      )}
      {data.feuerwerk_versicherung && (
        <div>
          <span className="font-bold">Versicherungsbeitrag: </span>
          36€ Jährlich
        </div>
      )}
      {data.freitext && (
        <div>
          <span className="font-bold">Deine Nachricht an uns: </span>
          {data.freitext}
        </div>
      )}
    </div>
  )
}
