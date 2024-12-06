import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import ButtonCustom from "../../../../../components/ButtonCustom";
import Typography from "../../../../../components/Typography";
import { AppDispatch, RootState } from "../../../../../redux/ReduxStore";
import { clearUpdateStatus, updateUser } from "../../../../../redux/slices/UserSlice";


const UserData = () => {

    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) => state.user.user);
    const id = useSelector((state: RootState) => state.user.user?.id);
    const [nameSurname, setNameSurname] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [nickName, setNickName] = useState<string>("");

    const isUpdate = useSelector((state: RootState) => state.user.isUpdate);
    const error = useSelector((state: RootState) => state.user.error);


    const handleUpdateUser = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('nameSurname', nameSurname);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('address', address);
        formData.append('city', city);
        formData.append('postalCode', postalCode);
        formData.append('nickName', nickName);
        await dispatch(updateUser(formData));
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (isUpdate) {
            toast.success("Benutzerdaten erfolgreich aktualisiert");
            dispatch(clearUpdateStatus());
            // if (id) {
            //     dispatch(getUser(id));
            // }
        }
    }, [error, isUpdate, dispatch, id]);







    return (
        // <div className={`cardShadow my-10 py-10 px-60 flex flex-col xl:max-w-5xl md:ml-8 ${className}`}>
        <div className='flex flex-col'>
            <ToastContainer />
            <Typography size="big" className='font-bold text-gray '>
                Einstellungen
            </Typography>

            <Typography size="large" className='mt-4'>
                Benutzerdaten
            </Typography>
            <form onSubmit={handleUpdateUser} className='mt-4 space-y-4'>
                <div className="flex items-center gap-8">
                    <Typography size="normal" className="w-1/3 text-gray-500">Name</Typography>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder={user?.nameSurname}
                            className="w-full p-2.5 inputSettings"
                            value={nameSurname}
                            onChange={(e) => setNameSurname(e.target.value)}

                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <Typography size="normal" className="w-1/3 text-gray-500">E-mail</Typography>
                    <div className=" w-2/3">
                        <input
                            type="e-mail"
                            name="emal"
                            id="email"
                            placeholder={user?.email}
                            required
                            className="w-full p-2.5 inputSettings"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <Typography size="normal" className="w-1/3 text-gray-500">Passwort</Typography>
                    <div className=" w-2/3">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            required
                            className="w-full p-2.5 inputSettings"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <ButtonCustom variant="primary" type="submit" title="Speichern" className='mt-4' />
                </div>

                <div className="border-b-2 border-primary mt-5  max-w-full" />


                <div className="mt-4">
                    <Typography size="large">
                        Abbonement
                    </Typography>
                    <div className='mt-4 space-y-4'>
                        <div className='flex flex-row justify-between'>
                            <Typography size="normal" >Status</Typography>
                            <span className='settingsSubs'>Unterstützer</span>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <Typography size="normal" >Anbieter</Typography>
                            <span className='settingsSubs'>aktiv</span>
                        </div>
                        <div className='flex flex-row justify-between'>
                            <Typography size="normal" >monatliche Erneuerung</Typography>
                            <span className='settingsSubs'>ändern</span>
                        </div>
                    </div>
                </div>

                <div className="border-b-2 border-primary max-w-full" />


                <div className="mt-4">
                    <Typography size="large">
                        Adresse
                    </Typography>
                </div>

                <div className="flex items-center gap-8">
                    <Typography size="normal" className="w-1/3 text-gray-500">Nachname</Typography>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="lastName"
                            className="w-full p-2.5 inputSettings"
                            value={nickName}
                            onChange={(e) => setNickName(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <Typography size="normal" className="w-1/3 text-gray-500">Straße & Hausnr.</Typography>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="street"
                            className="w-full p-2.5 inputSettings"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="w-1/3 flex items-center gap-8">
                        <Typography size="normal" className="text-gray-500">Ort</Typography>
                    </div>
                    <div className="w-2/3 flex gap-4">
                        <input
                            type="text"
                            name="ort"
                            id="ort"
                            className="block w-1/2 p-2.5 inputSettings"
                            placeholder="Ort"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required
                        />
                        <div className="flex items-center gap-2 w-2/3">
                            <Typography size="normal" className="text-gray-500 whitespace-nowrap">PLZ</Typography>
                            <input
                                type="number"
                                name="plz"
                                id="plz"
                                className="block w-full p-2.5 inputSettings"
                                placeholder="PLZ"
                                required
                                value={postalCode}
                                onChange={(e) => setPostalCode(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <ButtonCustom variant="primary" type="submit" title="Speichern" className='mt-4' />
                </div>
            </form>


        </div>
    )
}

export default UserData;
