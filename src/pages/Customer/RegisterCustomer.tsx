import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonFull from "../../components/ButtonFull";
import FacebookButton from "../../components/FacebookLogin";
import GoogleButton from "../../components/GoogleLogin";
import Typography from "../../components/Typography";
import { registerCustomer } from "../../redux/slices/UserSlice";
import { AppDispatch, RootState } from "../../redux/ReduxStore";
import { NAVBAR_PATH_SCROLL } from "../../config/PathForScroll";
import { toast, ToastContainer } from "react-toastify";



const PersonalInfoForm = () => {
    const dispatch = useDispatch<AppDispatch>();
    const error = useSelector((state: RootState) => state.user.error);
    const [nameSurname, setNameSurname] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegisterCustomer = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(registerCustomer({ nameSurname, telephone, email, password }));
        const scrollToElement = document.getElementById(NAVBAR_PATH_SCROLL);
        if (scrollToElement) {
            scrollToElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    useEffect(() => {
        if (error) {
            toast.error("Ein Benutzer mit dieser E-Mail-Adresse existiert bereits");
        }
    }, [error]);


    return (
        <form className="max-w-sm mx-auto" onSubmit={handleRegisterCustomer}>
            {[
                {
                    label: "Ihre Vorname und Nachname", id: "nameSurname", type: "text",
                    value: nameSurname, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNameSurname(e.target.value)
                },
                {
                    label: "Ihre Telefon", id: "telephone", type: "tel",
                    value: telephone, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setTelephone(e.target.value)
                },
                {
                    label: "Ihre E-Mail-Adresse", id: "email", type: "email",
                    value: email, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)
                },
                {
                    label: "Ihr Passwort", id: "password", type: "password",
                    value: password, onChange: (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)
                }
            ].map((input) => (
                <div key={input.id} className="mb-5">
                    <label htmlFor={input.id} className="block mb-2">{input.label}</label>
                    <input
                        type={input.type}
                        id={input.id}
                        value={input.value}
                        onChange={input.onChange}
                        className="block w-full p-2.5 inputLogin"
                    />
                </div>
            ))}
            <div className="flex items-center mb-5">
                <input
                    id="terms"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required
                />
                <label htmlFor="terms" className="text-left ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Wenn Sie fortfahren, akzeptieren Sie unsere AGB und die Datenschutzerklärung.
                </label>
            </div>

            <ButtonFull variant="primary" type="submit" title="Jetzt registrieren" />
            <p className="text-sm font-light my-4">ODER REGISTRIEREN MIT</p>
            <div className="flex flex-col md:flex-row items-center justify-between md:space-x-6 space-y-4 md:space-y-0">
                <FacebookButton />
                <GoogleButton />
            </div>
        </form>
    );
};

const RegisterCustomer = () => {
    return (
        <div className="login bg-bgLogin w-full sm:max-w-2xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center">
                <ToastContainer />
                <Typography size="big">Neu Kunde Konto</Typography>
                <div className="flex flex-col md:flex-row mx-30 justify-between">
                    <div className="w-full">
                        <PersonalInfoForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterCustomer;