import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CardReviews from '../../components/CardReviews';
import Typography from '../../components/Typography';
import { AppDispatch, RootState } from '../../redux/ReduxStore';
import { clearReviews, getAllReviews } from '../../redux/slices/ReviewSlice';

const PartnerReviews = () => {

    const dispatch = useDispatch<AppDispatch>();
    const reviews = useSelector((state: RootState) => state.review.reviews);
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            dispatch(getAllReviews(id));
            dispatch(clearReviews());
        }
    }, [dispatch, id]);


    return (
        <div className='bg-bgReviews mt-10 pb-10'>
            <div className='container mx-auto pt-4'>
                <Typography size="normal">
                    <span className='font-bold border-b-2 border-primary pb-1'>
                        Bewertungen
                    </span>
                </Typography>
                {reviews.length === 0 ? (
                    <Typography size="large" className="flex justify-center text-center text-gray-500 mt-4 font-bold">
                        Für diesen Benutzer liegen keine Bewertungen vor.
                    </Typography>
                ) : (
                    <CardReviews data={reviews} />
                )}
            </div>
        </div>
    );
}

export default PartnerReviews;
