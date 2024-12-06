import { useEffect, useState } from 'react';
import ButtonCustom from '../../../../../components/ButtonCustom';
import Typography from '../../../../../components/Typography';
import { toast, ToastContainer } from 'react-toastify';
import { clearUpdateStatus, updateUser } from '../../../../../redux/slices/UserSlice';
import { AppDispatch, RootState } from '../../../../../redux/ReduxStore';
import { useDispatch, useSelector } from 'react-redux';

const ProfileDataComponent = () => {
    const dispatch = useDispatch<AppDispatch>();
    const [nameSurname, setNameSurname] = useState<string>("");
    const [vocation, setVocation] = useState<string>("");
    const [city, setCity] = useState<string>("");
    const [motto, setMotto] = useState<string>("");
    const [shortDescription, setShortDescription] = useState<string>("");
    const [linkWeb, setLinkWeb] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [linkFacebook, setLinkfacebook] = useState<string>("");
    const [linkInstagram, setLinkInstagram] = useState<string>("");
    const [linkTwitter, setLinkTwitter] = useState<string>("");
    const [linkYoutube, setLinkYoutube] = useState<string>("");
    const [imageProfile, setImageProfile] = useState<File | null>(null);

    const isUpdate = useSelector((state: RootState) => state.user.isUpdate);
    const error = useSelector((state: RootState) => state.user.error);

    const handleUpdateUser = async (e: React.FormEvent) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('nameSurname', nameSurname || '');
        formData.append('vocation', vocation || '');
        formData.append('city', city || '');
        formData.append('motto', motto || '');
        formData.append('shortDescription', shortDescription || '');
        formData.append('email', email || '');
        formData.append('linkWeb', linkWeb || '');
        formData.append('linkFacebook', linkFacebook || '');
        formData.append('linkInstagram', linkInstagram || '');
        formData.append('linkTwitter', linkTwitter || '');
        formData.append('linkYoutube', linkYoutube || '');

        if (imageProfile) {
            formData.append('image', imageProfile);
        }

        await dispatch(updateUser(formData));
    };




    useEffect(() => {
        if (error) {
            toast.error(error);
        }
        if (isUpdate) {
            toast.success("Benutzerdaten erfolgreich aktualisiert");
            dispatch(clearUpdateStatus());
        }
    }, [error, isUpdate, dispatch]);







    return (
        <div className='flex flex-col'>
            <Typography size="big" className='font-bold text-gray '>
                Profil
            </Typography>

            <Typography size="large" className='mt-4'>
                Profildaten
            </Typography>
            <form onSubmit={handleUpdateUser} className='mt-4 space-y-4' encType="multipart/form-data">
                <ToastContainer />
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Name</label>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="w-full p-2.5 inputSettings"
                            required
                            value={nameSurname}
                            onChange={(e) => setNameSurname(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Berufung</label>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="berufung"
                            id="berufung"
                            className="w-full p-2.5 inputSettings"
                            value={vocation}
                            onChange={(e) => setVocation(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Ort</label>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="city"
                            id="city"
                            className="w-full p-2.5 inputSettings"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Motto (optional)</label>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="motto"
                            id="motto"
                            className="w-full p-2.5 inputSettings"
                            value={motto}
                            onChange={(e) => setMotto(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex gap-8">
                    <label className="w-1/3 text-gray-500">Kurzbeschreibung</label>
                    <div className=" w-2/3">
                        <textarea
                            id="comment"
                            rows={3}
                            className="w-full p-2.5 inputSettings"
                            value={shortDescription}
                            onChange={(e) => setShortDescription(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-8 py-8">
                    <label className="w-1/3 text-gray-500 flex">Profilbild</label>
                    <div className="w-2/3 flex items-center gap-4">
                        <input
                            type="file"
                            id="imageProfile"
                            className="hidden"
                            onChange={(e) => setImageProfile(e.target.files ? e.target.files[0] : null)}
                        />
                        <label
                            htmlFor="imageProfile"
                            className="bg-primary text-white p-2 rounded-xl cursor-pointer"
                        >
                            Bild auswählen
                        </label>
                        {imageProfile && (
                            <img
                                src={URL.createObjectURL(imageProfile)}
                                alt="User Profile"
                                className="rounded-full w-[50px] h-[50px] object-cover"
                            />
                        )}
                    </div>
                </div>



                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Webseite</label>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="webseite"
                            id="webseite"
                            className="w-full p-2.5 inputSettings"
                            value={linkWeb}
                            onChange={(e) => setLinkWeb(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">E-Mail</label>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="e-mail"
                            id="e-mail"
                            className="w-full p-2.5 inputSettings"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                </div>

                <div className="border-b-2 border-primary mt-12 max-w-full pt-8" />


                <div className='pt-4'>

                    <Typography size="large">
                        Social Media
                    </Typography>

                    <div className='mt-4 space-y-4'>
                        <div className="flex items-center gap-8">
                            <label className="w-1/3 text-gray-500">Facebook</label>
                            <div className=" w-2/3">
                                <input
                                    type="text"
                                    name="facebook"
                                    id="facebook"
                                    className="w-full p-2.5 inputSettings"
                                    value={linkFacebook}
                                    onChange={(e) => setLinkfacebook(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <label className="w-1/3 text-gray-500">Instagram</label>
                            <div className=" w-2/3">
                                <input
                                    type="text"
                                    name="instagram"
                                    id="instagram"
                                    className="w-full p-2.5 inputSettings"
                                    value={linkInstagram}
                                    onChange={(e) => setLinkInstagram(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <label className="w-1/3 text-gray-500">Twitter</label>
                            <div className=" w-2/3">
                                <input
                                    type="text"
                                    name="twitter"
                                    id="twitter"
                                    className="w-full p-2.5 inputSettings"
                                    value={linkTwitter}
                                    onChange={(e) => setLinkTwitter(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center gap-8">
                            <label className="w-1/3 text-gray-500">Youtube</label>
                            <div className=" w-2/3">
                                <input
                                    type="text"
                                    name="youtube"
                                    id="youtube"
                                    className="w-full p-2.5 inputSettings"
                                    value={linkYoutube}
                                    onChange={(e) => setLinkYoutube(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-start space-x-4 my-8">
                    <ButtonCustom variant="primary" type="submit" title="Speichern" className='mt-4' />
                    <ButtonCustom variant="primary" onClick={() => { }} title="Profil ansehen" className='mt-4' />
                </div>
            </form>

        </div >
    )
}

export default ProfileDataComponent









