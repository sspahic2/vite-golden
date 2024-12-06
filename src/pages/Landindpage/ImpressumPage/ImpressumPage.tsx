import Typography from '../../../components/Typography'
import { IMPRESSUM_PATH_SCROLL } from '../../../config/PathForScroll'

const ImpressumPage = () => {
    return (
        <div id={IMPRESSUM_PATH_SCROLL} className='flex flex-col container mx-auto my-20'>
            <Typography size="normal" >Verantwortlich für den Inhalt gemäß § 5 TMG:</Typography>
            <Typography size="normal" className='mt-4'>Goldene Seiten GmbH</Typography>
            <Typography size="normal">Musterstraße 123</Typography>
            <Typography size="normal">12345 Musterstadt</Typography>

            <Typography size="normal" className='mt-4'>Vertreten durch:</Typography>
            <Typography size="normal">Max Mustermann (Geschäftsführer)</Typography>

            <Typography size="normal" className='mt-4'>Kontakt:</Typography>
            <Typography size="normal">Telefon: +49 (0) 123 456789</Typography>
            <Typography size="normal">E-Mail: info@goldeneseiten.de</Typography>

            <Typography size="normal" className='mt-4'>Registereintrag:</Typography>
            <Typography size="normal">Registergericht: Amtsgericht Musterstadt</Typography>
            <Typography size="normal">Registernummer: HRB 12345</Typography>

            <Typography size="normal" className='mt-4'>Umsatzsteuer-ID:</Typography>
            <Typography size="normal">Umsatzsteuer-Identifikationsnummer gemäß §27a Umsatzsteuergesetz:</Typography>
            <Typography size="normal">DE123456789</Typography>

            <Typography size="normal" className='mt-4'>Haftungshinweis:</Typography>
            <Typography size="normal">Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.</Typography>


            <Typography size="normal" className='mt-4'>Design und Umsetzung der Website:</Typography>
            <Typography size="normal">Musterdesign Agentur GmbH</Typography>
            <Typography size="normal">Beispielstraße 456</Typography>
            <Typography size="normal">54321 Musterstadt</Typography>

            <Typography size="normal" className='mt-4'>Bitte beachten Sie, dass die oben genannten Informationen nur ein Muster sind und je nach den rechtlichen Anforderungen in Ihrem Land oder Ihrer Region angepasst werden müssen. Es wird empfohlen, rechtliche Beratung in Anspruch zu nehmen, um sicherzustellen, dass das Impressum den geltenden Gesetzen entspricht.</Typography>


        </div>
    )
}

export default ImpressumPage