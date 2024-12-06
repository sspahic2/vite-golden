import AddOffersComponent from './components/AddOffersComponent';
import AdministrationComponent from './components/AdministrationComponent';
import AdvertisingComponent from './components/AdvertisingComponent';
import BookingComponent from './components/BookingComponent';
import ExtensionsComponent from './components/ExtensionsComponent';
import FavoriteComponent from './components/FavoriteComponent';
import ManageOfferComponent from './components/ManageOfferComponent';
import NewsletterComponent from './components/NewsletterComponent';
import PartnerPackageComponent from './components/PartnerPackageComponent';
import ProfileDataComponent from './components/ProfileDataComponent';
import SupportComponent from './components/SupportComponent';
import TerminCalendarComponent from './components/TerminCalendarComponent';
import UserData from './components/UserData';
import { useSettings } from './SettingsContext';
import SettingsSidebar from './SettingsSidebar';

const SettingsComponent = () => {
    const { activeComponent } = useSettings();

    const renderComponent = () => {
        switch (activeComponent) {
            case 'settings':
                return <UserData />;
            case 'newsletter':
                return <NewsletterComponent />;
            case 'anbieter-pakete':
                return <PartnerPackageComponent />;
            case 'profil':
                return <ProfileDataComponent />;
            case 'prioritäts-support':
                return <SupportComponent />;
            case 'administration':
                return <AdministrationComponent />;
            case 'werbung':
                return <AdvertisingComponent />;
            case 'angebote-verwalten':
                return <AddOffersComponent />;
            case 'terminkalender':
                return <TerminCalendarComponent />;
            case 'erweiterungen':
                return <ExtensionsComponent />;
            case 'favoriten':
                return <FavoriteComponent />;
            case 'anfragen':
                return <BookingComponent />;
            case 'angebote-verwalten-2':
                return <ManageOfferComponent />;
            default:
                return <UserData />;
        }
    };

    return (
        <div className="my-20 container mx-auto flex flex-col md:flex-row">
            <div className='flex flex-col md:flex-row w-full'>
                <SettingsSidebar />
                <div className={`cardShadow my-10 py-10 px-10 xl:px-32 flex flex-col md:ml-8 flex-grow`}>
                    {renderComponent()}
                </div>
            </div>
        </div>
    );
};

export default SettingsComponent;