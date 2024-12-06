import qualityPhoto from '../../../assets/images/qualityPhoto.jpg'
import Typography from "../../../components/Typography"
import { MOTIVATION_PATH_SCROLL } from '../../../config/PathForScroll'

const MotivationPage = () => {
    return (
        <div id={MOTIVATION_PATH_SCROLL} className='container mx-auto mt-12 mb-20 flex flex-col'>
            <div className='flex flex-col'>
                <Typography size="large">
                    Startseite / Unsere Motivation
                </Typography>
                <Typography size="big" className='mt-10'>
                    <span className='border-b-2 border-primary pb-1'>
                        Unsere Motivation
                    </span>
                </Typography>

                <div className='flex flex-row mt-14 space-x-12 items-center'>
                    <div className='w-2/5'>
                        <img src={qualityPhoto} alt={qualityPhoto} className='rounded-[20px] w-full h-full object-cover' />
                    </div>
                    <div className='w-3/5 flex flex-col'>
                        <Typography size="normal">
                            Bei Goldene Seite sind wir durch eine tief verwurzelte Leidenschaft für Innovation und
                            Exzellenz motiviert. Unser Ziel ist es, außergewöhnliche Ergebnisse zu erzielen, die unsere
                            Kunden nicht nur zufriedenstellen, sondern begeistern. Wir streben danach, stets die besten
                            Lösungen zu bieten, indem wir modernste Technologien nutzen und kontinuierlich nach
                            Möglichkeiten suchen, unsere Arbeitsweise zu verbessern. Unser Team ist ständig auf der
                            Suche nach neuen Ideen und Trends, um sicherzustellen, dass wir immer am Puls der Zeit
                            bleiben und maßgeschneiderte Lösungen für jede Herausforderung bieten können.
                        </Typography>
                    </div>
                </div>

                <div className='flex flex-row mt-14 space-x-12 items-center'>
                    <div className='w-3/5 flex flex-col'>
                        <Typography size="normal">
                            Unsere Motivation speist sich aus dem Drang, Herausforderungen kreativ zu begegnen und
                            über den Tellerrand hinauszublicken. Wir sehen jede Aufgabe als Chance, Neues zu lernen und
                            unsere Fähigkeiten weiterzuentwickeln. Dieses Streben nach Wissen und Innovation treibt uns
                            an, kontinuierlich an der Spitze der Branche zu bleiben und stets aktuelle, maßgeschneiderte
                            Lösungen anzubieten. Durch kontinuierliche Weiterbildung und den Austausch von
                            Erfahrungen innerhalb unseres Teams sind wir in der Lage, die besten und effektivsten
                            Ansätze für unsere Projekte zu entwickeln.
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
                            Vor allem aber sind wir durch das Vertrauen und die Unterstützung unserer Kunden motiviert.
                            Ihre Zufriedenheit und ihr Erfolg sind für uns die größte Belohnung. Wir sind bestrebt, jede
                            Partnerschaft durch Engagement, Transparenz und hervorragenden Service zu stärken und
                            gemeinsam mit unseren Kunden langfristige Erfolge zu erzielen. Unser Erfolg basiert auf der
                            Fähigkeit, enge Beziehungen aufzubauen und ein tiefes Verständnis für die Bedürfnisse und
                            Ziele unserer Kunden zu entwickeln. So stellen wir sicher, dass wir gemeinsam wachsen und
                            Erfolge feiern können.
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MotivationPage