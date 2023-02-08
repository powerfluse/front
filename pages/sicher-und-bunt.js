import Image from 'next/image'
import Link from 'next/link'

import HeadComponent from '../components/head'
import NavBar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import ImageLeftAndText from '../components/image-left-and-text'
import ImageRightAndText from '../components/image-right-and-text'

import opener from '../public/sicher-und-bunt/opener.jpg'
import loeschmittel from '../public/sicher-und-bunt/loeschmittelbereithalten.jpg'
import blindgaenger from '../public/sicher-und-bunt/blindgaenger.jpg'
import abstandhalten from '../public/sicher-und-bunt/abstandhalten.jpg'
import alkohol from '../public/sicher-und-bunt/feuerwerkundalkohol.jpg'
import ruecksicht from '../public/sicher-und-bunt/ruecksichtaufandere.jpg'
import keinekoerperteile from '../public/sicher-und-bunt/keinekoerperteile.jpg'
import nichtausflaschen from '../public/sicher-und-bunt/nichtausalleinstehendenflaschenstarten.jpg'
import nurzugelassenesfeuerwerk from '../public/sicher-und-bunt/nurzugelassenesfeuerwerk.jpg'

export default function SicherUndBunt() {
    return (
        <>
            <HeadComponent title={"Farbenfroh und sicher ins neue Jahr"}/>
            <NavBar/>

            {/* Titel  */}
            <div className="container prose-bvpk mx-auto pt-8 lg:pt-20 px-4">
                <h1>
                    <Image
                        width={1300}
                        height={1300}
                        className="object-cover"
                        src={opener}
                        alt="Farbenfroh uns sicher ins neue Jahr"
                    />
                </h1>
                <p className="lead">
                    Millionen Menschen erfreuen sich am bunten und selbst gezündeten
                    Feuerwerk zum Jahreswechsel. Wenn bei der Anwendung mitgedacht wird,
                    steht einem sicheren, rücksichtsvollen und vor allem freudig bunten
                    Silvester nichts im Wege.
                </p>
                <p className="lead">
                    <strong>
                        Wir wünschen einen guten Rutsch und eine bunte Silvesternacht!
                    </strong>
                </p>
                <p className="lead">
                    Übrigens: Unsere Hinweise zum sicheren und rücksichtsvollen Verwenden
                    von Silvesterfeuerwerk kannst du auch als{' '}
                    <a href="https://media.bvpk.org/pics/sicher/bvpk-sicher-und-bunt.pdf">
                        praktisches PDF
                    </a>{' '}
                    herunterladen.
                </p>
            </div>

            {/* Inhalt */}
            <section className="mt-4 h-full bg-white mx-auto max-w-5xl">
                {/* Nur geprüftes Feuerwerk */}
                <ImageLeftAndText
                    title={'Nur geprüftes Feuerwerk kaufen - Anleitung beachten'}
                    text={`Kaufe ausschließlich zugelassenes und geprüftes
              Silvesterfeuerwerk. Dies ist erkennbar an: Dem
              <strong> CE-Zeichen</strong> gefolgt von der Nummer der Prüfstelle
              (<strong>z.B. CE 0589</strong>) sowie an der Registriernummer
              (<strong>z.B. 0589- F2-1234</strong>). Jeder Feuerwerkskörper hat
              unterschiedliche Sicherheits- und Anwendungshinweise. Lies dir
              diese vor Gebrauch sorgfältig durch.`}
                    image={nurzugelassenesfeuerwerk}
                />

                {/* Batterien und Raketen */}
                <ImageRightAndText
                    title={'Batterien und Raketen: gegen Umkippen sichern'}
                    text={`Achte beim Zünden von Batteriefeuerwerk auf einen ebenen,
              <strong> festen Untergrund </strong>(z.B. Straße) und sichere den
              Feuerwerkskörper beidseitig gegen Umkippen. Manche Batterien haben
              Papplaschen, die ausgeklappt werden können. <strong>Raketen
              in alleinstehenden Flaschen können kippen</strong>. Zünde
              Raketen daher am besten aus einer fest stehenden
              Getränkekiste.`}
                    image={nichtausflaschen}
                />

                {/* Abstand halten und genießen */}
                <ImageLeftAndText
                    title={'Abstand halten und genießen'}
                    text={`Halte einen größtmöglichen Sicherheitsabstand zum Feuerwerk. Der
              Abstand sollte mindestens acht Meter betragen – mehr ist besser!
              Zünde Feuerwerk niemals in Menschenmengen an. Nicht nur der
              Sicherheit wegen: Mit größerem Abstand ist das Feuerwerk schöner
              zu betrachten.`}
                    image={abstandhalten}
                />

                {/* Nicht erneut anzünden */}
                <ImageRightAndText
                    title={'Feuerwerkskörper: Nicht erneut anzünden'}
                    text={`Millionen Menschen erfreuen sich am bunten und selbst gezündeten
              Feuerwerk zum Jahreswechsel. Wenn bei der Anwendung mitgedacht
              wird, steht einem sicheren, rücksichtsvollen und vor allem freudig
              bunten Silvester nichts im Wege. Zünde Feuerwerkskörper, die nicht
              funktioniert haben, nicht erneut an. <strong>Ausnahme: </strong>
              Manche Artikel (z.B. Batteriefeuerwerk) besitzen eine
              gekennzeichnete Ersatzzündschnur, die du erneut anzünden kannst.
              Vor dem erneuten Anzünden <strong>15 Minuten </strong>warten und
              Abstand halten.`}
                    image={blindgaenger}
                />

                {/* Löschmittel */}
                <ImageLeftAndText
                    title={'Beim Feuerwerken: Löschmittel bereit halten'}
                    text={`Wenn du viel Feuerwerk zündest: Denk’ daran, einen Eimer Wasser
              oder einen Feuerlöscher bereit zu halten. So bist du auch für die
              unwahrscheinlichsten Situationen gewappnet.`}
                    image={loeschmittel}
                />

                {/* Keine Körperteile */}
                <ImageRightAndText
                    title={'Feuerwerkskörper: nicht in der Hand anzünden'}
                    text={`Zünde Feuerwerkskörper nicht in der Hand an. Stelle oder
              lege den Feuerwerkskörper auf den Boden und zünde ihn mit
              ausgestrecktem Arm am äußersten Ende der Zündschnur an.
              Achte darauf, dass sich dabei<strong> kein Körperteil über
              dem Feuerwerkskörper befindet</strong>. Entferne dich
              unmittelbar nach dem Anzünden vom Feuerwerkskörper.`}
                    image={keinekoerperteile}
                />

                {/* Nimm Rücksicht auf Andere */}
                <ImageLeftAndText
                    title={'Nimm Rücksicht auf andere'}
                    text={`Insbesondere lautes Feuerwerk kann andere stören. Prüfe die
              Besonderheiten deiner Umgebung und zünde kein Feuerwerk in der
              Nähe von <strong>Altenheimen, Tierheimen und Kirchen</strong>.
              Sprich mit den Menschen in deiner Nachbarschaft und kläre sie
              darüber auf.`}
                    image={ruecksicht}
                />

                {/* Feuerwerk und Alkohol */}
                <ImageRightAndText
                    title={'Feuerwerk und Alkohl: Eine schlechte Kombination'}
                    text={`Die meisten Unfälle in der Silvesternacht passieren durch
              den Einfluss von Alkohol. Verwende Feuerwerk <strong>nur
              wenn du nüchtern bist</strong>– ansonsten gefährdest du dich
              und deine Umwelt.`}
                    image={alkohol}
                />

                {/* Ende */}
                <div
                    className="px-4 sm:px-0 container prose-bvpk prose-headings:text-center lg:prose-heading:text-left mx-auto">
                    <h2>
                        Wir wünschen einen guten Rutsch und eine bunte Silvesternacht!
                    </h2>
                    <p>
                        Feuerwerk in seinen verschiedensten Facetten ist Kulturgut und
                        Kunsthandwerk, das viele Menschen fasziniert. Im BVPK setzen wir uns
                        dafür ein, dass die feurige Tradition erhalten bleibt – und sich
                        stetig erneuert. Dafür bilden wir eine starke Stimme für die
                        Pyrotechnik gegenüber Medien und Öffentlichkeit. und unterstützen
                        unsere Mitglieder beim Ausüben ihres Hobbys und Berufs.{' '}
                        <strong>Sei Dabei!</strong>
                    </p>
                    <h2>So kannst du den BVPK Einsatz für’s Feuerwerk unterstützen</h2>
                    <div className="pb-12 flex flex-col lg:flex-row">
                        <Link href="/foerder">
                            <button className="m-2 button">Fördermitglied werden</button>
                        </Link>
                        <Link href="/spenden">
                            <button className="m-2 button">Spenden</button>
                        </Link>
                        <Link href="/petition">
                            <button className="m-2 button">Petition unterzeichnen</button>
                        </Link>
                    </div>
                </div>
            </section>

            <Newsletter/>
            <Footer/>
        </>
    )
}
