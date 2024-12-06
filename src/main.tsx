// import React from 'react';
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )



import { memo, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import FilterComponent from './components/FilterComponent/index.ts';
import Footer from './components/Footer.tsx';
import HomePage from './components/HomePage/index.ts';
import SearchComponent from './components/HomePage/SearchComponent.tsx';
import SubscriptionEmail from './components/HomePage/SubscriptionEmail.tsx';
import NavBar from './components/NavBar.tsx';
import OfferComponent from './components/OffersPage/components/index.ts';
import OffersPage from './components/OffersPage/index.ts';


import {
  DATA_PROTECTION_POLICY_PATH,
  FEEDBACK_PATH,
  FILTER_PATH,
  FORGOT_PASSWORD_PATH,
  HOME_PATH,
  IMPRESSUM_PATH,
  INFORMATION_PATH,
  LOGIN_PATH,
  MAIN_PATH,
  MOTIVATION_PATH,
  OFFER_PATH,
  OFFERS_PATH,
  PARTNER_PROFILE_PATH,
  PHILOSOPHY_PATH,
  PRICE_PATH,
  QUALITY_PATH,
  REGISTER_PATH,
  SUPPORT_PATH,
  THE_TEAM_PATH,
  UNSUBSCRIBE_PATH
} from './config/Paths.ts';
import DataProtectionPage from './pages/Landindpage/DataProtectionPage/index.ts';
import FeedbackPage from './pages/Landindpage/FeedbackPage/index.ts';
import ImpressumPage from './pages/Landindpage/ImpressumPage/index.ts';
import InformationPage from './pages/Landindpage/InformationPge/index.ts';
import Landingpage from './pages/Landindpage/Landingpage.tsx';
import MotivationPage from './pages/Landindpage/MotivationPage/index.ts';
import PhilosophyPage from './pages/Landindpage/PhilosophyPage/index.ts';
import PricePage from './pages/Landindpage/PricePage/index.ts';
import QualityPage from './pages/Landindpage/QualityPage/index.ts';
import SupportPage from './pages/Landindpage/SupportPage/index.ts';
import TeamPage from './pages/Landindpage/TeamPage/index.ts';
import UnsubscribePage from './pages/Landindpage/UnsubscribePage/index.ts';
import MainPage from './pages/Mainpage/Mainpage.tsx';
import PartnerInfoComponent from './pages/Partner/index.ts';

// const Landingpage = lazy(() => import('./pages/Landindpage/Landingpage.tsx'));

import LoadingOverlay from './components/ActivatyIndicator/LoadingOverlay.tsx';
import { RootState } from './redux/ReduxStore.tsx';



export const Main = memo(() => {

  const isLoggedIn = useSelector((state: RootState) => state.user?.isAuthenticated);
  const location = useLocation();
  const excludedPaths = [LOGIN_PATH, REGISTER_PATH, FORGOT_PASSWORD_PATH, IMPRESSUM_PATH, DATA_PROTECTION_POLICY_PATH];

  return (
    <Suspense fallback={<LoadingOverlay />}>
      <NavBar isLoggedIn={isLoggedIn} />
      <SearchComponent />
      <Routes>
        <Route key={HOME_PATH} path={HOME_PATH} element={<HomePage />} />
        <Route key={FILTER_PATH} path={FILTER_PATH} element={<FilterComponent />} />
        <Route key={OFFER_PATH} path={OFFER_PATH} element={<OfferComponent />} />
        <Route key={PARTNER_PROFILE_PATH} path={PARTNER_PROFILE_PATH} element={<PartnerInfoComponent />} />
        <Route key={OFFERS_PATH} path={OFFERS_PATH} element={<OffersPage />} />
        <Route key={IMPRESSUM_PATH} path={IMPRESSUM_PATH} element={<ImpressumPage />} />
        <Route key={DATA_PROTECTION_POLICY_PATH} path={DATA_PROTECTION_POLICY_PATH} element={<DataProtectionPage />} />
        <Route key={THE_TEAM_PATH} path={THE_TEAM_PATH} element={<TeamPage />} />
        <Route key={QUALITY_PATH} path={QUALITY_PATH} element={<QualityPage />} />
        <Route key={MOTIVATION_PATH} path={MOTIVATION_PATH} element={<MotivationPage />} />
        <Route key={PHILOSOPHY_PATH} path={PHILOSOPHY_PATH} element={<PhilosophyPage />} />
        <Route key={INFORMATION_PATH} path={INFORMATION_PATH} element={<InformationPage />} />
        <Route key={FEEDBACK_PATH} path={FEEDBACK_PATH} element={<FeedbackPage />} />
        <Route key={PRICE_PATH} path={PRICE_PATH} element={<PricePage />} />
        <Route key={UNSUBSCRIBE_PATH} path={UNSUBSCRIBE_PATH} element={<UnsubscribePage />} />
        <Route key={SUPPORT_PATH} path={SUPPORT_PATH} element={<SupportPage />} />

        {isLoggedIn ? (
          <Route path="/*" element={<MainPage />} />
        ) : (
          <Route key="landingPage" path="/*" element={<Landingpage />} />
        )}
        <Route path="*" element={<Navigate to={isLoggedIn ? HOME_PATH : MAIN_PATH} />} />
      </Routes>

      {!excludedPaths.includes(location.pathname) && (
        <div className='container mx-auto mt-20 mb-20'>
          <SubscriptionEmail className='rounded-[30px]' />
        </div>
      )}
      <Footer />
    </Suspense>
  );
});

export default Main;




// import { lazy, memo, Suspense } from 'react';
// import { useSelector } from 'react-redux';
// import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
// import NavBar from './components/NavBar.tsx';
// import Footer from './components/Footer.tsx';
// import SearchComponent from './components/HomePage/SearchComponent.tsx';
// import SubscriptionEmail from './components/HomePage/SubscriptionEmail.tsx';
// import LoadingOverlay from './components/LoadingOverlay.tsx';
// import { RootState } from './redux/ReduxStore.tsx';
// import {
//   DATA_PROTECTION_POLICY_PATH,
//   FEEDBACK_PATH,
//   FILTER_PATH,
//   FORGOT_PASSWORD_PATH,
//   HOME_PATH,
//   IMPRESSUM_PATH,
//   INFORMATION_PATH,
//   LOGIN_PATH,
//   MAIN_PATH,
//   MOTIVATION_PATH,
//   OFFER_PATH,
//   OFFERS_PATH,
//   PARTNER_PROFILE_PATH,
//   PHILOSOPHY_PATH,
//   PRICE_PATH,
//   QUALITY_PATH,
//   REGISTER_PATH,
//   SUPPORT_PATH,
//   THE_TEAM_PATH,
//   UNSUBSCRIBE_PATH
// } from './config/Paths.ts';

// const HomePage = lazy(() => import('./components/HomePage/index.ts'));

// // const HomePage = lazy(() =>
// //   new Promise(resolve => setTimeout(() => resolve(import('./components/HomePage/HomePage.tsx')), 2000))
// // );

// const FilterComponent = lazy(() => import('./components/FilterComponent/index.ts'));
// const OfferComponent = lazy(() => import('./components/OffersPage/components/index.ts'));
// const OffersPage = lazy(() => import('./components/OffersPage/index.ts'));
// const DataProtectionPage = lazy(() => import('./pages/Landindpage/DataProtectionPage/index.ts'));
// const FeedbackPage = lazy(() => import('./pages/Landindpage/FeedbackPage/index.ts'));
// const ImpressumPage = lazy(() => import('./pages/Landindpage/ImpressumPage/index.ts'));
// const InformationPage = lazy(() => import('./pages/Landindpage/InformationPge/index.ts'));
// const Landingpage = lazy(() => import('./pages/Landindpage/Landingpage.tsx'));
// const MotivationPage = lazy(() => import('./pages/Landindpage/MotivationPage/index.ts'));
// const PhilosophyPage = lazy(() => import('./pages/Landindpage/PhilosophyPage/index.ts'));
// const PricePage = lazy(() => import('./pages/Landindpage/PricePage/index.ts'));
// const QualityPage = lazy(() => import('./pages/Landindpage/QualityPage/index.ts'));
// const SupportPage = lazy(() => import('./pages/Landindpage/SupportPage/index.ts'));
// const TeamPage = lazy(() => import('./pages/Landindpage/TeamPage/index.ts'));
// const UnsubscribePage = lazy(() => import('./pages/Landindpage/UnsubscribePage/index.ts'));
// const MainPage = lazy(() => import('./pages/Mainpage/Mainpage.tsx'));
// const PartnerInfoComponent = lazy(() => import('./pages/Partner/index.ts'));

// export const Main = memo(() => {
//   const isLoggedIn = useSelector((state: RootState) => state.authentication.isAuthenticated);
//   const location = useLocation();
//   const excludedPaths = [LOGIN_PATH, REGISTER_PATH, FORGOT_PASSWORD_PATH, IMPRESSUM_PATH, DATA_PROTECTION_POLICY_PATH];

//   return (
//     <Suspense fallback={<LoadingOverlay />}>
//       <NavBar isLoggedIn={isLoggedIn} />
//       <SearchComponent />
//       <Routes>
//         <Route key={HOME_PATH} path={HOME_PATH} element={<HomePage />} />
//         <Route key={FILTER_PATH} path={FILTER_PATH} element={<FilterComponent />} />
//         <Route key={OFFER_PATH} path={OFFER_PATH} element={<OfferComponent />} />
//         <Route key={PARTNER_PROFILE_PATH} path={PARTNER_PROFILE_PATH} element={<PartnerInfoComponent />} />
//         <Route key={OFFERS_PATH} path={OFFERS_PATH} element={<OffersPage />} />
//         <Route key={IMPRESSUM_PATH} path={IMPRESSUM_PATH} element={<ImpressumPage />} />
//         <Route key={DATA_PROTECTION_POLICY_PATH} path={DATA_PROTECTION_POLICY_PATH} element={<DataProtectionPage />} />
//         <Route key={THE_TEAM_PATH} path={THE_TEAM_PATH} element={<TeamPage />} />
//         <Route key={QUALITY_PATH} path={QUALITY_PATH} element={<QualityPage />} />
//         <Route key={MOTIVATION_PATH} path={MOTIVATION_PATH} element={<MotivationPage />} />
//         <Route key={PHILOSOPHY_PATH} path={PHILOSOPHY_PATH} element={<PhilosophyPage />} />
//         <Route key={INFORMATION_PATH} path={INFORMATION_PATH} element={<InformationPage />} />
//         <Route key={FEEDBACK_PATH} path={FEEDBACK_PATH} element={<FeedbackPage />} />
//         <Route key={PRICE_PATH} path={PRICE_PATH} element={<PricePage />} />
//         <Route key={UNSUBSCRIBE_PATH} path={UNSUBSCRIBE_PATH} element={<UnsubscribePage />} />
//         <Route key={SUPPORT_PATH} path={SUPPORT_PATH} element={<SupportPage />} />

//         {isLoggedIn ? (
//           <Route path="/*" element={<MainPage />} />
//         ) : (
//           <Route key="landingPage" path="/*" element={<Landingpage />} />
//         )}
//         <Route path="*" element={<Navigate to={isLoggedIn ? HOME_PATH : MAIN_PATH} />} />
//       </Routes>

//       {!excludedPaths.includes(location.pathname) && (
//         <div className='container mx-auto mt-20 mb-20'>
//           <SubscriptionEmail className='rounded-[30px]' />
//         </div>
//       )}
//       <Footer />
//     </Suspense>
//   );
// });

// export default Main;
