
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/ReduxStore";
import { getAllOffers } from "../../../redux/slices/OfferSlice";
import CardItem from "../../CardItem";
import Typography from "../../Typography";

const OffersFromAllPartners = () => {

    const dispatch = useDispatch<AppDispatch>();
    const offers = useSelector((state: RootState) => state.offer.offers);
    useEffect(() => {
        dispatch(getAllOffers({}));

    }, [dispatch]);

    return (
        <div>
            <div className='flex flex-col xl:flex-row'>
                <Typography size="large" className='pt-10 border-b-2 border-primary'>
                    Weitere Anzeigen des Anbieters
                </Typography>
            </div>
            <CardItem data={offers} />
        </div>
    )
}

export default OffersFromAllPartners