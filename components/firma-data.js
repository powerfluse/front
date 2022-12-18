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
      <span className="font-bold">Telefon: </span>
      {data.f_ap_telefon}
      <br />
      <span className="font-bold">Addresse: </span>
      {data.f_strasse} {data.f_hausnummer}, {data.f_addresszusatz}, {data.f_plz}{' '}
      {data.f_ort}, {data.f_land}
      {data.f_feuerwerk_net && (
        <div>
          <span className="font-bold">FEUERWERK.net Mitgliedsname: </span>
          {data.f_feuerwerk_net}
        </div>
      )}
      <br />
      {(data.f_t_gf ||
        data.f_t_buehne ||
        data.f_t_sfx ||
        data.f_t_handel_gf ||
        data.f_t_handel_kf ||
        data.f_t_handel_kf_silvester ||
        data.f_t_herstellung_de ||
        data.f_t_import ||
        data.f_t_sonstige) && (
        <div>
          <span className="font-bold">Tätigkeitsschwerpunkte: </span>
          {data.f_t_gf ? 'Großfeuerwerk' : ''}
          {data.f_t_buehne ? ' | Bühne' : ''}
          {data.f_t_sfx ? ' | SFX' : ''}
          {data.f_t_handel_gf ? ' | Handel mit Großfeuerwerk' : ''}
          {data.f_t_handel_kf
            ? ' | Handel mit Kleinfeuerwerk unter dem Jahr'
            : ''}
          {data.f_t_handel_kf_silvester
            ? ' | Handel mit Kleinfeuerwerk zu Silvester'
            : ''}
          {data.f_t_import ? ' | Import' : ''}
          {data.f_t_herstellung_de ? ' | Herstellung in Deutschland' : ''}
          {data.f_t_sonstige ? ` | ${data.f_t_sonstige}` : ''}
        </div>
      )}
      <span className="font-bold">IBAN: </span>
      {data.f_iban}
      {data.feuerwerk_erlaubnis && (
        <div>
          <span className="font-bold">Feuerwerk Erlaubnisschein: </span>
          {data.feuerwerk_para_20 ? '§20' : ''}{' '}
          {data.feuerwerk_para_27 ? '§27' : ''}{' '}
          {data.feuerwerk_para_7 ? '§7' : ''}
        </div>
      )}
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
