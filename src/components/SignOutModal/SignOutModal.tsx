import React from 'react';
import { useDispatch } from 'react-redux';
import { NAVBAR_PATH_SCROLL } from '../../config/PathForScroll';
import { AppDispatch } from '../../redux/ReduxStore';
import { logoutUser } from '../../redux/slices/UserSlice';
import ButtonCustom from '../ButtonCustom';
import Typography from '../Typography';

interface ISignOutModalProps {
    onClose(): void;
}

const SignOutModal: React.FC<ISignOutModalProps> = ({ onClose }) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleLogout = () => {
        dispatch(logoutUser());
        onClose();
        const scrollToElement = document.getElementById(NAVBAR_PATH_SCROLL);
        if (scrollToElement) {
            scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };


    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="relative p-10 w-full max-w-xl bg-white rounded-[30px] shadow flex flex-col justify-center items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col justify-center items-center">
                    <i className="ri-logout-circle-r-line text-7xl text-primary" />
                    <Typography size="normal" className="mt-4 text-center">
                        Möchtest du dich wirklich abmelden? Es kann sein, dass du vieles verpasst?
                    </Typography>
                    <div className="flex flex-row space-x-4">
                        <ButtonCustom variant="outline" onClick={onClose} title="Hier bleiben" className="mt-10" />
                        <ButtonCustom variant="primary" onClick={handleLogout} title="Abmelden" className="mt-10" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignOutModal;
