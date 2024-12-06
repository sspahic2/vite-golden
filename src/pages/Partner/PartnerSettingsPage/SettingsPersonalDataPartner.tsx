import React from 'react'
import Typography from '../../../components/Typography'
import ButtonCustom from '../../../components/ButtonCustom';

interface ISettingsPersonalDataPartnerProps {
    className?: string;
}

const SettingsPersonalDataPartner: React.FC<ISettingsPersonalDataPartnerProps> = ({ className }) => {

    const handleSubmit = () => {
        console.log("test");
    }

    return (
        <div className={`cardShadow my-10 py-10 px-60 flex flex-col xl:max-w-5xl md:ml-8 ${className}`}>
            <Typography size="big" className='font-bold text-gray '>
                Einstellungen
            </Typography>

            <Typography size="large" className='mt-8'>
                Benutzerdaten
            </Typography>
            <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Name</label>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Max Mustermann"
                            className="w-full p-2.5 inputSettings"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">E-mail</label>
                    <div className=" w-2/3">
                        <input
                            type="e-mail"
                            name="emal"
                            id="email"
                            placeholder="max@mustermann.de"
                            required
                            className="w-full p-2.5 inputSettings"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Passwort</label>
                    <div className=" w-2/3">
                        <input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="••••••••"
                            required
                            className="w-full p-2.5 inputSettings"
                        />
                    </div>
                </div>
                <div className="flex justify-end">
                    <ButtonCustom variant="primary" onClick={() => { }} title="Speichern" className='mt-4' />
                </div>
            </form>

            <div className="border-b-2 border-primary mt-5  max-w-full" />



            <Typography size="large" className='mt-8'>
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

            <div className="border-b-2 border-primary mt-5  max-w-full" />



            <Typography size="large" className='mt-8'>
                Adresse
            </Typography>
            <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Vorname</label>
                    <div className="w-2/3">
                        <input
                            type="text"
                            name="firstName"
                            className="w-full p-2.5 inputSettings"
                            placeholder="Robin"
                        />

                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Nachname</label>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="lastName"
                            className="w-full p-2.5 inputSettings"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Straße & Hausnr.</label>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="street"
                            className="w-full p-2.5 inputSettings"
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
                            />
                        </div>
                    </div>
                </div>

                <div className="flex justify-end">
                    <ButtonCustom variant="primary" onClick={() => { }} title="Speichern" className='mt-4' />
                </div>
            </form>


        </div>
    )
}

export default SettingsPersonalDataPartner;
