import Head from '../components/head'
import NavBar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Footer from '../components/footer'
import Image from 'next/image'
import Link from 'next/link'

import grafik00 from '../public/sicher-und-bunt/gegenumkippensichern.jpg'
import grafik01 from '../public/sicher-und-bunt/loeschmittelbereithalten.jpg'
import grafik02 from '../public/sicher-und-bunt/blindgaenger.jpg'
import grafik03 from '../public/sicher-und-bunt/abstandhalten.jpg'
import grafik04 from '../public/sicher-und-bunt/feuerwerkundalkohol.jpg'
import grafik05 from '../public/sicher-und-bunt/ruecksichtaufandere.jpg'
import grafik06 from '../public/sicher-und-bunt/keinekoerperteile.jpg'
import grafik07 from '../public/sicher-und-bunt/nichtausalleinstehendenflaschenstarten.jpg'
import grafik08 from '../public/sicher-und-bunt/nurzugelassenesfeuerwerk.jpg'

export default function SicherUndBunt(props) {
  return (
    <>
      <Head />
      <NavBar />

      {/* Titel  */}
      <div className="container prose-bvpk mx-auto pt-8 lg:pt-20 px-4">
        <h1>Farbenfroh und sicher ins neue Jahr</h1>
        <Image
          width={1300}
          height={1300}
          className="object-cover"
          src={grafik00}
          alt=""
        />
        <p className="lead">
          Millionen Menschen erfreuen sich am bunten und selbst gezündeten
          Feuerwerk zum Jahreswechsel. Wenn bei der Anwendung mitgedacht wird,
          steht einem sicheren, rücksichtsvollen und vor allem freudig bunten
          Silvester nichts im Wege.
        </p>
      </div>

      {/* Inhalt */}
      <section className="mt-4 h-full bg-white mx-auto max-w-5xl">
        {/* Löschmittel */}
        <div className="relative h-full container flex flex-col items-center px-4 lg:px-12 py-12 mx-auto lg:flex-row">
          <div className="relative w-full flex justify-center shrink lg:w-1/2">
            <div className="h-80 w-full md:w-72 md:h-72 rounded-md">
              <Image
                layout="fill"
                className="object-contain"
                src={grafik01}
                alt=""
              />
            </div>
          </div>
          <div className="prose-bvpk flex flex-col prose-headings:text-center lg:prose-headings:text-left items-center mt-6 lg:items-start lg:w-1/2 lg:mt-0">
            <h2>Beim Feuerwerken: Löschmittel bereit halten</h2>
            <p>
              Wenn du viel Feuerwerk zündest: Denk’ daran, einen Eimer Wasser
              oder einen Feuerlöscher bereit zu halten. So bist du auch für die
              unwahrscheinlichsten Situationen gewappnet.
            </p>
          </div>
        </div>

        {/* Nicht erneut anzünden */}
        <div className="relative h-full container flex flex-col items-center px-4 lg:px-12 py-12 mx-auto lg:flex-row">
          <div className="prose-bvpk flex flex-col prose-headings:text-center lg:prose-headings:text-left items-center mt-6 lg:items-start lg:w-1/2 lg:mt-0">
            <h2>Feuerwerkskörper: Nicht erneut anzünden</h2>
            <p>
              Millionen Menschen erfreuen sich am bunten und selbst gezündeten
              Feuerwerk zum Jahreswechsel. Wenn bei der Anwendung mitgedacht
              wird, steht einem sicheren, rücksichtsvollen und vor allem freudig
              bunten Silvester nichts im Wege. Zünde Feuerwerkskörper, die nicht
              funktioniert haben, nicht erneut an. <strong>Ausnahme: </strong>
              Manche Artikel (z.B. Batteriefeuerwerk) besitzen eine
              gekennzeichnete Ersatzzündschnur, die du erneut anzünden kannst.
              Vor dem erneuten Anzünden <strong>15 Minuten </strong>warten und
              Abstand halten
            </p>
          </div>
          <div className="order-first lg:order-last relative w-full flex justify-center shrink lg:w-1/2">
            <div className="h-80 w-full md:w-72 md:h-72 rounded-md">
              <Image
                layout="fill"
                className="object-contain"
                src={grafik02}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Abstand halten und genießen */}
        <div className="relative h-full container flex flex-col items-center px-4 lg:px-12 py-12 mx-auto lg:flex-row">
          <div className="relative w-full flex justify-center shrink lg:w-1/2">
            <div className="h-80 w-full md:w-72 md:h-72 rounded-md">
              <Image
                layout="fill"
                className="object-contain"
                src={grafik03}
                alt=""
              />
            </div>
          </div>
          <div className="prose-bvpk flex flex-col items-center mt-6 lg:items-start lg:w-1/2 lg:mt-0">
            <h2>Abstand halten und genießen</h2>
            <p>
              Halte einen größtmöglichen Sicherheitsabstand zum Feuerwerk. Der
              Abstand sollte mindestens acht Meter betragen – mehr ist besser!
              Zünde Feuerwerk niemals in Menschenmengen an. Nicht nur der
              Sicherheit wegen: Mit größerem Abstand ist das Feuerwerk schöner
              zu betrachten.
            </p>
          </div>
        </div>

        {/* Feuerwerk und Alkohol */}
        <div className="relative h-full container flex flex-col items-center px-4 lg:px-12 py-12 mx-auto lg:flex-row">
          <div className="prose-bvpk prose-headings:text-center lg:prose-headings:text-left flex flex-col items-center mt-6 lg:items-start lg:w-1/2 lg:mt-0">
            <h2>Feuerwerk und Alkohl: Eine schlechte Kombination</h2>
            <p>
              Die meisten Unfälle in der Silvesternacht passieren durch den
              Einfluss von Alkohol. Verwende Feuerwerk{' '}
              <strong>nur wenn du nüchtern bist</strong>– ansonsten gefährdest
              du dich und deine Umwelt.
            </p>
          </div>
          <div className="order-first lg:order-last relative w-full flex justify-center shrink lg:w-1/2">
            <div className="h-80 w-full md:w-72 md:h-72 rounded-md">
              <Image
                layout="fill"
                className="object-contain"
                src={grafik04}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Nimm Rücksicht auf Andere */}
        <div className="relative h-full container flex flex-col items-center px-4 lg:px-12 py-12 mx-auto lg:flex-row">
          <div className="relative w-full flex justify-center shrink lg:w-1/2">
            <div className="h-80 w-full md:w-72 md:h-72 rounded-md">
              <Image
                layout="fill"
                className="object-contain"
                src={grafik05}
                alt=""
              />
            </div>
          </div>
          <div className="prose-bvpk prose-headings:text-center lg:prose-headings:text-left flex flex-col items-center mt-6 lg:items-start lg:w-1/2 lg:mt-0">
            <h2>Nimm Rücksicht auf andere</h2>
            <p>
              Insbesondere lautes Feuerwerk kann andere stören. Prüfe die
              Besonderheiten deiner Umgebung und zünde kein Feuerwerk in der
              Nähe von <strong>Altenheimen, Tierheimen und Kirchen</strong>.
              Sprich mit den Menschen in deiner Nachbarschaft und kläre sie
              darüber auf.
            </p>
          </div>
        </div>

        {/* Keine Körperteile */}
        <div className="relative h-full container flex flex-col items-center px-4 lg:px-12 py-12 mx-auto lg:flex-row">
          <div className="prose-bvpk prose-headings:text-center lg:prose-headings:text-left flex flex-col items-center mt-6 lg:items-start lg:w-1/2 lg:mt-0">
            <h2>Feuerwerkskörper: nicht in der Hand anzünden</h2>
            <p>
              Zünde Feuerwerkskörper nicht in der Hand an. Stelle oder lege den
              Feuerwerkskörper auf den Boden und zünde ihn mit ausgestrecktem
              Arm am äußersten Ende der Zündschnur an. Achte darauf, dass sich
              dabei{' '}
              <strong>
                kein Körperteil über dem Feuerwerkskörper befindet
              </strong>
              . Entferne dich unmittelbar nach dem Anzünden vom
              Feuerwerkskörper.
            </p>
          </div>
          <div className="order-first lg:order-last relative w-full flex justify-center shrink lg:w-1/2">
            <div className="h-80 w-full md:w-72 md:h-72 rounded-md">
              <Image
                layout="fill"
                className="object-contain"
                src={grafik06}
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Batterien und Raketen */}
        <div className="relative h-full container flex flex-col items-center px-4 lg:px-12 py-12 mx-auto lg:flex-row">
          <div className="relative w-full flex justify-center shrink lg:w-1/2">
            <div className="h-80 w-full md:w-72 md:h-72 rounded-md">
              <Image
                layout="fill"
                className="object-contain"
                src={grafik07}
                alt=""
              />
            </div>
          </div>
          <div className="prose-bvpk prose-headings:text-center lg:prose-headings:text-left flex flex-col items-center mt-6 lg:items-start lg:w-1/2 lg:mt-0">
            <h2>Batterien und Raketen: gegen Umkippen sichern</h2>
            <p>
              Achte beim Zünden von Batteriefeuerwerk auf einen ebenen,{' '}
              <strong>festen Untergrund </strong>(z.B. Straße) und sichere den
              Feuerwerkskörper beidseitig gegen Umkippen. Manche Batterien haben
              Papplaschen, die ausgeklappt werden können.{' '}
              <strong>Raketen in alleinstehenden Flaschen können kippen</strong>
              . Zünde Raketen daher am besten aus einer fest stehenden
              Getränkekiste.
            </p>
          </div>
        </div>

        {/* Nur geprüftes Feuerwerk */}
        <div className="relative h-full container flex flex-col items-center px-4 lg:px-12 pt-12 mx-auto lg:flex-row">
          <div className="prose-bvpk prose-headings:text-center lg:prose-headings:text-left flex flex-col items-center mt-6 lg:items-start lg:w-1/2 lg:mt-0">
            <h2>Nur geprüftes Feuerwerk kaufen - Anleitung beachten</h2>
            <p>
              Kaufe ausschließlich zugelassenes und geprüftes
              Silvesterfeuerwerk. Dies ist erkennbar an: Dem{' '}
              <strong>CE-Zeichen</strong> gefolgt von der Nummer der Prüfstelle
              (<strong>z.B. CE 0589</strong>) sowie an der Registriernummer (
              <strong>z.B. 0589- F2-1234</strong>). Jeder Feuerwerkskörper hat
              unterschiedliche Sicherheits- und Anwendungshinweise. Lies dir
              diese vor Gebrauch sorgfältig durch.
            </p>
          </div>
          <div className="order-first lg:order-last relative w-full flex justify-center shrink lg:w-1/2">
            <div className="h-80 w-full md:w-72 md:h-72 rounded-md">
              <Image
                layout="fill"
                className="object-contain"
                src={grafik08}
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Ende */}
      </section>
      <div className="px-4 sm:px-0 container prose-bvpk prose-headings:text-center lg:prose-heading:text-left mx-auto">
        <h2>Wir wünschen einen guten Rutsch und eine bunte Silvesternacht!</h2>
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

      <Newsletter />
      <Footer />
    </>
  )
}
