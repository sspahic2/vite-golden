import { Navigate, Route, Routes } from 'react-router-dom';
import ForgotPassword from '../../components/ForgotPasswordComponent';
import RegisterComponent from '../../components/RegisterComponent';
import SignInComponent from '../../components/SignInComponent';

import {
    FORGOT_PASSWORD_PATH,
    LOGIN_PATH,
    MAIN_PATH,
    REGISTER_PATH
} from '../../config/Paths';

const Landingpage = () => {

    return (
        <>
            <Routes>
                {/* <Route path="/" element={<HomePage />} /> */}
                <Route path={LOGIN_PATH} element={<SignInComponent />} />
                <Route path={REGISTER_PATH} element={<RegisterComponent />} />
                <Route path={FORGOT_PASSWORD_PATH} element={<ForgotPassword />} />
                <Route path="/*" element={<Navigate to={MAIN_PATH} />} />

                {/* <Route path={FILTER_PATH} element={<FilterComponent />} />
                <Route path={OFFER_PATH} element={<OfferComponent />} />
                <Route path={PARTNER_PROFILE_PATH} element={<PartnerInfoComponent />} />
                <Route path={OFFERS_PATH} element={<OffersPage />} /> */}
            </Routes>
        </>
    )
}

export default Landingpage




// import { Navigate, Route, Routes } from 'react-router-dom';
// import { Suspense, lazy } from 'react';

// const ForgotPassword = lazy(() => import('../../components/ForgotPasswordComponent'));
// const RegisterComponent = lazy(() => import('../../components/RegisterComponent'));
// const SignInComponent = lazy(() => import('../../components/SignInComponent'));

// import {
//     FORGOT_PASSWORD_PATH,
//     LOGIN_PATH,
//     MAIN_PATH,
//     REGISTER_PATH
// } from '../../config/Paths';

// const Landingpage = () => {
//     return (
//         <>
//             <Suspense fallback={<div>Loading...</div>}>
//                 <Routes>
//                     <Route path={LOGIN_PATH} element={<SignInComponent />} />
//                     <Route path={REGISTER_PATH} element={<RegisterComponent />} />
//                     <Route path={FORGOT_PASSWORD_PATH} element={<ForgotPassword />} />
//                     <Route path="/*" element={<Navigate to={MAIN_PATH} />} />
//                 </Routes>
//             </Suspense>
//         </>
//     );
// };

// export default Landingpage;
