import { Link, useNavigate } from 'react-router-dom';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'remixicon/fonts/remixicon.css';
import defaultImage from '../../assets/images/massage.jpg';
import { PARTNER_PROFILE_PATH_SCROLL } from '../../config/PathForScroll';
import { VITE_BASE_URL } from '../../config/routes';
import { AppDispatch, RootState } from '../../redux/ReduxStore';
import { createOrRemoveFavoritePartner, getAllFavorites } from '../../redux/slices/FavoriteSlice';
import { useExtractImage } from '../../utils/hooks';
import ButtonFull from '../ButtonFull';

interface IPartnerProps {
    id: string;
    partner_id: string;
    imageProfile: string;
    nameSurname: string;
    city: string;
    shortDescription: string;
    average_rating: number;
    isFavorite?: boolean;
}

interface ICardUsersProps {
    data: IPartnerProps[];
}

const CardUsers = (props: ICardUsersProps) => {
    const { data } = props;
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();
    const favorites = useSelector((state: RootState) => state.favorite.favorites);
    const extractImageName = useExtractImage();

    const renderStars = (rating: number) => {
        const fullStars = '★'.repeat(rating);
        const emptyStars = '☆'.repeat(5 - rating);
        return <span className="text-primary text-4xl">{fullStars}{emptyStars}</span>;
    };

    useEffect(() => {
        dispatch(getAllFavorites());
    }, [dispatch]);

    const handleAddToFavorite = async (e: React.MouseEvent, partner_id: string) => {
        e.stopPropagation();
        e.preventDefault();
        await dispatch(createOrRemoveFavoritePartner({ partner_id }))
        await dispatch(getAllFavorites());
    };

    return (

        <div className="grid md:grid-cols-2 gap-6 mt-6 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
            {data.map((item, index) => {
                const imageName = extractImageName(item.imageProfile ?? '');
                const isFavorite = favorites.some(favorite => favorite.partner_id === item.partner_id && favorite.isFavorite);
                return (
                    <div key={item.id || index} className="max-w-sm h-full flex flex-col">
                        <div>
                            <Link to={`/partner-profile/${item.partner_id}#${PARTNER_PROFILE_PATH_SCROLL}`} className="relative">
                                <img
                                    src={imageName ? `${VITE_BASE_URL}/uploads/${imageName}` : defaultImage}
                                    alt={item.nameSurname}
                                    className="rounded-[20px] h-[300px] w-[400px] object-cover"
                                />
                                <span className="-mt-72 pl-6 absolute left-0 text-primary text-[40px]">
                                    <i
                                        className={`ri-heart-${isFavorite ? '3-fill' : '3-line'} cursor-pointer`}
                                        onClick={(e) => handleAddToFavorite(e, item.partner_id)}
                                    />
                                </span>

                            </Link>
                        </div>
                        <div className="flex flex-col flex-grow justify-between">
                            <div className="justify-between">
                                <div className="flex space-x-2 my-2 text-2xl font-bold tracking-tight text-secondary dark:text-white">
                                    <p>{item.nameSurname}</p>
                                </div>
                                <Link to="#">
                                    <span className="text-md tracking-tight text-secondary dark:text-white">
                                        {item.city}
                                    </span>
                                </Link>
                                <div className="flex items-center my-2">
                                    <span>{renderStars(item.average_rating)}</span>
                                    <span className="text-md text-secondary mt-1 ml-2">({item.average_rating})</span>
                                </div>
                                <p className="my-2 font-bold text-secondary h-16 overflow-hidden">
                                    {item.shortDescription}
                                </p>
                            </div>

                            <ButtonFull
                                variant="primary"
                                onClick={() => navigate(`/partner-profile/${item.partner_id}#${PARTNER_PROFILE_PATH_SCROLL}`)}
                                title="Zum Profil"
                                className="mt-4"
                            />
                        </div>
                    </div>
                );
            })}
        </div>

    );
};

export default CardUsers;
