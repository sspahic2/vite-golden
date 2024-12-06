import OffersFromPartner from '../../components/OffersPage/components/OffersFromPartner'
import PartnerProfile from './PartnerProfile'
import PartnerReviews from './PartnerReviews'

const PartnerInfoComponent = () => {
    return (
        <>
            <PartnerProfile />
            <PartnerReviews />
            <div className='container mx-auto'>
                <OffersFromPartner />
            </div>
        </>
    )
}

export default PartnerInfoComponent