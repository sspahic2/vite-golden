import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CardItem from '../../../components/CardItem';
import CardUsers from '../../../components/CardUsers';
import Typography from '../../../components/Typography';
import { FAVORITES_PATH_SCROLL } from '../../../config/PathForScroll';
import { AppDispatch, RootState } from '../../../redux/ReduxStore';
import { getAllFavorites } from '../../../redux/slices/FavoriteSlice';
import { getAllOffers } from '../../../redux/slices/OfferSlice';
import { getAllUsers } from '../../../redux/slices/UserSlice';
import { getPartnerReviews } from '../../../redux/slices/ReviewSlice';

const FavoritesPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const favorites = useSelector((state: RootState) => state.favorite.favorites);
    const offers = useSelector((state: RootState) => state.offer.offers);
    const reviews = useSelector((state: RootState) => state.review.reviewsPartner);

    useEffect(() => {
        dispatch(getAllOffers({}));
        dispatch(getAllUsers());
        dispatch(getAllFavorites());
        dispatch(getPartnerReviews());
    }, [dispatch]);

    const favoriteOffers = offers.filter(offer =>
        favorites.some(fav => fav.offer_id === offer.id)
    );


    const favoritePartners = reviews.filter(review =>
        favorites.some(fav => fav.partner_id === review.partner_id)
    );



    return (
        <div id={FAVORITES_PATH_SCROLL} className="container mx-auto m-4 md:mt-10 mb-10">
            <div className='flex flex-row justify-between items-center'>
                <Typography size="large">
                    Hier sehen Sie die zuletzt {favoriteOffers.length} hinzugefügten Favoriten.
                </Typography>

            </div>

            {favoriteOffers.length === 0 ?
                <div className='flex justify-center mt-8 '>
                    <Typography size="large" className='font-bold'>
                        Sie haben derzeit keine Favoriten hinzugefügt!
                    </Typography>
                </div>
                : <CardItem data={favoriteOffers} />
            }

            {favoritePartners.length === 0 ?
                <div className='flex justify-center mt-8 '>
                    <Typography size="large" className='font-bold'>
                        Sie haben derzeit keine Favoriten Partner hinzugefügt!
                    </Typography>
                </div>
                : <CardUsers data={favoritePartners} />
            }

        </div>
    );
};

export default FavoritesPage;

