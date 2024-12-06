import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import chevronDown from '../assets/icons/chevronDown.png';
import defaultImage from '../assets/images/profilImage.jpg';
import { FAVORITES_PATH_SCROLL, LOGIN_PATH_SCROLL, MESSAGES_PATH_SCROLL, NAVBAR_PATH_SCROLL, OFFERS_PATH_SCROLL, REGISTER_PATH_SCROLL, SETTINGS_PATH_SCROLL } from '../config/PathForScroll';
import { FAVORITES_PATH, HOME_PATH, LOGIN_PATH, MEDIA_PATH, MESSAGES_PATH, OFFERS_PATH, PRODUCT_PATH, REGISTER_PATH, SETTINGS_PATH } from '../config/Paths';
import { VITE_BASE_URL } from '../config/routes';
import { RootState } from '../redux/ReduxStore';
import ButtonCustom from './ButtonCustom';
import ScrollLink from './ScrollLink';

interface INavBarProps {
    isLoggedIn: boolean;
}

const NavBar = (props: INavBarProps) => {
    const { isLoggedIn } = props;
    const userImage = useSelector((state: RootState) => state.user.user?.imageProfile);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const navigate = useNavigate();
    const location = useLocation();


    function extractImageName(url: string) {
        const parts = url.split('\\');
        return parts[parts.length - 1];
    }

    const imageName = extractImageName(userImage ?? '');

    return (
        <div id={NAVBAR_PATH_SCROLL} className="flex flex-wrap place-items-center w-full">
            <ToastContainer />
            <section className="relative mx-auto w-full">
                <nav className="flex justify-between container mx-auto">
                    <div className="py-6 flex w-full items-center justify-between">
                        <div className="md:hidden flex mr-6 items-center">
                            <Link to="#" onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </Link>
                        </div>

                        <ul className={`md:flex items-center font-heading md:space-x-4 xl:space-x-12 ${isMenuOpen ? 'block' : 'hidden'} md:block`}>
                            <li>
                                <Link to={HOME_PATH}
                                    className={`navigationText text-sm xl:text-xl ${location.pathname === HOME_PATH ? 'border-b-2 border-primary' : ''}`}
                                >
                                    Startseite
                                </Link>
                            </li>
                            <li>

                                <ScrollLink to={OFFERS_PATH} scrollTo={OFFERS_PATH_SCROLL}
                                    className={`navigationText text-sm xl:text-xl ${location.pathname === OFFERS_PATH ? 'border-b-2 border-primary' : ''}`}
                                >
                                    Angebote
                                    <i className="ri-arrow-down-s-line pl-1" />

                                </ScrollLink>


                            </li>
                            <li>
                                <ScrollLink to={OFFERS_PATH} scrollTo={OFFERS_PATH_SCROLL}
                                    className={`navigationText text-sm xl:text-xl ${location.pathname === PRODUCT_PATH ? 'border-b-2 border-primary' : ''}`}
                                >
                                    Produkte
                                </ScrollLink>
                            </li>
                            <li>
                                <ScrollLink to={OFFERS_PATH} scrollTo={OFFERS_PATH_SCROLL}
                                    className={`navigationText text-sm xl:text-xl ${location.pathname === MEDIA_PATH ? 'border-b-2 border-primary' : ''}`}
                                >
                                    Mediathek
                                </ScrollLink>
                            </li>
                        </ul>

                        {!isLoggedIn ? (
                            <div className="flex flex-col md:flex-row items-center md:space-x-5 space-y-2 md:space-y-0">
                                <ScrollLink to={LOGIN_PATH} scrollTo={LOGIN_PATH_SCROLL}>
                                    <ButtonCustom variant="primary" onClick={() => navigate(LOGIN_PATH)} title="Anmelden" />
                                </ScrollLink>

                                <ScrollLink to={REGISTER_PATH} scrollTo={REGISTER_PATH_SCROLL}>
                                    <ButtonCustom variant="primary" onClick={() => navigate(REGISTER_PATH)} title="Registrieren" />
                                </ScrollLink>

                            </div>
                        ) : (
                            // <div className="flex items-center space-x-5">
                            //     <a className="hover:text-gray-200" href="#">
                            //         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            //         </svg>
                            //     </a>
                            //     <a className="flex items-center hover:text-gray-200" href="#">
                            //         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            //         </svg>
                            //         <span className="flex absolute -mt-5 ml-4">
                            //             <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-400 opacity-75"></span>
                            //             <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
                            //         </span>
                            //     </a>
                            //     <a className="flex items-center hover:text-gray-200" href="#">
                            //         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            //         </svg>
                            //     </a>
                            // </div>

                            <div className="flex items-center space-x-5">
                                <ScrollLink to={MESSAGES_PATH} scrollTo={MESSAGES_PATH_SCROLL} className="flex items-center hover:text-gray-200" >
                                    <i className="ri-mail-line text-3xl text-primary" />
                                    <span className="flex absolute -mt-5 ml-4">
                                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                </ScrollLink>
                                <a className="flex items-center hover:text-gray-200" href="#">
                                    <i className="ri-notification-3-line text-3xl text-primary" />
                                    <span className="flex absolute -mt-5 ml-4">
                                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                </a>
                                <ScrollLink to={FAVORITES_PATH} scrollTo={FAVORITES_PATH_SCROLL} className="flex items-center hover:text-gray-200" >
                                    <i className="ri-heart-line text-3xl text-primary" />
                                    <span className="flex absolute -mt-5 ml-4">
                                        <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-red-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                                    </span>
                                </ScrollLink>


                                <ScrollLink to={SETTINGS_PATH} scrollTo={SETTINGS_PATH_SCROLL} className="flex items-center hover:text-gray-200" >
                                    <img
                                        src={userImage ? `${VITE_BASE_URL}/uploads\\${imageName}` : defaultImage}
                                        alt="User Profile"
                                        className="rounded-full w-[50px] h-[50px] object-cover"
                                    />
                                    <img src={chevronDown} alt={chevronDown} className="w-3 h-3 ml-2" />

                                </ScrollLink>


                            </div>
                        )}
                    </div>
                </nav>
            </section>
        </div>
    );
}

export default NavBar;
