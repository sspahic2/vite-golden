import { Navigate, Route, Routes } from 'react-router-dom';
import { FAVORITES_PATH, HOME_PATH, MESSAGES_PATH, SETTINGS_PATH } from '../../config/Paths';
import FavoritesPage from './FavoritesPage/index.ts';
import MessagesComponent from './MessagesComponent/index.ts';
import SettingsComponent from './SettingsPage.tsx';
import { SettingsProvider } from './SettingsPage.tsx/SettingsContext.tsx';




const Mainpage = () => {

    return (
        <>
            <Routes>
                <Route path={SETTINGS_PATH} element={<SettingsProvider><SettingsComponent /></SettingsProvider>} />
                <Route path={FAVORITES_PATH} element={<FavoritesPage />} />
                <Route path={MESSAGES_PATH} element={<MessagesComponent />} />

                <Route path="/*" element={<Navigate to={HOME_PATH} />} />
            </Routes>
        </>
    )
}

export default Mainpage
