import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/ReduxStore';
import { getAllOffers } from '../../redux/slices/OfferSlice';
import { cardMiniData } from '../../utils/dummyData';
import CardItem from '../CardItem';
import CardMini from '../CardMini';
import Typography from '../Typography';
import UsersBlock from './UsersBlock';
import UserReviewed from '../UserReviewed';

const HomePage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { offers } = useSelector((state: RootState) => state.offer);

    useEffect(() => {
        dispatch(getAllOffers({}));
    }, [dispatch]);

    const lastFour = offers.slice(0, 4);

    return (
        <div>
            <div className="container mx-auto -mt-24">
                <div className="flex flex-col items-center my-10 md:flex-row lg:justify-between">
                    <CardMini data={cardMiniData} />
                </div>
            </div>
            <div className='mt-32 mb-32 container mx-auto'>
                <div className='m-4 md:mt-64 mb-16'>
                    <div className='text-center md:text-left'>
                        <Typography size="big" className='pt-10 border-b-2 border-primary'>Last-Minute Angebote</Typography>
                    </div>
                </div>
                <CardItem data={lastFour} />
            </div>
            <UserReviewed />
            <UsersBlock />
        </div>
    );
}

export default HomePage;
