import { useState } from 'react';
import { useSelector } from 'react-redux';
import SignOutModal from '../../../components/SignOutModal';
import Typography from '../../../components/Typography';
import { SETTINGS_PATH_SCROLL } from '../../../config/PathForScroll';
import { RootState } from '../../../redux/ReduxStore';
import { useSettings } from './SettingsContext';
import DeleteUserModal from '../../../components/DeleteUserModal';

const settingsItems = [
    { id: 'settings', label: 'Einstellungen', icon: 'ri-settings-5-fill' },
    { id: 'newsletter', label: 'Newsletter', icon: 'ri-mail-ai-fill' },
    { id: 'favoriten', label: 'Favoriten', icon: 'ri-bookmark-3-fill' },
    { id: 'anfragen', label: 'Anfragen', icon: 'ri-chat-voice-fill' },
    { id: 'anbieter-pakete', label: 'Anbieter-Pakete', icon: 'ri-star-s-fill', restricted: true },
    { id: 'profil', label: 'Profil', icon: 'ri-file-user-fill' },
    { id: 'angebote-verwalten', label: 'Angebote verwalten', icon: 'ri-list-check', restricted: true },
    { id: 'terminkalender', label: 'Terminkalender', icon: 'ri-calendar-todo-fill', restricted: true },
    { id: 'erweiterungen', label: 'Erweiterungen', icon: 'ri-puzzle-2-fill', restricted: true },
    { id: 'werbung', label: 'Werbung', icon: 'ri-megaphone-fill', restricted: true },
    { id: 'prioritäts-support', label: 'Prioritäts-Support', icon: 'ri-questionnaire-fill' },
    { id: 'administration', label: 'Administration', icon: 'ri-user-settings-fill' }
];

const SettingsSidebar = () => {
    const { activeComponent, setActiveComponent } = useSettings();

    const [modalOpenLogout, setModalOpenLogout] = useState<boolean>(false);
    const [modalOpenDeleteUser, setModalOpenDeleteUser] = useState<boolean>(false);


    const userRole = useSelector((state: RootState) => state.user.user?.role)

    const visibleItems = settingsItems.filter(item => !(userRole === 'customer' && item.restricted));

    return (
        <div id={SETTINGS_PATH_SCROLL} className="cardShadow my-10 p-10 w-[315px] flex flex-col justify-normal mx-auto flex-none px-3">
            <Typography size="normal">
                <span className="font-bold border-b-2 border-primary pb-1 ml-3">Kontoverwaltung</span>
            </Typography>

            <Typography size="large" className="mt-10 font-bold text-gray px-3">Allgemein</Typography>

            {visibleItems.slice(0, 4).map(({ id, label, icon }) => (
                <div
                    key={id}
                    onClick={() => setActiveComponent(id)}
                    className={`flex space-x-2 mt-1 items-center cursor-pointer px-2 ${activeComponent === id ? 'bgSettingsItem' : ''}`}
                >
                    <i className={`${icon} text-gray text-2xl`} />
                    <Typography size="normal">{label}</Typography>
                </div>
            ))}

            <div className='flex space-x-2 mt-1 items-center cursor-pointer mx-2' onClick={() => setModalOpenLogout(true)}>
                <span>
                    <i className='ri-logout-circle-r-line text-gray text-2xl' />
                </span>
                <Typography size="normal" className="">Abmelden</Typography>
            </div>

            <div className='flex space-x-2 mt-1 items-center cursor-pointer mx-2' onClick={() => setModalOpenDeleteUser(true)}>
                <span>
                    <i className='ri-delete-bin-5-fill text-gray text-2xl' />
                </span>
                <Typography size="normal" className="">Benutzer löschen</Typography>
            </div>

            <Typography size="large" className="mt-10 font-bold text-gray px-3">Anbieter</Typography>

            {visibleItems.slice(4).map(({ id, label, icon }) => (
                <div
                    key={id}
                    onClick={() => setActiveComponent(id)}
                    className={`flex space-x-2 mt-1 items-center cursor-pointer px-2 ${activeComponent === id ? 'bgSettingsItem' : ''}`}
                >
                    <i className={`${icon} text-gray text-2xl`} />
                    <Typography size="normal">{label}</Typography>
                </div>
            ))}


            {modalOpenLogout && (
                <SignOutModal onClose={() => setModalOpenLogout(false)} />
            )}

            {modalOpenDeleteUser && (
                <DeleteUserModal onClose={() => setModalOpenDeleteUser(false)} />
            )}

        </div>
    );
};

export default SettingsSidebar;
