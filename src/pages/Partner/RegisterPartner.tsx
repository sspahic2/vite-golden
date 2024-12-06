import { useEffect, useState } from "react";
import ButtonFull from "../../components/ButtonFull";
import Typography from "../../components/Typography";
import { registerPartner } from "../../redux/slices/UserSlice";
import { AppDispatch, RootState } from "../../redux/ReduxStore";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import { NAVBAR_PATH_SCROLL } from "../../config/PathForScroll";

const RegisterPartner = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [nameSurname, setNameSurname] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [companyName, setCompanyName] = useState("");
    const [telephone, setTelephone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [businessDescription, setBusinessDescription] = useState<string>("");
    const error = useSelector((state: RootState) => state.user.error);

    const handleRegisterPartner = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch(registerPartner({ nameSurname, address, city, postalCode, country, companyName, telephone, email, businessDescription }));
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
        <div className="login bg-bgRegister w-full sm:max-w-7xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <ToastContainer />
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center">
                <Typography size="big">Partner Werden</Typography>
                <form
                    className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between p-6 space-y-8 space-x-10 md:space-y-0"
                    onSubmit={handleRegisterPartner}
                >
                    <div className="w-full md:w-2/5 space-y-5">
                        {[
                            { label: "Vorname und Nachname", id: "username", type: "text", value: nameSurname, setter: setNameSurname },
                            { label: "Adresse", id: "adresse", type: "text", value: address, setter: setAddress },
                            { label: "Ort / Stadt", id: "city", type: "text", value: city, setter: setCity },
                            { label: "Postleitzahl", id: "postCode", type: "text", value: postalCode, setter: setPostalCode },
                            { label: "Land", id: "country", type: "text", value: country, setter: setCountry }
                        ].map((input) => (
                            <div key={input.id} className="mb-5">
                                <label className="block mb-2">{input.label}</label>
                                <input
                                    type={input.type}
                                    id={input.id}
                                    value={input.value}
                                    onChange={(e) => input.setter(e.target.value)}
                                    className="block w-full p-2.5 inputLogin"
                                />
                            </div>
                        ))}
                    </div>

                    <div className="w-full md:w-2/5 space-y-5">
                        {[
                            { label: "Firmenname", id: "companyName", type: "text", value: companyName, setter: setCompanyName },
                            { label: "Telefon", id: "phoneNumber", type: "text", value: telephone, setter: setTelephone },
                            { label: "E-Mail Adresse", id: "email", type: "email", value: email, setter: setEmail },
                            { label: "Geschäftsbeschreibung", id: "businessDescription", type: "text", value: businessDescription, setter: setBusinessDescription }
                        ].map((input) => (
                            <div key={input.id} className="mb-5">
                                <label className="block mb-2">{input.label}</label>
                                <input
                                    type={input.type}
                                    id={input.id}
                                    value={input.value}
                                    onChange={(e) => input.setter(e.target.value)}
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
                            <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                Wenn Sie fortfahren, akzeptieren Sie unsere AGB und die Datenschutzerklärung.
                            </label>
                        </div>
                        <ButtonFull variant="primary" type="submit" title="Anfrage senden" />
                    </div>

                </form>
            </div>
        </div>
    );
};

export default RegisterPartner;
