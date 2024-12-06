import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import defaultImage from '../../assets/images/profilImage.jpg';
import ButtonFull from '../../components/ButtonFull';
import ModalRating from '../../components/ModalRating';
import ModalSendMessage from '../../components/ModalSendMessage';
import Typography from '../../components/Typography';
import { VITE_BASE_URL } from '../../config/routes';
import { AppDispatch, RootState } from '../../redux/ReduxStore';
import { getUser } from '../../redux/slices/UserSlice';
import { useExtractImage } from '../../utils/hooks';
import { calculateAverageRating } from '../../utils/partnerRating';
import { PARTNER_PROFILE_PATH_SCROLL } from '../../config/PathForScroll';




const PartnerProfile = () => {
    const { id } = useParams<{ id: string }>();
    const [modalRating, setModalRating] = useState<boolean>(false);
    const [modalMessage, setModalMessage] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>();
    const { hash } = useLocation();
    const extractImageName = useExtractImage();



    useEffect(() => {
        if (id) {
            dispatch(getUser(id));
        }
    }, [id, dispatch]);

    useEffect(() => {
        if (hash === `#${PARTNER_PROFILE_PATH_SCROLL}`) {
            const element = document.getElementById(PARTNER_PROFILE_PATH_SCROLL);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);


    const ratingUser = useSelector((state: RootState) => state.review.reviews)

    const userDetails = useSelector((state: RootState) => state.user.userDetails)


    if (!userDetails) {
        return <div>Error: No content found.</div>;
    }
    const { nameSurname, businessDescription, shortDescription, linkWeb, telephone, email, imageProfile } = userDetails.data;



    const reviews = ratingUser.map((review) => ({
        ...review,
        partner_id: Number(review.partner_id),
    }));
    const averageRatingForPartner = calculateAverageRating(reviews);
    const partnerAverageRating = averageRatingForPartner[Number(id)] ?? 0;



    if (!userDetails) {
        return <div>Error: No content found.</div>;
    }

    const imageName = extractImageName(imageProfile ?? '');

    const renderStars = (rating: number) => {
        const fullStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return <span className="text-primary text-4xl">{fullStars}{emptyStars}</span>;
    };

    const handleOpenModalRating = () => {
        setModalRating(true);
    };

    const handleOpenModalMessage = () => {
        setModalMessage(true);
    };


    return (
        <div id={PARTNER_PROFILE_PATH_SCROLL} className='mt-10 mb-10 flex flex-col'>
            <div className="relative bgLinearProfilePartner">
                <div className='container mx-auto'>
                    <Typography size="large">Startseite / Anbieter</Typography>
                </div>
                <div className="flex flex-col items-center p-4">
                    <img
                        src={imageName ? `${VITE_BASE_URL}/uploads\\${imageName}` : defaultImage}
                        alt={imageName}
                        className="rounded-full w-[200px] h-[200px] object-cover border-2 border-primary"
                    />
                    <Typography size="large">{nameSurname}</Typography>
                    <Typography size="normal" className="font-bold">{businessDescription}</Typography>
                    <div className="flex items-center my-2">
                        <span>{renderStars(Math.round(partnerAverageRating))}</span>
                        <span className="text-md text-secondary mt-1 ml-2 font-bold">
                            {partnerAverageRating !== undefined ? partnerAverageRating.toFixed(2) : 'No rating yet'}
                        </span>
                    </div>
                </div>
            </div>

            <div className='flex flex-row container mx-auto mt-4'>
                <div className='flex flex-row'>
                    <div className='flex flex-col'>
                        <Typography size="normal">
                            <span className='font-bold border-b-2 border-primary pb-1'>
                                Kontaktdaten
                            </span>
                        </Typography>
                        <Typography size="normal" className='flex space-x-2 mt-4 items-center'>
                            <i className="ri-global-line text-gray text-2xl" />
                            <span>{linkWeb}</span>
                        </Typography>
                        <Typography size="normal" className='flex space-x-2 mt-4 items-center'>
                            <i className="ri-phone-fill text-gray text-2xl" />
                            <span>{telephone}</span>
                        </Typography>
                        <Typography size="normal" className='flex space-x-2 mt-4 items-center'>
                            <i className="ri-mail-fill text-gray text-2xl" />
                            <span>{email}</span>
                        </Typography>

                        <div className='space-y-2 mt-2'>
                            <ButtonFull variant="primary" onClick={handleOpenModalMessage} title="Nachricht sende" />
                            <ButtonFull variant="primary" onClick={handleOpenModalRating} title="Bewerten profile" />
                        </div>
                    </div>
                </div>

                {modalRating && (
                    <ModalRating onClose={() => setModalRating(false)} />
                )}

                {modalMessage && (
                    <ModalSendMessage onClose={() => setModalMessage(false)} user_id={id!} />
                )}

                <div className='flex flex-row'>
                    <div className='flex flex-col ml-32'>
                        <Typography size="normal">
                            <span className='font-bold border-b-2 border-primary pb-1'>
                                Über uns
                            </span>
                        </Typography>
                        <Typography size="normal" className='mt-4'>
                            {shortDescription}
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerProfile;
