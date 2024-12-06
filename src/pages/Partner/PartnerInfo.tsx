import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import ButtonFull from '../../components/ButtonFull';
import Typography from '../../components/Typography';
import { VITE_BASE_URL } from '../../config/routes';
import { AppDispatch, RootState } from '../../redux/ReduxStore';
import { getUser } from '../../redux/slices/UserSlice';
import { useExtractImage } from '../../utils/hooks';

import defaultImage from '../../assets/images/profilImage.jpg';
import { getAllReviews } from '../../redux/slices/ReviewSlice';
import { calculateAverageRating } from '../../utils/partnerRating';
import ModalSendMessage from '../../components/ModalSendMessage';

interface IPartnerProps {
    className?: string;
    partner_id: string;
}

const PartnerInfo = (props: IPartnerProps) => {
    const { className, partner_id } = props;

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [modalMessage, setModalMessage] = useState<boolean>(false);
    const partner = useSelector((state: RootState) => state.user.userDetails);
    console.log(partner);

    useEffect(() => {
        if (partner_id) {
            dispatch(getUser(partner_id));
            dispatch(getAllReviews(partner_id))
        }
    }, [partner_id, dispatch]);


    const handleOpenModalMessage = () => {
        setModalMessage(true);
    };


    const ratingUser = useSelector((state: RootState) => state.review.reviews)

    const reviews = ratingUser.map((review) => ({
        ...review,
        partner_id: Number(review.partner_id),
    }));

    const averageRatingForPartner = useMemo(() => calculateAverageRating(reviews), [reviews]);
    const partnerAverageRating = averageRatingForPartner[Number(partner_id)] ?? 0;

    const extractImageName = useExtractImage();
    const imageName = extractImageName(partner?.data.imageProfile ?? '');

    const renderStars = (rating: number) => {
        const fullStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return <span className="text-primary text-4xl">{fullStars}{emptyStars}</span>;
    };

    return (
        <div className={`mt-28 xl:ml-8 ${className}`}>
            <div className='cardShadow p-4'>
                <div className="flex justify-center">
                    <img
                        src={imageName ? `${VITE_BASE_URL}/uploads/${imageName}` : defaultImage}
                        alt={imageName}
                        className='rounded-full w-[100px] h-[100px] object-cover border-2 border-primary'
                    />
                </div>
                <div className='flex flex-col items-center p-2'>
                    <Typography size="large">
                        <span>{partner?.data?.nameSurname}</span>
                    </Typography>
                    <Typography size="normal" className='font-bold'>
                        <span>{partner?.data?.businessDescription}</span>
                    </Typography>
                </div>
                <div className='flex flex-col items-left'>
                    <Typography size="normal" className='flex space-x-2 mt-4 items-center'>
                        <i className="ri-global-line text-gray text-2xl" />
                        <span>{partner?.data?.linkWeb}</span>
                    </Typography>
                    <Typography size="normal" className='flex space-x-2 mt-4 items-center'>
                        <i className="ri-phone-fill text-gray text-2xl" />
                        <span>{partner?.data?.telephone}</span>
                    </Typography>
                    <Typography size="normal" className='flex space-x-2 mt-4 items-center'>
                        <i className="ri-mail-fill text-gray text-2xl" />
                        <span>{partner?.data?.email}</span>
                    </Typography>
                </div>
                <div className='mt-4 flex flex-col'>
                    <div>
                        <Typography size="normal" className='font-bold border-b-2 border-primary pb-1'>
                            Social Media
                        </Typography>
                    </div>
                    <div className='space-x-4 mt-2'>
                        <Link to={partner?.data.linkFacebook ?? '/'}>
                            <i className="ri-facebook-box-fill text-gray text-3xl" />
                        </Link>
                        <Link to={partner?.data.linkInstagram ?? '/'}>
                            <i className="ri-instagram-fill text-gray text-3xl" />
                        </Link>
                        <Link to={partner?.data.linkTwitter ?? '/'}>
                            <i className="ri-twitter-fill text-gray text-3xl" />
                        </Link>
                    </div>
                </div>
                <div className='mt-4 flex flex-col'>
                    <div>
                        <Typography size="normal" className='font-bold border-b-2 border-primary pb-1'>
                            Bewertungen
                        </Typography>
                    </div>
                    <div className="flex items-center my-2">
                        <span>{renderStars(Math.round(partnerAverageRating))}</span>
                        <span className="text-md text-secondary mt-1 ml-2 font-bold">
                            {partnerAverageRating > 0 ? partnerAverageRating.toFixed(2) : 'No rating yet'}
                        </span>
                    </div>
                </div>
                <div className='flex flex-col space-y-3 mt-2'>
                    <ButtonFull variant="primary" onClick={handleOpenModalMessage} title="Nachricht sende" />
                    <ButtonFull variant="primary" onClick={() => { }} title="Angebot teilen" />
                    <ButtonFull variant="outline"
                        onClick={() => navigate(`/partner-profile/${partner_id}`)}
                        title="Zum Profil" className='border border-primary'
                    />
                </div>
            </div>


            {modalMessage && (
                <ModalSendMessage onClose={() => setModalMessage(false)} user_id={partner_id} />
            )}
        </div >
    );
};

export default PartnerInfo;
