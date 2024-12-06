import qualityPhoto from '../../../assets/images/qualityPhoto.jpg'
import Typography from '../../../components/Typography'
import { PHILOSOPHY_PATH_SCROLL } from '../../../config/PathForScroll'

const PhilosophyPage = () => {
    return (
        <div id={PHILOSOPHY_PATH_SCROLL} className='container mx-auto mt-12 mb-20 flex flex-col'>
            <div className='flex flex-col'>
                <Typography size="large">
                    Startseite / Unsere Philosophie
                </Typography>
                <Typography size="big" className='mt-10'>
                    <span className='border-b-2 border-primary pb-1'>
                        Unsere Philosophie
                    </span>
                </Typography>

                <Typography size="normal" className='mt-10'>
                    Unsere Philosophie bei Goldene Seite basiert auf dem Prinzip, dass exzellente Ergebnisse nur durch echte Leidenschaft, Engagement und Kreativität erreicht
                    werden können. Wir glauben daran, dass jede Herausforderung eine Gelegenheit ist, unsere innovativen Ansätze und Lösungen zu testen. Unser Ansatz
                    orientiert sich an den Bedürfnissen unserer Kunden und an der ständigen Verbesserung unserer Prozesse, um stets höchste Qualität und Zufriedenheit zu
                    gewährleisten.
                </Typography>

                <Typography size="normal" className='mt-10'>
                    Wir sehen unsere Arbeit nicht nur als Dienstleistung, sondern als Partnerschaft mit unseren Kunden. Unser Ziel ist es, tiefgreifende Beziehungen aufzubauen
                    und ein umfassendes Verständnis für die individuellen Anforderungen und Ziele unserer Kunden zu entwickeln. Durch enge Zusammenarbeit und offene
                    Kommunikation streben wir danach, maßgeschneiderte Lösungen zu schaffen, die nicht nur funktional, sondern auch zukunftsfähig sind. Diese Philosophie
                    ermöglicht es uns, gemeinsam mit unseren Kunden erfolgreich zu wachsen und langfristige Erfolge zu erzielen.
                </Typography>

                <div className='flex flex-row mt-14 space-x-12 items-center'>
                    <div className='w-2/5'>
                        <img src={qualityPhoto} alt={qualityPhoto} className='rounded-[20px] w-full h-full object-cover' />
                    </div>
                    <div className='w-3/5 flex flex-col'>
                        <Typography size="normal">
                            Ein weiterer zentraler Bestandteil unserer Philosophie ist die Überzeugung, dass Transparenz
                            und Integrität die Grundlage für Vertrauen und langfristige Beziehungen bilden. Wir setzen auf
                            ehrliche Kommunikation und transparente Prozesse, um sicherzustellen, dass unsere Kunden
                            stets genau wissen, woran sie sind. Durch diese Offenheit schaffen wir eine vertrauensvolle
                            Basis, die es uns ermöglicht, gemeinsam an Lösungen zu arbeiten und Herausforderungen
                            effektiv zu meistern. Unser Engagement für Integrität spiegelt sich in allem wider, was wir tun,
                            und bildet das Rückgrat unserer Geschäftsbeziehungen.
                        </Typography>
                    </div>
                </div>

                <div className='flex flex-row mt-14 space-x-12 items-center'>
                    <div className='w-3/5 flex flex-col'>
                        <Typography size="normal">
                            Wir sind der Überzeugung, dass kontinuierliche Weiterentwicklung und Lernen entscheidend für unsere langfristige Erfolgsgeschichte sind.
                            Bei Goldene Seite fördern wir eine Kultur des ständigen Lernens und der Neugier.
                            Unser Team wird ermutigt, neue Fähigkeiten zu erlernen, aktuelle Trends zu verfolgen und innovative Ideen einzubringen. Diese dynamische Haltung ermöglicht es uns, flexibel auf Veränderungen im Markt zu reagieren und stets mit frischen, kreativen Ansätzen auf die Bedürfnisse unserer Kunden einzugehen. Durch diesen kontinuierlichen Verbesserungsprozess sichern wir nicht nur unsere eigene Entwicklung,
                            sondern bieten auch unseren Kunden stets fortschrittliche und effektive Lösungen.
                        </Typography>
                    </div>
                    <div className='w-2/5'>
                        <img src={qualityPhoto} alt={qualityPhoto} className='rounded-[20px] w-full h-full object-cover' />
                    </div>
                </div>

                <div className='flex flex-row mt-14 space-x-12 items-center'>
                    <div className='w-2/5'>
                        <img src={qualityPhoto} alt={qualityPhoto} className='rounded-[20px] w-full h-full object-cover' />
                    </div>
                    <div className='w-3/5 flex flex-col'>
                        <Typography size="normal">
                            Ein wesentlicher Aspekt unserer Philosophie ist unser Engagement für soziale Verantwortung
                            und ethisches Handeln. Bei Goldene Seite setzen wir uns aktiv dafür ein, positive Auswirkungen
                            auf unsere Gemeinschaft und Umwelt zu erzielen. Wir integrieren ethische Praktiken in unsere
                            Geschäftsprozesse und unterstützen Initiativen, die zur Verbesserung der Lebensqualität und
                            zum Schutz der Umwelt beitragen. Diese Verantwortung gegenüber der Gesellschaft ist ein
                            integraler Bestandteil unseres Geschäftsmodells und spiegelt unser Bestreben wider, nicht nur
                            als Unternehmen erfolgreich zu sein, sondern auch als verantwortungsvoller Bürger einen
                            positiven Unterschied zu machen.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhilosophyPage