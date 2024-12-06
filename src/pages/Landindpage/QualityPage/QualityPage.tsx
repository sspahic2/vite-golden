import qualityPhoto from '../../../assets/images/qualityPhoto.jpg'
import Typography from '../../../components/Typography'
import { QUALITY_PATH_SCROLL } from '../../../config/PathForScroll'

const QualityPage = () => {
    return (
        <div id={QUALITY_PATH_SCROLL} className='container mx-auto mt-12 mb-20 flex flex-col'>
            <div className='flex flex-col'>
                <Typography size="large">
                    Startseite / Qualitätssiegel
                </Typography>
                <Typography size="big" className='mt-10'>
                    <span className='border-b-2 border-primary pb-1'>
                        Qualitätssiegel
                    </span>
                </Typography>

                <div className='flex flex-row mt-10 space-x-8'>
                    <div className='w-3/5 flex flex-col'>
                        <Typography size="normal">
                            Bei Goldene Seite ist unser Qualitätsversprechen mehr als nur ein Versprechen – es
                            ist das Fundament unseres Schaffens. Unser Qualitätssiegel steht für höchste
                            Standards in jedem Aspekt unserer Arbeit. Wir setzen uns dafür ein, exzellente
                            Ergebnisse zu liefern und gewährleisten, dass jede Dienstleistung oder jedes
                            Produkt unseren strengen Qualitätskriterien entspricht.
                        </Typography>
                        <Typography size="normal" className='mt-10'>
                            Unser Ziel ist es, Ihnen
                            nicht nur erstklassige Lösungen zu bieten, sondern Ihre Erwartungen zu übertreffen.
                            Unser Ansatz zur Qualitätssicherung beginnt bereits in der Planungsphase. Wir
                            analysieren Ihre Anforderungen gründlich und erstellen maßgeschneiderte
                            Konzepte, die auf bewährten Methoden und innovativen Techniken basieren. Durch
                            sorgfältige Planung und präzise Umsetzung stellen wir sicher, dass jeder Schritt
                            unseres Prozesses optimal auf Ihre Bedürfnisse abgestimmt ist.
                        </Typography>
                        <Typography size="normal" className='mt-10'>
                            Wir arbeiten eng mit erfahrenen Fachleuten zusammen, die ihre Expertise in den
                            Bereichen Technik, Design und Kundenservice einbringen. Unser Team besteht aus
                            hochqualifizierten Spezialisten, die sich kontinuierlich weiterbilden und immer auf
                            dem neuesten Stand der Branche bleiben. Diese Expertise ermöglicht es uns,
                            Lösungen anzubieten, die sowohl innovativ als auch nachhaltig sind.
                        </Typography>
                    </div>

                    <div className='w-2/5'>
                        <img src={qualityPhoto} alt={qualityPhoto} className='rounded-[20px] w-full h-full object-cover' />
                    </div>
                </div>

                <div className='mt-10 flex flex-col'>
                    <Typography size="normal" className='mt-10'>
                        Um sicherzustellen, dass unsere Arbeit den höchsten Standards entspricht, führen wir regelmäßige Qualitätskontrollen und Tests durch. Diese Maßnahmen
                        garantieren, dass unsere Produkte und Dienstleistungen nicht nur den gesetzlichen Anforderungen entsprechen, sondern auch unseren eigenen hohen
                        Ansprüchen genügen. Wir setzen modernste Technologien und Methoden ein, um Fehler zu minimieren und die Qualität kontinuierlich zu verbessern.
                    </Typography>
                    <Typography size="normal" className='mt-10'>
                        Unsere Kunden stehen im Mittelpunkt unserer Qualitätsstrategie. Ihr Feedback und Ihre Zufriedenheit sind entscheidend für unsere Arbeit. Wir legen großen
                        Wert auf transparente Kommunikation und enge Zusammenarbeit, um sicherzustellen, dass Ihre Wünsche und Anforderungen vollständig erfüllt werden. Ihr
                        Erfolg ist unser Erfolg, und wir sind bestrebt, eine langfristige und vertrauensvolle Partnerschaft aufzubauen.
                    </Typography>
                </div>


                <div className='flex flex-row mt-10 space-x-8'>
                    <div className='w-2/5'>
                        <img src={qualityPhoto} alt={qualityPhoto} className='rounded-[20px] w-full h-full object-cover' />
                    </div>
                    <div className='w-3/5 flex flex-col'>
                        <Typography size="normal">
                            Bei Goldene Seite ist unser Qualitätsversprechen mehr als nur ein Versprechen – es
                            ist das Fundament unseres Schaffens. Unser Qualitätssiegel steht für höchste
                            Standards in jedem Aspekt unserer Arbeit. Wir setzen uns dafür ein, exzellente
                            Ergebnisse zu liefern und gewährleisten, dass jede Dienstleistung oder jedes
                            Produkt unseren strengen Qualitätskriterien entspricht.
                        </Typography>
                        <Typography size="normal" className='mt-10'>
                            Unser Ziel ist es, Ihnen
                            nicht nur erstklassige Lösungen zu bieten, sondern Ihre Erwartungen zu übertreffen.
                            Unser Ansatz zur Qualitätssicherung beginnt bereits in der Planungsphase. Wir
                            analysieren Ihre Anforderungen gründlich und erstellen maßgeschneiderte
                            Konzepte, die auf bewährten Methoden und innovativen Techniken basieren. Durch
                            sorgfältige Planung und präzise Umsetzung stellen wir sicher, dass jeder Schritt
                            unseres Prozesses optimal auf Ihre Bedürfnisse abgestimmt ist.
                        </Typography>
                        <Typography size="normal" className='mt-10'>
                            Wir arbeiten eng mit erfahrenen Fachleuten zusammen, die ihre Expertise in den
                            Bereichen Technik, Design und Kundenservice einbringen. Unser Team besteht aus
                            hochqualifizierten Spezialisten, die sich kontinuierlich weiterbilden und immer auf
                            dem neuesten Stand der Branche bleiben. Diese Expertise ermöglicht es uns,
                            Lösungen anzubieten, die sowohl innovativ als auch nachhaltig sind.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QualityPage