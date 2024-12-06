import { useState } from 'react';
import ButtonFull from '../../../components/ButtonFull';
import Typography from '../../../components/Typography';
import { FEEDBACK_PATH_SCROLL } from '../../../config/PathForScroll';

const FeedbackPage = () => {

    const [rating, setRating] = useState<number>(0);

    const renderStars = (index: number) => {
        return (
            <span className={index < rating ? 'text-primary text-4xl' : 'text-gray text-4xl'}>
                {index < rating ? '★' : '☆'}
            </span>
        );
    };

    const handleStarClick = (value: number) => {
        if (value >= 1 && value <= 5) {
            setRating(value);
        }
    };
    return (
        <>
            <div id={FEEDBACK_PATH_SCROLL} className='container mx-auto mt-12 mb-20 flex flex-col'>
                <div className='flex flex-col'>
                    <Typography size="large">
                        Startseite / Feedback
                    </Typography>
                    <Typography size="big" className='mt-10'>
                        <span className='border-b-2 border-primary pb-1'>
                            Feedback
                        </span>
                    </Typography>
                    <Typography size="normal" className='mt-10'>
                        Wir bei Goldene Seiten legen großen Wert auf die Meinung und das Feedback unserer Kunden und Partner. Ihre Rückmeldungen sind für uns von unschätzbarem
                        Wert, da sie uns helfen, unsere Dienstleistungen kontinuierlich zu verbessern und sicherzustellen, dass wir Ihre Erwartungen erfüllen oder sogar übertreffen.
                    </Typography>
                    <Typography size="normal" className='mt-10 font-bold'>
                        Ihre Meinung zählt
                    </Typography>
                    <Typography size="normal">
                        Ob es sich um eine detaillierte Bewertung eines abgeschlossenen Projekts handelt oder um allgemeine Anmerkungen zu unserem Service – wir möchten von
                        Ihnen hören. Ihre Erfahrungen und Eindrücke geben uns wertvolle Einblicke und ermöglichen es uns, unsere Arbeitsweise weiterzuentwickeln.
                        Wir laden Sie ein, Ihre Gedanken und Vorschläge mit uns zu teilen, damit wir gemeinsam an der Verbesserung unserer Angebote arbeiten können.
                    </Typography>

                    <div className='cardShadow flex flex-row justify-around items-center mt-10 p-10'>
                        <div className='w-1/3 space-y-8'>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="block w-full p-2.5 inputBorderNotShadow"
                                placeholder="Ihre Name"
                                required />

                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="block w-full p-2.5 inputBorderNotShadow"
                                placeholder="Ihre E-Mail Adresse"
                                required />
                        </div>
                        <div className='w-1/3'>
                            <div className='my-4'>
                                <div className="flex justify-center my-4">
                                    {Array.from({ length: 5 }, (_, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleStarClick(index + 1)}
                                            className="cursor-pointer"
                                        >
                                            {renderStars(index)}
                                        </div>
                                    ))}
                                </div>
                                <textarea
                                    id="comment"
                                    rows={8}
                                    className="inputBorderNotShadow w-full p-4 text-sm text-gray-900 bg-white"
                                    placeholder="Schreiben Sie etwas über Ihre Erfahrung mit Goldene Seiten"
                                    required
                                />
                                <ButtonFull variant='primary' onClick={() => { }} title='Feedback abschicken' className='mt-10' />
                            </div>
                        </div>
                    </div>



                </div>

            </div>
            <div className='bg-bgReviews mt-10 pb-10'>
                <div className='container mx-auto pt-4'>
                    <Typography size="normal" >
                        <span className='border-b-2 border-primary pb-1'>
                            Feedback
                        </span>
                    </Typography>



                    {/* <CardReviews data={customersReviews} /> */}
                </div>
            </div>
        </>

    )
}

export default FeedbackPage