import ButtonFull from '../ButtonFull'
import Typography from '../Typography'

const FilterBox = () => {


    return (
        <div className='mt-5 cardShadow flex flex-col lg:flex-row w-full justify-evenly'>

            <div className='m-10 space-y-4'>
                <Typography size="large">Kategorien</Typography>

                <ButtonFull variant="outline" onClick={() => { }} title="Wählen sie kategorien" endIcon='ri-arrow-down-s-line' className='btnShadow mb-5' />

                <Typography size="large">Ort</Typography>
                <ButtonFull variant="outline" onClick={() => { }} title="Wählen sie Ort" endIcon='ri-arrow-down-s-line' className='btnShadow mb-5' />

                <Typography size="large" >Länder</Typography>
                <ButtonFull variant="outline" onClick={() => { }} title="Wählen sie Land" endIcon='ri-arrow-down-s-line' className='btnShadow' />
            </div>



            <div className='m-10'>
                <Typography size="large">Preisspanne</Typography>
                <div className='flex flex-row items-center mt-4'>
                    <input placeholder="min Preis" className="cardShadow inputPrice" />
                    <span className='mx-2 font-bold'>-</span>
                    <input placeholder="max Preise" className="cardShadow inputPrice" />
                </div>

                <div className="flex items-center mb-5 mt-10">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Kostenlos / Spendenbasis
                    </label>
                </div>
                <div className="flex items-center mb-5">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Last - Minute Rabatt
                    </label>
                </div>
            </div>


            <div className='m-10'>
                <Typography size="large">Art der Sitzung</Typography>


                <div className="flex items-center mb-5 mt-10">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Einzelsitzungen
                    </label>
                </div>
                <div className="flex items-center mb-5">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Worshops
                    </label>
                </div>
                <div className="flex items-center mb-5">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Coaching
                    </label>
                </div>
                <div className="flex items-center mb-5">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Seminare
                    </label>
                </div>
                <div className="flex items-center mb-5">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Ausbildungen
                    </label>
                </div>
            </div>


            <div className='m-10'>
                <Typography size="large">Art der Sitzung</Typography>


                <div className="flex items-center mb-5 mt-10">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Einzelsitzungen
                    </label>
                </div>
                <div className="flex items-center mb-5">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Worshops
                    </label>
                </div>
                <div className="flex items-center mb-5">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Coaching
                    </label>
                </div>
                <div className="flex items-center mb-5">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Seminare
                    </label>
                </div>
                <div className="flex items-center mb-5">
                    <input
                        id="terms"
                        type="checkbox"
                        className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                        required
                    />
                    <label className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                        Ausbildungen
                    </label>
                </div>
            </div>





        </div >
    )
}

export default FilterBox