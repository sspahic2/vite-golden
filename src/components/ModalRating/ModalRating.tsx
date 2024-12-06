import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AppDispatch } from '../../redux/ReduxStore';
import { createReviewPartner, getAllReviews } from '../../redux/slices/ReviewSlice';
import ButtonFull from '../ButtonFull';

interface IModalRatingProps {
    onClose(): void;
}


const ModalRating = (props: IModalRatingProps) => {
    const { onClose } = props;
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id: string }>();
    const partner_id = id;

    const [rating, setRating] = useState<number>(0);
    const [reviewText, setReviewText] = useState<string>('');
    const maxCharacters = 200;

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

    const handleCreateReview = async () => {
        if (rating === 0 || reviewText.trim() === '') {
            toast.error('Bitte bewerten und kommentieren!');
            return;
        }
        if (!partner_id) {
            toast('Partner nicht gefunden.');
            return;
        }

        await dispatch(createReviewPartner({ partner_id, rating, reviewText }));
        await dispatch(getAllReviews(partner_id));
        onClose();
    };





    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            onClick={onClose}
        >
            <ToastContainer />

            <div
                className="relative p-10 w-full max-w-xl max-h-full bg-white rounded-[30px] shadow"
                onClick={(e) => e.stopPropagation()}
            >
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
                        maxLength={maxCharacters}
                        className="cardShadow w-full p-4 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                        placeholder="Schreibe etwas zu deiner Erfahrung mit diesem Profil"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    />
                    <ButtonFull variant='primary' onClick={handleCreateReview} title='Bewertung abschicken' className='mt-10' />
                </div>
            </div>
        </div>
    );
};

export default ModalRating;
