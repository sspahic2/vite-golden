import Typography from '../../../../../components/Typography';

const AdvertisingComponent = () => {



    return (
        <div className='flex flex-col'>
            <Typography size="big" className='font-bold text-gray '>
                Werbung
            </Typography>

            <Typography size="normal" className='mt-4'>
                Hier stehen dir verschiedene Funktionen zur Verfügung mithilfe derer du dein Profil und deine Angebote über
                andere Plattformen bewerben kannst.
            </Typography>

            <div className="flex items-center gap-8 mt-8">
                <label className="w-1/3 text-gray-500">Anbieter-Profil</label>
                <div className=" w-2/3">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        className="w-full p-2.5 inputSettings text-center"
                        placeholder='www.goldene-seiten.de/direktlink'
                        disabled
                    />
                </div>
            </div>

            <div className="border-b-2 border-primary mt-12  max-w-full" />

            <Typography size="normal" className='mt-8 font-bold'>
                Profilbild Rahmen
            </Typography>

        </div >
    )
}

export default AdvertisingComponent