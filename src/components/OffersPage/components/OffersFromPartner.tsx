// import { useDispatch, useSelector } from 'react-redux';
// import { getAllOffersByPartner } from '../../../redux/slices/OfferSlice'
// import CardItem from '../../CardItem'
// import Typography from '../../Typography'
// import { AppDispatch, RootState } from '../../../redux/ReduxStore';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom';


// const OffersFromPartner = () => {
//     const { id } = useParams();
//     const dispatch = useDispatch<AppDispatch>();
//     const offersByPartner = useSelector((state: RootState) => state.offer.offersByPartner);




//     useEffect(() => {
//         if (id)
//             dispatch(getAllOffersByPartner(id));
//     }, [dispatch, id]);


//     return (
//         <div className='mt-20 mb-20'>
//             <div className='flex flex-col xl:flex-row '>
//                 <Typography size="normal" >
//                     <span className='font-bold border-b-2 border-primary pb-1'>
//                         Alle Angebote des Anbieters
//                     </span>
//                 </Typography>
//             </div>
//             {offersByPartner && <CardItem data={offersByPartner} />}

//         </div>
//     )
// }

// export default OffersFromPartner


import { useDispatch, useSelector } from 'react-redux';
import { getAllOffersByPartner } from '../../../redux/slices/OfferSlice';
import CardItem from '../../CardItem';
import Typography from '../../Typography';
import { AppDispatch, RootState } from '../../../redux/ReduxStore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const OffersFromPartner = () => {
    const { id } = useParams();
    const dispatch = useDispatch<AppDispatch>();
    const offersByPartner = useSelector((state: RootState) => state.offer.offersByPartner);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;
    const totalPages = Math.ceil(offersByPartner.length / itemsPerPage);
    const currentOffersPartner = offersByPartner.slice(
        currentPage * itemsPerPage,
        (currentPage + 1) * itemsPerPage
    );

    const handleNext = () => {
        if (currentPage < totalPages - 1) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    };

    useEffect(() => {
        if (id) {
            dispatch(getAllOffersByPartner(id));
        }
    }, [dispatch, id]);

    return (
        <div>
            <div className="mt-20 mb-20 flex">
                <div className="flex flex-col xl:flex-row">
                    <Typography size="normal">
                        <span className="font-bold border-b-2 border-primary pb-1">
                            Alle Angebote des Anbieters
                        </span>
                    </Typography>
                </div>
            </div>

            <CardItem data={currentOffersPartner} />


            <div className="mt-6 flex justify-center space-x-4">
                {offersByPartner.length > 4 && (
                    <>
                        <button
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            className={`px-4 py-2 rounded ${currentPage === 0 ?
                                'bg-gray-300 ' : 'bg-primary text-white'
                                }`}
                        >
                            Vorherige
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                            className={`px-4 py-2 rounded ${currentPage === totalPages - 1
                                ? 'bg-gray-300 '
                                : 'bg-primary text-white'
                                }`}
                        >
                            Nächste
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default OffersFromPartner;
