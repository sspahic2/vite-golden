import Typography from '../../../components/Typography'
import { PRICE_PATH_SCROLL } from '../../../config/PathForScroll'
import PartnerPackageGold from '../../Partner/components/PartnerPackageGold'
import PartnerPackageNormal from '../../Partner/components/PartnerPackageNormal'

const PricePage = () => {
    return (
        <div id={PRICE_PATH_SCROLL} className='container mx-auto mt-12 mb-20 flex flex-col'>
            <div className='flex flex-col'>
                <Typography size="large">
                    Startseite / Preise
                </Typography>
                <Typography size="big" className='mt-10'>
                    <span className='border-b-2 border-primary pb-1'>
                        Preise
                    </span>
                </Typography>


                <Typography size="normal" className='mt-10'>
                    Willkommen auf unserer Preisseite! Hier finden Sie die Informationen zu unseren beiden exklusiven Paketen, die Ihnen helfen, Ihre Reichweite zu erhöhen und
                    von unseren umfassenden Funktionen zu profitieren. Wählen Sie das Paket, das am besten zu Ihren Bedürfnissen passt, und nutzen Sie die Vorteile unserer
                    Plattform optimal.
                </Typography>
                <Typography size="normal" className='mt-10 font-bold'>
                    Anbieter
                </Typography>
                <Typography size="normal">
                    Schalten Sie die Anbieter-Funktion frei und erhöhen Sie effektiv Ihre Reichweite. Unser Anbieter-Paket bietet Ihnen eine kostengünstige Möglichkeit, sich
                    online zu präsentieren und mit potenziellen Kunden in Kontakt zu treten.
                </Typography>
                <Typography size="normal" className='mt-10 font-bold'>
                    Anbieter Gold
                </Typography>
                <Typography size="normal">
                    Nutzen Sie das volle Potential unserer Plattform mit dem Anbieter Gold-Paket. Dieses umfassende Paket bietet Ihnen alle Funktionen des Anbieter-Pakets
                    sowie zusätzliche Vorteile für noch mehr Sichtbarkeit und Unterstützung.
                </Typography>

                <div className='flex flex-col  space-y-10 md:space-y-0 md:flex-row mt-20 items-center md:space-x-12 text-center justify-center'>
                    <PartnerPackageNormal />
                    <PartnerPackageGold />
                </div>

            </div>
        </div>
    )
}

export default PricePage