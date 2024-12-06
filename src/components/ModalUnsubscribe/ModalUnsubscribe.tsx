import React from 'react';
import ButtonCustom from '../ButtonCustom';
import Typography from '../Typography';

interface IModalUnsubscribe {
    onClose(): void;
}


const ModalUnsubscribe: React.FC<IModalUnsubscribe> = ({ onClose }) => {

    const handleSubmit = () => {
        // onSubmitRating(rating);
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div className="flex flex-col relative p-10 w-full max-w-2xl max-h-full bg-white rounded-[30px] shadow text-center">
                <Typography size="normal" className='mt-4 font-bold'>
                    Sind Sie sicher, dass Sie Ihr Abonnement beenden möchten?
                </Typography>

                <Typography size="normal" className='mt-4'>
                    Wenn Sie auf „Jetzt Abo beenden“ klicken, wird Ihr Abonnement bei Goldene Seiten
                    zum Ende des aktuellen Abrechnungszeitraums gekündigt. Alle
                    zugriffsberechtigten Funktionen und Vorteile stehen Ihnen bis
                    dahin weiterhin zur Verfügung.
                </Typography>

                <Typography size="normal" className='mt-4'>
                    Bitte beachten Sie, dass Sie nach der Kündigung keinen Zugriff mehr auf die
                    kostenpflichtigen Dienste haben werden. Wenn Sie sich sicher sind, dass Sie
                    fortfahren möchten, bestätigen Sie bitte Ihre Entscheidung.
                </Typography>
                <div className='flex flex-row justify-center space-x-8'>
                    <ButtonCustom variant='danger' onClick={handleSubmit} title='Ja, Abo beenden' className='mt-10' />
                    <ButtonCustom variant='primary' onClick={onClose} title='Nein, zurück zur Seite' className='mt-10' />
                </div>
            </div>
        </div>
    )
}

export default ModalUnsubscribe