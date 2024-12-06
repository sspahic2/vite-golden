
import { useState } from 'react'
import ButtonCustom from '../../../../../components/ButtonCustom'
import DropDownButton from '../../../../../components/DropDownButton'
import Typography from '../../../../../components/Typography'

const SupportComponent = () => {
    const [thema, setThema] = useState<string>("");

    const themeOptions = ["Dark", "Light"];

    const handleSubmit = () => {
        console.log("test");
    }

    const handleThemaChange = (selectedThema: string) => {
        setThema(selectedThema);
    }




    return (
        <div className='flex flex-col'>
            <Typography size="big" className='font-bold text-gray '>
                Prioritäts-Support
            </Typography>

            <Typography size="large" className='mt-4'>
                Wir helfen schneller
            </Typography>
            <form onSubmit={handleSubmit} className='mt-4 space-y-4'>
                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Name</label>
                    <div className=" w-2/3">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            className="w-full p-2.5 inputSettings"
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
                            required
                            className="w-full p-2.5 inputSettings"
                        />
                    </div>
                </div>

                <div className="flex items-center gap-8">
                    <label className="w-1/3 text-gray-500">Thema</label>
                    <div className=" w-2/3">
                        <DropDownButton options={themeOptions} onChange={handleThemaChange} selected={thema} />
                    </div>
                </div>

                <div className='mt-12 flex flex-col items-start'>
                    <Typography size="normal">
                        Betreff
                    </Typography>
                    <input
                        type="text"
                        name="e-mail"
                        id="e-mail"
                        required
                        className="mt-4 inputSettings max-w-7xl w-full p-4 text-sm text-gray-900 bg-white"
                    />
                </div>

                <div className='mt-12 flex flex-col items-start'>
                    <Typography size="normal">
                        Nachricht
                    </Typography>
                    <textarea
                        id="comment"
                        rows={5}
                        className="mt-4 inputSettings max-w-7xl w-full p-4 text-sm text-gray-900 bg-white"
                        required
                    />
                </div>
            </form>

            <div className="flex justify-start space-x-4 my-8">
                <ButtonCustom variant="primary" onClick={handleSubmit} title="Senden" className='mt-4' />
            </div>
        </div >
    )
}

export default SupportComponent
