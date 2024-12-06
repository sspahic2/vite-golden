import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'remixicon/fonts/remixicon.css';
import { AppDispatch, RootState } from '../../redux/ReduxStore';
import { getPartnerReviews } from '../../redux/slices/ReviewSlice';
import CardUsers from '../CardUsers';
import Typography from '../Typography';

const UserReviewed = () => {
    const dispatch = useDispatch<AppDispatch>();
    const reviews = useSelector((state: RootState) => state.review.reviewsPartner);

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
    const totalPages = Math.ceil(reviews.length / itemsPerPage);
    const currentReviews = reviews.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

    useEffect(() => {
        dispatch(getPartnerReviews());
    }, [dispatch]);

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
    if (reviews.length === 0) {
        return <></>;
    }


    return (
        <div className="mb-28">
            <div className="m-4 md:mt-24 mb-16">
                <div className="text-center md:text-left container mx-auto flex flex-col">
                    <Typography size="big" className="pt-1">
                        <span className="border-b-2 border-primary">
                            Die aktuellsten Anbieter
                        </span>
                    </Typography>
                    <Typography size="large" className="pt-4">
                        Hier finden sich die Goldene Seiten Neuzugänge
                    </Typography>
                </div>
            </div>

            <div className="container mx-auto flex justify-center">
                <div className="flex-1 flex justify-start">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 0}
                        className="text-8xl text-primary"
                    >
                        <i className="ri-arrow-left-s-line"></i>
                    </button>
                </div>

                <CardUsers data={currentReviews} />

                <div className="flex-1 flex justify-end">
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages - 1}
                        className="text-8xl text-primary"
                    >
                        <i className="ri-arrow-right-s-line" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserReviewed;
