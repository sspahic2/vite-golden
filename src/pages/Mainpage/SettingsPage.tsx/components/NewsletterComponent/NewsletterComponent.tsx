import { useState } from 'react';
import ButtonCustom from '../../../../../components/ButtonCustom';
import Typography from '../../../../../components/Typography';

const NewsletterComponent = () => {
    const [isChecked, setIsChecked] = useState(true);
    const [rangeValue, setRangeValue] = useState(100);

    const handleToggleChange = () => {
        setIsChecked(!isChecked);
    };

    const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRangeValue(Number(e.target.value));
    };

    const handleSubmit = () => {
        console.log("test");
    }

    return (
        <div className='flex flex-col'>
            <Typography size="big" className='font-bold text-gray'>
                Newsletter
            </Typography>

            <Typography size="large" className='mt-2'>
                Umkreis Newsletter
            </Typography>

            <div className="flex flex-col mt-8">
                <label className="inline-flex items-center mb-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isChecked}
                        onChange={handleToggleChange}
                    />
                    <div className="relative w-11 h-6 bg-slate-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:bg-green-600 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600">
                    </div>
                    <Typography size="normal" className='ml-2'>
                        Aktiviert
                    </Typography>
                </label>
            </div>


            <div className="flex flex-row items-center space-x-10 mt-8">
                <Typography size="normal">
                    Umkreis
                </Typography>
                <input
                    id="small-range"
                    type="range"
                    value={rangeValue}
                    onChange={handleRangeChange}
                    className="w-[150px] h-1 mb-0 bg-primary appearance-none cursor-pointer"
                    style={{
                        accentColor: '#f5b66d',
                    }}
                />
                <Typography size="normal">
                    {rangeValue} km
                </Typography>
            </div>

            <div className="flex flex-row items-center space-x-8 mt-8 ">
                <div className="flex items-center">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <Typography size="normal" className='ml-2'>
                        Einzelsitzungen
                    </Typography>
                </div>
                <div className="flex items-center">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <Typography size="normal" className='ml-2'>
                        Veranstaltungen
                    </Typography>
                </div>
            </div>

            <div className="border-b-2 border-primary mt-5 max-w-full" />
            <Typography size="large" className='mt-2'>
                Personalisierter Newsletter
            </Typography>
            <div className="flex flex-wrap items-center  mt-8">
                <div className="flex items-center w-1/3 mb-4">
                    <input
                        id="terms-1"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <Typography size="normal" className="ml-2">
                        Einzelsitzungen
                    </Typography>
                </div>

                <div className="flex items-center w-1/3 mb-4">
                    <input
                        id="terms-2"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <Typography size="normal" className="ml-2">
                        Veranstaltungen
                    </Typography>
                </div>

                <div className="flex items-center w-1/3 mb-4">
                    <input
                        id="terms-3"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <Typography size="normal" className="ml-2">
                        Produkte
                    </Typography>
                </div>

                <div className="flex items-center w-1/3 mb-4">
                    <input
                        id="terms-4"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <Typography size="normal" className="ml-2">
                        Anbieter
                    </Typography>
                </div>

                <div className="flex items-center w-1/3 mb-4">
                    <input
                        id="terms-5"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <Typography size="normal" className="ml-2">
                        Suchen
                    </Typography>
                </div>
            </div>
            <div className="flex justify-start">
                <ButtonCustom variant="primary" onClick={handleSubmit} title="Speichern" className='mt-4' />
            </div>
        </div>
    );
}

export default NewsletterComponent;
