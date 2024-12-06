import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import calendar from '../../../assets/icons/calendar.png';
import { OFFER_PATH_SCROLL } from '../../../config/PathForScroll';
import { AppDispatch, RootState } from '../../../redux/ReduxStore';
import { createOrRemoveFavorite, getAllFavorites } from '../../../redux/slices/FavoriteSlice';
import { getOfferDetails } from '../../../redux/slices/OfferSlice';
import ButtonCustom from '../../ButtonCustom';
import ButtonFull from '../../ButtonFull';
import Typography from '../../Typography';
import { VITE_BASE_URL } from '../../../config/routes';
import { useExtractImage } from '../../../utils/hooks';
import defaultImage from '../../../assets/images/massage.jpg';
import ModalSendMessage from '../../ModalSendMessage';


const OfferDetails = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { id } = useParams<{ id: string }>();
    const [modalMessage, setModalMessage] = useState<boolean>(false);
    const offerDetails = useSelector((state: RootState) => state.offer.offerDetails);
    const extractImageName = useExtractImage();
    const favorites = useSelector((state: RootState) => state.favorite.favorites);

    useEffect(() => {
        if (id) {
            dispatch(getOfferDetails(id));
            dispatch(getAllFavorites());
        }
    }, [dispatch, id]);

    if (!offerDetails) {
        return <div>Error: No content found.</div>;
    }

    const { name, image, date, discount, price, originalPrice, location, description, user_id } = offerDetails.data;
    const isFavorite = favorites.some(favorite => favorite.offer_id === offerDetails.data.id && favorite.isFavorite);
    const imageName = extractImageName(image ?? '');

    const handleOpenModalMessage = () => {
        setModalMessage(true);
    };

    const handleAddToFavorite = async () => {
        await dispatch(createOrRemoveFavorite({ offer_id: id }));
        await dispatch(getAllFavorites());
    };

    return (
        <div id={OFFER_PATH_SCROLL} className='mt-10 mb-10'>
            <Typography size="large" >
                Startseite / {name}
            </Typography>

            <div className='cardShadow mt-10 p-4 xl:max-w-5xl'>
                <div>

                    <img
                        src={imageName ? `${VITE_BASE_URL}/uploads\\${imageName}` : defaultImage}
                        className='rounded-[20px] w-[960px] h-[525px] object-cover'
                    />
                </div>
                <div className='flex justify-between mt-4 items-center'>
                    <Typography size="normal" className='flex flex-row'>
                        <img src={calendar} alt={calendar}
                            className='w-[20px] h-[20px] mr-2'
                        />
                        {date}
                    </Typography>
                    <Typography size="normal" className='mt-4'>
                        Anzeigennummer: {id}
                    </Typography>
                </div>
                <Typography size="big">
                    {name}
                </Typography>
                {/* <div className='flex flex-col sm:flex-row space-y-2 sm:space-x-8 mt-4 mb-4'> */}
                <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-8 mt-4 mb-8'>
                    <ButtonCustom variant="primary" onClick={() => { }} title="Einzelsitzung" />
                    <ButtonCustom variant="primary" onClick={() => { }} title="Workshop" />
                    <ButtonCustom variant="primary" onClick={() => { }} title="Coaching" />
                    <ButtonCustom variant="primary" onClick={() => { }} title="Seminar" />
                </div>
                {discount !== 0 && (
                    <>
                        <Typography size="normal" >
                            Rabattaktion:
                            <span className='text-primary font-bold ml-2'>-{discount}%</span>
                        </Typography>
                    </>
                )}
                <div className='relative mt-4 flex flex-row items-center'>
                    <div className='relative flex items-center'>
                        <span className='bg-primary -ml-4 text-white p-2 rounded-r-[20px] text-2xl'>
                            {price}€/h
                        </span>
                    </div>
                    {discount !== 0 && (
                        <>
                            <div className='ml-4'>
                                <span className='text-2xl text-gray line-through'>{originalPrice}</span>
                            </div>
                        </>
                    )}

                </div>
                <div className='flex space-x-2 mt-4'>
                    <i className="ri-map-pin-fill" />
                    <p>{location}</p>
                </div>
                <div className="border-b border-[#C0C0C0] mt-5  max-w-full" />
                <div className='mt-4 flex flex-col' >
                    <Typography size="normal" >
                        <span className='font-bold border-b-2 border-primary pb-1'>
                            Beschreibung
                        </span>
                    </Typography>
                    <Typography size="normal" className='mt-3'>
                        {description}
                    </Typography>
                </div>
                <div className='flex flex-row my-8 items-center text-primary'>
                    <ButtonFull variant="primary" onClick={handleOpenModalMessage} title="Jetzt Anfrage senden" className='w-[250px]' />

                    <i className={`ri-heart-${isFavorite ? '3-fill' : '3-line'} ml-4 text-2xl xl:text-5xl cursor-pointer`}
                        onClick={handleAddToFavorite}
                    />

                </div>
            </div>

            {modalMessage && (
                <ModalSendMessage onClose={() => setModalMessage(false)} offer_id={id} user_id={user_id} />
            )}



        </div >
    );
};

export default OfferDetails;








