import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FORGOT_PASSWORD_PATH, REGISTER_PATH } from "../../config/Paths";
import { AppDispatch, RootState } from "../../redux/ReduxStore";
import { clearErrors, loginUser } from "../../redux/slices/UserSlice";
import ButtonFull from "../ButtonFull";
import FacebookButton from "../FacebookLogin";
import GoogleButton from "../GoogleLogin";
import Typography from "../Typography";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LOGIN_PATH_SCROLL, NAVBAR_PATH_SCROLL } from "../../config/PathForScroll";


const SignInComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const isLogged = useSelector((state: RootState) => state.user.isLogged);
    const error = useSelector((state: RootState) => state.user.error);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        if (email.trim() === '' || password.trim() === '') {
            toast.error("Geben Sie E-Mail und Passwort ein");
            return;
        }

        await dispatch(loginUser({ email, password }));
        const scrollToElement = document.getElementById(NAVBAR_PATH_SCROLL);
        if (scrollToElement) {
            scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        if (error && (email.trim() !== '' && password.trim() !== '')) {
            toast.error(error);
            dispatch(clearErrors());
        }
        // if (isLogged) {
        //     toast.success("Logovani ste NE RADI");
        //     setTimeout(() => {
        //         dispatch(clearLoggedStatus());
        //     }, 2000);
        // }
    }, [error, isLogged, dispatch, email, password]);
    return (
        <section id={LOGIN_PATH_SCROLL} className="bg-white dark:bg-gray-900">
            <ToastContainer />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="login bg-bgLogin w-full md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center">
                        <Typography size="big">Anmelden</Typography>
                        <form className="mx-14 space-y-8 md:space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label className="block mb-2">
                                    <Typography size="large">Ihre E-Mail-Adresse</Typography>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full p-2.5 inputLogin"
                                    placeholder="name@company.com"
                                    // required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div>
                                <label className="block mb-2 customTextP">

                                    <Typography size="large">Ihr Passwort</Typography>

                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="block w-full p-2.5 inputLogin"
                                    // required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>

                            <ButtonFull variant="primary" type="submit" title="Anmelden" className='mt-4' />

                            <div className="flex items-center justify-between">
                                <button onClick={() => { navigate(FORGOT_PASSWORD_PATH) }} className="passwordForgotText">Passwort vergessen?</button>
                                <button onClick={() => { navigate(REGISTER_PATH) }} className="passwordForgotText">Neuer Benutzer?</button>
                            </div>
                            <p className="text-sm font-light">
                                ODER LOGIN MIT
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-between md:space-x-6 space-y-4 md:space-y-0">
                                <FacebookButton />
                                <GoogleButton />
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default SignInComponent;



