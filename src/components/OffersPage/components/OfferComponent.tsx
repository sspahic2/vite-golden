import { useLocation } from 'react-router-dom';
import PartnerInfo from '../../../pages/Partner/PartnerInfo';
import OfferDetails from './OfferDetails';
import OffersFromAllPartners from './OffersFromAllPartners';

const OfferComponent = () => {

    const location = useLocation();
    const content = location.state?.content;
    const partner_id = content?.user_id;

    return (
        <div>
            <div className='flex flex-col xl:flex-row container mx-auto'>
                <OfferDetails />
                <PartnerInfo className="flex-1" partner_id={partner_id} />
            </div>
            <div className='flex flex-col mt-4 mb-32 space-y-32 container mx-auto'>
                <OffersFromAllPartners />
            </div>
        </div>
    );
};

export default OfferComponent;
