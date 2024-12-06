import { useState } from 'react';
import { REGISTER_PATH_SCROLL } from '../../config/PathForScroll';
import RegisterCustomer from '../../pages/Customer/RegisterCustomer';
import RegisterPartner from '../../pages/Partner/RegisterPartner';
import CustomerBlock from './CustomerBlock';
import PartnerBlock from './PartnerBlock';

const RegisterComponent = () => {
    const [showRegisterPartner, setShowRegisterPartner] = useState(false);
    const [showRegisterCustomer, setShowRegisterCustomer] = useState(false);

    const handlePartnerClick = () => {
        setShowRegisterPartner(true);
        setShowRegisterCustomer(false);
    };

    const handleCustomerClick = () => {
        setShowRegisterCustomer(true);
        setShowRegisterPartner(false);
    };

    return (
        <div id={REGISTER_PATH_SCROLL} className='usersBlocks'>
            <div className='container mx-auto my-10 flex flex-col justify-center lg:flex-row lg:space-x-32'>
                {showRegisterPartner ? (
                    <RegisterPartner />
                ) : showRegisterCustomer ? (
                    <RegisterCustomer />
                ) : (
                    <>
                        <CustomerBlock onCustomerClick={handleCustomerClick} />
                        <PartnerBlock onPartnerClick={handlePartnerClick} />
                    </>
                )}
            </div>
        </div>
    );
};

export default RegisterComponent;
