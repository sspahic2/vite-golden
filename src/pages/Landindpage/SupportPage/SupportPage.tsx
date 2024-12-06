import ButtonFull from "../../../components/ButtonFull"
import Typography from "../../../components/Typography"
import { SUPPORT_PATH_SCROLL } from "../../../config/PathForScroll"

const SupportPage = () => {
    return (
        <div id={SUPPORT_PATH_SCROLL} className='container mx-auto mt-12 mb-20 flex flex-col'>
            <div className='flex flex-col'>
                <Typography size="large">
                    Startseite / FAQ & Kontakt
                </Typography>

                <div className='flex flex-col lg:flex-row mt-10 space-x-10'>
                    <div className='w-1/2 flex flex-col'>
                        <Typography size="big" className='mt-10'>
                            <span className='border-b-2 border-primary pb-1'>
                                Kontakt
                            </span>
                        </Typography>

                        <Typography size="normal" className='mt-10'>
                            Herzlich willkommen auf unserer Kontaktseite! Bei Goldene Seiten legen
                            wir großen Wert auf eine enge und transparente Kommunikation mit
                            unseren Kunden und Partnern. Hier finden Sie alle notwendigen
                            Informationen, um mit uns in Verbindung zu treten, sei es für
                            Fragen, Anregungen oder Unterstützung.
                        </Typography>

                        <Typography size="normal" className='mt-10 font-bold'>
                            So erreichen Sie uns:
                        </Typography>
                        <Typography size="normal">
                            Ob Sie Fragen zu unseren Dienstleistungen haben, Unterstützung
                            benötigen oder einfach nur mehr über unsere Angebote erfahren möchten
                            – unser engagiertes Team steht Ihnen gerne zur Verfügung. Nutzen Sie die
                            folgenden Kontaktmöglichkeiten, um uns schnell und unkompliziert zu
                            erreichen.
                        </Typography>

                        <Typography size="normal" className='mt-10 font-bold'>
                            Kontaktieren Sie uns
                        </Typography>
                        <Typography size="normal">
                            Wir freuen uns darauf, von Ihnen zu hören und Ihnen weiterzuhelfen.
                            Zögern Sie nicht, uns zu kontaktieren – wir sind hier, um Ihre Anliegen zu
                            klären und Sie bestmöglich zu unterstützen.
                        </Typography>

                        <Typography size="normal" className='flex space-x-2 mt-4 items-center'>
                            <i className="ri-phone-fill text-2xl" />
                            <span>Telefon: +49 (0) 123 456789</span>
                        </Typography>
                        <Typography size="normal" className='flex space-x-2 mt-2 items-center' >
                            <i className="ri-mail-fill text-2xl" />
                            <span>E-Mail: info@goldeneseiten.de</span>
                        </Typography>
                    </div>

                    <div className='mt-10 lg:w-1/2 cardShadow flex flex-col px-20 py-10 space-y-10 bg-[#FFF4E8]'>
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full p-2.5 inputBorderNotShadow"
                            placeholder="Ihre Name"
                            required />

                        <input
                            type="text"
                            name="e-mail"
                            id="e-mail"
                            className="block w-full p-2.5 inputBorderNotShadow"
                            placeholder="Ihre E-Mail Adresse"
                            required />

                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="block w-full p-2.5 inputBorderNotShadow"
                            placeholder="Betreff"
                            required />

                        <textarea
                            id="comment"
                            rows={8}
                            className="inputBorderNotShadow w-full p-4 text-sm text-gray-900 bg-white"
                            placeholder="Bitte geben Sie hier Ihre Nachricht ein."
                            required
                        />
                        <ButtonFull variant='primary' onClick={() => { }} title='Absenden' />
                    </div>
                </div>

                <div className="flex flex-col mt-10">
                    <Typography size="big" className='mt-10'>
                        <span className='border-b-2 border-primary pb-1'>
                            FAQ
                        </span>
                    </Typography>

                    <Typography size="normal" className='mt-10'>
                        Willkommen auf unserer FAQ-Seite! Hier finden Sie Antworten auf die häufigsten Fragen zu Goldene Seiten. Unser Ziel ist es, Ihnen schnelle und präzise
                        Informationen zu bieten, damit Sie alle relevanten Details zu unseren Dienstleistungen und Prozessen verstehen. Falls Ihre Frage hier nicht
                        beantwortet wird, zögern Sie nicht, uns direkt zu kontaktieren.
                    </Typography>

                    <Typography size="normal" className='mt-10 supportButtonFill font-bold'>
                        <span>Wie kann ich mein Abonnement kündigen?</span>
                        <span><i className="ri-arrow-down-s-line" /></span>
                    </Typography>

                    <Typography size="normal" className='px-10 py-4'>
                        Um Ihr Abonnement zu kündigen, besuchen Sie bitte unsere Seite "Abo beenden" und füllen Sie das Kündigungsformular aus. Nach dem
                        Absenden des Formulars erhalten Sie eine Bestätigungsmail. Ihre Kündigung wird zum Ende des aktuellen Abrechnungszeitraums wirksam.
                    </Typography>

                    <Typography size="normal" className='mt-4 supportButtonOutline font-bold'>
                        <span>Was ist im Anbieter-Paket enthalten?</span>
                        <span><i className="ri-arrow-down-s-line text-primary" /></span>
                    </Typography>

                    <Typography size="normal" className='mt-4 supportButtonOutline font-bold'>
                        <span>Was sind die Vorteile des Anbieter Gold-Pakets?</span>
                        <span><i className="ri-arrow-down-s-line text-primary" /></span>
                    </Typography>

                    <Typography size="normal" className='mt-4 supportButtonOutline font-bold'>
                        <span>Wie kann ich Unterstützung bei technischen Problemen erhalten?</span>
                        <span><i className="ri-arrow-down-s-line text-primary" /></span>
                    </Typography>

                    <Typography size="normal" className='mt-4 supportButtonOutline font-bold'>
                        <span>Wie kann ich mein öffentliches Profil bearbeiten?</span>
                        <span><i className="ri-arrow-down-s-line text-primary" /></span>
                    </Typography>

                    <Typography size="normal" className='mt-4 supportButtonOutline font-bold'>
                        <span>Wie lange dauert es, bis meine Änderungen wirksam werden?</span>
                        <span><i className="ri-arrow-down-s-line text-primary" /></span>
                    </Typography>
                </div>
            </div>
        </div>
    )
}

export default SupportPage