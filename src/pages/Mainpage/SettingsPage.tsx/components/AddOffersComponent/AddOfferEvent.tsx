import { useEffect, useState } from 'react';
import ButtonCustom from '../../../../../components/ButtonCustom';
import ButtonFull from '../../../../../components/ButtonFull';
import DropDownButton from '../../../../../components/DropDownButton';
import Typography from '../../../../../components/Typography';
import { clearCreatedError, clearCreatedStatus, createOfferEvent } from '../../../../../redux/slices/OfferSlice';
import { toast, ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../../redux/ReduxStore';

const AddOfferEvent = () => {

    const dispatch = useDispatch<AppDispatch>();
    const [name, setName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [where, setWhere] = useState<string>("");
    const [rubrics, setRubrics] = useState<string>("");
    const [helpsWith, setHelpsWith] = useState<string>("");
    const [keywords, setKeywords] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const [postalCode, setPostalCode] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [bookingText, setBookingText] = useState<string>("");
    const [image, setImage] = useState<File | null>(null);
    const [price, setPrice] = useState<number | null>(null);
    const [discount, setDiscount] = useState<number | null>(null);
    const [participant, setParticipant] = useState<string>("");




    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const regex = /^\d{0,2}(\.\d{0,2})?$/;
        if (regex.test(value)) {
            setDiscount(value ? parseFloat(value) : null);
        }
    };

    const { isCreatedIndividual, error } = useSelector((state: RootState) => state.offer);

    const categoryOptions = ["Masaza", "Fizioterapija"];
    const handleChangeCategory = (selectedCategory: string) => {
        setCategory(selectedCategory);
    }

    const whereOptions = ["Kod kuce", "Kod vas u radnji"];
    const handleWhereChange = (selectedWhere: string) => {
        setWhere(selectedWhere);
    }
    const countryOptions = ["DE", "FR"];
    const handleCountryChange = (selectedCountry: string) => {
        setCountry(selectedCountry);
    }

    const participantOptions = ["1", "2", "3"];
    const handleParticipantChange = (selectedParticipant: string) => {
        setParticipant(selectedParticipant);
    }

    const handleCreateOfferEvent = async (e: React.FormEvent) => {
        e.preventDefault();

        // if (!name || !category || !price || !description || !image || !location || !country) {
        //     toast.error("Alle Felder müssen ausgefüllt werden!");
        //     return;
        // }

        const formData = new FormData();
        formData.append('name', name || '');
        formData.append('category', category || '');
        formData.append('where', where || '');
        formData.append('rubrics', rubrics || '');
        formData.append('helpsWith', helpsWith || '');
        formData.append('keywords', keywords || '');
        formData.append('location', location || '');
        formData.append('postalCode', postalCode || '');
        formData.append('description', description || '');
        formData.append('bookingText', bookingText || '');
        formData.append('price', price ? price.toString() : '');
        formData.append('discount', discount ? discount.toString() : '');
        formData.append('participant', participant || '');

        if (image) {
            formData.append('image', image);
        }
        await dispatch(createOfferEvent(formData));
    };


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch(clearCreatedError())
        }
        if (isCreatedIndividual) {
            toast.success("Sie haben erfolgreich ein Angebot erstellt!");
            dispatch(clearCreatedStatus());
        }
    }, [error, isCreatedIndividual, dispatch]);

    return (
        <>
            <ToastContainer />
            <form onSubmit={handleCreateOfferEvent} className='mt-4 space-y-4'>

                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Name</label>
                    <div className="w-2/3">
                        <input
                            type="text"
                            name="name"
                            className="w-full p-2.5 inputSettings"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Kategorie</label>
                    <div className="w-2/3 flex space-y-2 md:space-y-0 flex-col md:space-x-4 md:flex-row justify-between">
                        <DropDownButton
                            options={categoryOptions}
                            onChange={handleChangeCategory}
                            selected={category}
                            placeholder="Einzelsitzung"
                        />
                        <DropDownButton
                            options={whereOptions}
                            onChange={handleWhereChange}
                            selected={where}
                            placeholder="Vor Ort"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="w-1/3 flex items-center gap-8">
                        <Typography size="normal" className="text-gray-500">Rubriken (max. 3)</Typography>
                    </div>
                    <div className="w-2/3 flex flex-row justify-between space-x-4">
                        <input
                            type="text"
                            name="ort"
                            id="ort"
                            className="block w-full  p-2.5 inputSettings"
                            value={rubrics}
                            onChange={(e) => setRubrics(e.target.value)}
                        />
                        <ButtonFull variant="primary" onClick={() => { }} title="Auswahl anzeigen" className='rounded-[15px]' />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Stichwörter (max. 5)</label>
                    <div className="w-2/3">
                        <input
                            type="text"
                            name="keywords"
                            className="w-full p-2.5 inputSettings"
                            placeholder='Stichwort 1, Stichwort 2, ...'
                            value={keywords}
                            onChange={(e) => setKeywords(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Hilft bei: (max. 255 Zeichen)</label>
                    <div className="w-2/3">
                        <input
                            type="text"
                            name="helpsWith"
                            className="w-full p-2.5 inputSettings"
                            placeholder='Symptom 1, Symptom 2, ...'
                            value={helpsWith}
                            onChange={(e) => setHelpsWith(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Termine</label>
                    <div className="w-2/3 flex flex-row justify-between space-x-4">
                        <input
                            type="text"
                            name="name"
                            className="w-full p-2.5 inputSettings"
                            placeholder='ADIS objasnjenje'
                        />
                        <label>Teilnehmer max.:</label>

                        <DropDownButton
                            options={participantOptions}
                            onChange={handleParticipantChange}
                            selected={participant}
                            placeholder="1"
                            className='w-2/5'
                        />

                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Ort</label>
                    <div className="w-2/3 flex flex-row justify-between space-x-4">
                        <DropDownButton
                            options={countryOptions}
                            onChange={handleCountryChange}
                            selected={country}
                            placeholder="DE"
                            className='w-2/5'
                        />
                        <input
                            type="text"
                            name="city"
                            className="w-full p-2.5 inputSettings"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <div className="w-1/3 flex items-center gap-8">
                        <Typography size="normal" className="text-gray-500">PLZ</Typography>
                    </div>
                    <div className="w-2/3 flex flex-row justify-between space-x-4">
                        <input
                            type="text"
                            name="postalCode"
                            className="w-2/3 p-2.5 inputSettings"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                        />
                        <ButtonFull variant="primary" onClick={() => { }} title="Termin hinzufügen" className='rounded-[15px]' />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500"></label>
                    <div className="w-2/3">
                        <input
                            type="text"
                            name="name"
                            className="w-full p-2.5 inputSettings"
                            placeholder='ADIS objasnjenje'
                        />
                    </div>
                </div>
                <div className="flex gap-8 pt-12">
                    <label className="w-1/3 text-gray-500">Beschreibung</label>
                    <div className=" w-2/3">
                        <textarea
                            id="description"
                            rows={3}
                            className="w-full p-2.5 inputSettings"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex gap-8">
                    <label className="w-1/3 text-gray-500">Buchungstext (optional)</label>
                    <div className=" w-2/3">
                        <textarea
                            id="bookingText"
                            rows={3}
                            className="w-full p-2.5 inputSettings"
                            value={bookingText}
                            onChange={(e) => setBookingText(e.target.value)}
                        />
                    </div>
                </div>
                {/* <div className="flex gap-8 items-center">
                    <label className="w-1/3 text-gray-500">Bild hochladen</label>
                    <div className=" w-2/3">
                        <ButtonFull variant="primary" onClick={() => { }} title="Bild auswählen" className='rounded-[15px] w-44' />
                    </div>
                </div> */}
                <div className="flex gap-8 items-center">
                    <label className="w-1/3 text-gray-500">Bild hochladen</label>
                    <div className="w-2/3">
                        <input
                            type="file"
                            id="image"
                            className="hidden"
                            onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
                        />
                        <label
                            htmlFor="image"
                            className="bg-primary text-center text-white p-2 rounded-xl cursor-pointer block w-full"
                        >
                            Bild auswählen
                        </label>

                        {image && (
                            <img
                                src={URL.createObjectURL(image)}
                                alt="image"
                                className="w-[100px] h-[100px] object-cover mt-4"
                            />
                        )}
                    </div>
                </div>



                <div className="border-b-2 border-primary pt-8 max-w-full" />


                <div className="flex gap-8 items-center pt-8">
                    <div className="w-1/3"></div>
                    <div className=" w-2/3 space-x-4">
                        <ButtonCustom variant="primary" onClick={() => { }} title="Kostenpflichtig" />
                        <ButtonCustom variant="outline" onClick={() => { }} title="Kostenlos" />
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <div className="w-1/3 flex items-center gap-8">
                        <Typography size="normal" className="text-gray-500">Preis</Typography>
                    </div>
                    <div className="w-2/3 flex gap-4">
                        <input
                            type="number"
                            id="price"
                            className="block w-1/2 p-2.5 inputSettings"
                            value={price ?? ""}
                            onChange={(e) => setPrice(e.target.value ? parseFloat(e.target.value) : null)}
                        />
                        <div className="flex items-center gap-2 w-2/3">
                            <Typography size="normal" className="text-gray-500 whitespace-nowrap">Rabatt</Typography>
                            <input
                                type="number"
                                id="discount"
                                className="block w-full p-2.5 inputSettings"
                                value={discount ?? ""}
                                onChange={handleInput}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex gap-8 items-center">
                    <div className="w-1/3"></div>
                    <div className=" w-2/3">
                        <div className='flex flex-col space-y-4'>
                            <div className="flex items-center">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                                />
                                <Typography size="normal" className='ml-2'>
                                    Stundensatz
                                </Typography>
                            </div>
                            <div className="flex">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="w-4 h-4 mt-1 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                                />
                                <Typography size="normal" className='ml-2'>
                                    Alle Angaben sind konform mit den Rahmen- und Nutzungsbedingungen.
                                    Für alle Inhalte besitze ich die Verwendungsrechte
                                </Typography>
                            </div>
                            <div className="flex">
                                <Typography size="normal" >
                                    Dein Angebot wird von unserem Team vorerst auf alle Inhalte geprüft. So stellen wir sicher, dass die Inhalte für alle Nutzer verständlich sind und die Richtlinien der Plattform eingehalten werden.
                                    In deinem Verwaltungsbereich kannst du sehen, wenn dein Eintrag freigeschaltet wurde.
                                </Typography>
                            </div>
                        </div>
                        <ButtonCustom variant="primary" type='submit' title="Abschicken" className='mt-8' />
                    </div>
                </div>
            </form>

        </>
    )
}

export default AddOfferEvent