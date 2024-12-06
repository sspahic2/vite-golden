import { useState } from 'react';
import ButtonFull from '../../../components/ButtonFull';
import ModalUnsubscribe from '../../../components/ModalUnsubscribe';
import Typography from '../../../components/Typography';
import { UNSUBSCRIBE_PATH_SCROLL } from '../../../config/PathForScroll';

const UnsubscribePage = () => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);


    const handleClick = () => {
        setModalOpen(true);
    };

    return (
        <div id={UNSUBSCRIBE_PATH_SCROLL} className='container mx-auto mt-12 mb-20'>
            <div className='flex flex-col'>
                <Typography size="large">
                    Startseite / Abo beenden
                </Typography>
                <div className='flex flex-col max-w-xl text-center mx-auto'>
                    <Typography size="big" className='mt-10'>
                        <span className='border-b-2 border-primary pb-1'>
                            Abo beenden
                        </span>
                    </Typography>
                    <Typography size="normal" className='mt-10'>
                        Wir bedauern, dass Sie Ihr Abonnement bei Goldene Seiten beenden möchten.
                        Auf dieser Seite finden Sie alle notwendigen Informationen
                        und Schritte, um den Kündigungsprozess abzuschließen.
                    </Typography>

                    <Typography size="normal" className='mt-10 font-bold'>
                        Haben Sie Fragen oder benötigen Sie Unterstützung?
                    </Typography>
                    <Typography size="normal" className='mt-10'>
                        Unser Kundenservice steht Ihnen bei Fragen zur Kündigung oder bei weiteren
                        Anliegen gerne zur Verfügung. Kontaktieren Sie
                        uns über <span className='font-bold'>info@goldeneseiten.de</span> oder telefonisch unter
                        <span className='font-bold'> +49 (0) 123 456789</span>,
                        und wir helfen Ihnen schnellstmöglich weiter.
                    </Typography>
                    <Typography size="normal" className='mt-10'>
                        Wir bedanken uns für Ihre bisherige Nutzung von Goldene Seiten und hoffen,
                        dass wir Sie in der Zukunft wieder begrüßen dürfen.
                    </Typography>
                    <ButtonFull variant="primary" onClick={handleClick} title="Jetzt Abo beenden" className='mt-8' />
                </div>

                {modalOpen && (
                    <ModalUnsubscribe onClose={() => setModalOpen(false)} />
                )}
            </div>
        </div >
    )
}

export default UnsubscribePage