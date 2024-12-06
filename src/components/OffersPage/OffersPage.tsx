// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { OFFERS_PATH_SCROLL } from '../../config/PathForScroll';
// import { AppDispatch, RootState } from '../../redux/ReduxStore';
// import { clearSearchResults, getAllOffers } from '../../redux/slices/OfferSlice';
// import ButtonFull from '../ButtonFull';
// import CardItem from '../CardItem';
// import Typography from '../Typography';
// import Pagination from './Pagination';

// const OffersPage = () => {
//     const dispatch = useDispatch<AppDispatch>();
//     const { offers, searchResults, error } = useSelector((state: RootState) => state.offer);
//     const displayedOffers = searchResults.length > 0 ? searchResults : offers;

//     useEffect(() => {
//         dispatch(getAllOffers({}));
//         dispatch(clearSearchResults())
//     }, [dispatch]);

//     return (
//         <div id={OFFERS_PATH_SCROLL} className="container mx-auto m-4 md:mt-10 mb-10">
//             <div className="flex flex-row justify-between items-center">
//                 <Typography size="large">
//                     {error ? '' : `Hier sehen Sie die letzten ${displayedOffers.length} veröffentlichten Angebote.`}
//                 </Typography>
//                 <div className="flex flex-row">
//                     <ButtonFull
//                         variant="outline"
//                         onClick={() => { }}
//                         title="sortieren nach: Preis"
//                         endIcon="ri-arrow-down-s-line"
//                         className="btnShadow"
//                     />
//                 </div>
//             </div>
//             {
//                 displayedOffers.length === 0 || error ? (
//                     <div className="text-center text-lg font-bold">
//                         Keine Angebote gefunden.
//                     </div>
//                 ) : (
//                     <>
//                         <CardItem data={displayedOffers} />
//                         <Pagination />
//                     </>
//                 )
//             }
//         </div >
//     );
// };

// export default OffersPage;




// components/OffersPage.tsx


import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { OFFERS_PATH_SCROLL } from '../../config/PathForScroll';
import { AppDispatch, RootState } from '../../redux/ReduxStore';
import { clearSearchResults, getAllOffers, getOffersByQuery } from '../../redux/slices/OfferSlice';
import ButtonFull from '../ButtonFull';
import CardItem from '../CardItem';
import Typography from '../Typography';
import Pagination from './Pagination';

const OffersPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const location = useLocation();

    const { offers, searchResults, error } = useSelector((state: RootState) => state.offer);
    const displayedOffers = searchResults.length > 0 ? searchResults : offers;

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const name = params.get('name') || '';
        const locationOrPostalCode = params.get('locationOrPostalCode') || '';

        if (!name && !locationOrPostalCode) {
            dispatch(getAllOffers({}));
        } else {
            const page = params.get('page') || '1';
            const limit = params.get('limit') || '16';
            const searchParams = {
                name,
                locationOrPostalCode,
                page: parseInt(page),
                limit: parseInt(limit),
            };
            dispatch(getOffersByQuery(searchParams));
            dispatch(clearSearchResults());
        }
    }, [dispatch, location.search]);

    return (
        <div id={OFFERS_PATH_SCROLL} className="container mx-auto m-4 md:mt-10 mb-10">
            <div className="flex flex-row justify-between items-center">
                <Typography size="large">
                    {error ? '' : `Hier sehen Sie die letzten ${displayedOffers.length} veröffentlichten Angebote.`}
                </Typography>
                <div className="flex flex-row">
                    <ButtonFull
                        variant="outline"
                        onClick={() => { }}
                        title="sortieren nach: Preis"
                        endIcon="ri-arrow-down-s-line"
                        className="btnShadow"
                    />
                </div>
            </div>
            {
                displayedOffers.length === 0 || error ? (
                    <div className="text-center text-lg font-bold">
                        Keine Angebote gefunden.
                    </div>
                ) : (
                    <>
                        <CardItem data={displayedOffers} />
                        <Pagination />
                    </>
                )
            }
        </div >
    );
};

export default OffersPage;
