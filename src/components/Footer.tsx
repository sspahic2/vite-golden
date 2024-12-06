import { Link } from 'react-router-dom';
import { DATA_PROTECTION_POLICY_PATH, FEEDBACK_PATH, HOME_PATH, IMPRESSUM_PATH, INFORMATION_PATH, MOTIVATION_PATH, PHILOSOPHY_PATH, PRICE_PATH, QUALITY_PATH, SUPPORT_PATH, THE_TEAM_PATH, UNSUBSCRIBE_PATH } from '../config/Paths';
import ScrollLink from './ScrollLink';
import { DATA_PROTECTION_POLICY_PATH_SCROLL, FEEDBACK_PATH_SCROLL, HOME_PATH_SCROLL, IMPRESSUM_PATH_SCROLL, INFORMATION_PATH_SCROLL, MOTIVATION_PATH_SCROLL, PHILOSOPHY_PATH_SCROLL, PRICE_PATH_SCROLL, QUALITY_PATH_SCROLL, SUPPORT_PATH_SCROLL, THE_TEAM_PATH_SCROLL, UNSUBSCRIBE_PATH_SCROLL } from '../config/PathForScroll';

const Footer = () => {
    return (
        <div className="footerImage relative">
            <footer >
                <div className="mx-auto w-full max-w-screen-xl pt-4">
                    <div
                        className="flex flex-col items-center text-center text-surface">
                        <div className="container px-6 pt-6">
                            <div className="mb-6 flex justify-center space-x-4 opacity-90">
                                <Link to="/" className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray shadow-lg">
                                    <i className="ri-facebook-fill text-3xl" />
                                </Link>
                                <Link to="/" className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray shadow-lg">
                                    <i className="ri-linkedin-box-fill text-3xl" />
                                </Link>
                                <Link to="/" className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray shadow-lg">
                                    <i className="ri-youtube-fill text-3xl" />
                                </Link>
                                <Link to="/" className="flex items-center justify-center w-12 h-12 rounded-full bg-white text-gray shadow-lg">
                                    <i className="ri-instagram-fill text-3xl" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-4 md:grid-cols-4">
                        <div>
                            <h2 className="mb-6 text-sm lg:text-2xl font-semibold">ÜBER UNS</h2>
                            <ul className="font-medium">
                                <li className="mb-4">
                                    <ScrollLink to={THE_TEAM_PATH} scrollTo={THE_TEAM_PATH_SCROLL}>Das Team</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={MOTIVATION_PATH} scrollTo={MOTIVATION_PATH_SCROLL}>Unsere Motivation</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={QUALITY_PATH} scrollTo={QUALITY_PATH_SCROLL}>Qualitätsiegel</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={PHILOSOPHY_PATH} scrollTo={PHILOSOPHY_PATH_SCROLL}>Unsere Philosophie</ScrollLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm lg:text-2xl font-semibold">FÜR ANBIETER</h2>
                            <ul className="font-medium">

                                <li className="mb-4">
                                    <ScrollLink to={INFORMATION_PATH} scrollTo={INFORMATION_PATH_SCROLL}>Informationen</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={FEEDBACK_PATH} scrollTo={FEEDBACK_PATH_SCROLL}>Feedback</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={PRICE_PATH} scrollTo={PRICE_PATH_SCROLL}>Price</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={UNSUBSCRIBE_PATH} scrollTo={UNSUBSCRIBE_PATH_SCROLL}>Abo beenden</ScrollLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm lg:text-2xl font-semibold">NAVIGATION</h2>
                            <ul className="font-medium">

                                <li className="mb-4">
                                    <ScrollLink to={HOME_PATH} scrollTo={HOME_PATH_SCROLL}>Startseite</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={HOME_PATH} scrollTo={HOME_PATH_SCROLL}>Suche</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={HOME_PATH} scrollTo={HOME_PATH_SCROLL}>Kategorien</ScrollLink>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm lg:text-2xl font-semibold">INFORMATIONEN</h2>
                            <ul className="font-medium">

                                <li className="mb-4">
                                    <ScrollLink to={SUPPORT_PATH} scrollTo={SUPPORT_PATH_SCROLL}>FAQ & Kontakt</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={IMPRESSUM_PATH} scrollTo={IMPRESSUM_PATH_SCROLL}>Impressum</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={DATA_PROTECTION_POLICY_PATH} scrollTo={DATA_PROTECTION_POLICY_PATH_SCROLL}>Datenschutzerklärung</ScrollLink>
                                </li>
                                <li className="mb-4">
                                    <ScrollLink to={DATA_PROTECTION_POLICY_PATH} scrollTo={DATA_PROTECTION_POLICY_PATH_SCROLL}>AGB</ScrollLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="px-4 py-6 b flex items-center justify-center">
                        <span className="text-sm lg:text-2xl sm:text-center">Powered by Golden Seiten © 2024</span>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer