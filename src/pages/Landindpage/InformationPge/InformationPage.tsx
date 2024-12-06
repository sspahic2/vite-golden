import Typography from '../../../components/Typography'
import { INFORMATION_PATH_SCROLL } from '../../../config/PathForScroll'

const InformationPage = () => {
    return (
        <div id={INFORMATION_PATH_SCROLL} className='container mx-auto mt-12 mb-20 flex flex-col'>
            <div className='flex flex-col'>
                <Typography size="large">
                    Startseite / Informationen
                </Typography>
                <Typography size="big" className='mt-10'>
                    <span className='border-b-2 border-primary pb-1'>
                        Informationen
                    </span>
                </Typography>


                <Typography size="normal" className='mt-10'>
                    Willkommen auf der Informationsseite von Goldene Seiten. Hier finden Sie umfassende Informationen, die Ihnen helfen, unser Angebot und unsere
                    Arbeitsweise besser zu verstehen. Unser Ziel ist es, Ihnen alle notwendigen Details zu liefern, um fundierte Entscheidungen zu treffen und mit uns
                    erfolgreich zusammenzuarbeiten.
                </Typography>
                <Typography size="normal" className='mt-10'>
                    Erfahren Sie mehr über das breite Spektrum an Dienstleistungen, die wir bei Goldene Seiten anbieten. Von maßgeschneiderten Weblösungen über innovative
                    Mobile-App-Entwicklungen bis hin zu strategischer Beratung – wir bieten Lösungen, die speziell auf Ihre Bedürfnisse zugeschnitten sind. Detaillierte
                    Beschreibungen und Beispiele geben Ihnen einen klaren Überblick über unsere Angebote und wie wir Ihre Projekte unterstützen können.
                </Typography>

                <Typography size="normal" className='mt-10'>
                    Erfahren Sie mehr über unser Unternehmen, unsere Geschichte und die Werte, die uns antreiben. Hier stellen wir Ihnen unser Team vor und erklären unsere
                    Philosophie, die hinter unserer Arbeit steht. Wir legen großen Wert auf Qualität, Innovation und Kundenzufriedenheit, was sich in jedem Projekt widerspiegelt.
                </Typography>

                <Typography size="normal" className='mt-10'>
                    Für Fragen oder weiterführende Informationen stehen wir Ihnen jederzeit zur Verfügung. Auf dieser Seite finden Sie unsere Kontaktdaten sowie ein
                    praktisches Kontaktformular. Wir sind bestrebt, Ihre Anfragen schnell und kompetent zu beantworten und Ihnen den besten Service zu bieten.
                </Typography>

                <Typography size="normal" className='mt-10'>
                    In unserer FAQ-Sektion beantworten wir häufig gestellte Fragen, um Ihnen schnelle und einfache Antworten auf Ihre Anliegen zu bieten. Hier finden Sie
                    Lösungen zu allgemeinen Fragen, die Ihnen helfen können, einen klaren Überblick zu erhalten.
                </Typography>

                <Typography size="normal" className='mt-10'>
                    Bleiben Sie informiert über die neuesten Entwicklungen und Updates von Goldene Seiten. Hier teilen wir aktuelle Nachrichten, neue Projekte und relevante
                    Informationen, die für Sie von Interesse sein könnten. Verpassen Sie keine Neuigkeiten und bleiben Sie immer auf dem Laufenden.
                </Typography>

                <Typography size="normal" className='mt-10'>
                    Wir hoffen, dass Sie auf unserer Informationsseite alle Antworten und Informationen finden, die Sie benötigen. Bei weiteren Fragen oder speziellen Anliegen
                    stehen wir Ihnen gerne zur Verfügung.
                </Typography>

            </div>
        </div>
    )
}

export default InformationPage