import ButtonFull from '../../../components/ButtonFull'
import Typography from '../../../components/Typography'

const PartnerPackageGold = () => {
    return (
        <div className='flex flex-col items-center cardShadow bg-[#FFF4E8] max-w-sm p-10'>
            <Typography size="large" className='font-bold'>
                Anbieter Gold
            </Typography>
            <Typography size="normal" className='mt-2'>
                Profitiere von allen Anbieter-

            </Typography>
            <Typography size="normal">
                Funktionenund nutze das
                volle Potential.
            </Typography>

            <Typography size="large" className='mt-4'>
                19,99€ / Monat
            </Typography>
            <Typography size="large">
                (Mindestlaufzeit: 6 Monate)
            </Typography>

            <div className='flex flex-col items-left mt-8 space-y-2'>
                <div className='flex flex-row space-x-2 items-center'>
                    <i className="ri-checkbox-fill text-green-500 text-2xl" />
                    <Typography size="normal" >
                        Erstellen eines öffentlichen Profils
                    </Typography>
                </div>

                <div className='flex flex-row space-x-2 items-center'>
                    <i className="ri-checkbox-fill text-green-500 text-2xl" />
                    <Typography size="normal" >
                        Angebote inserieren (max. 2)
                    </Typography>
                </div>

                <div className='flex flex-row space-x-2 items-center'>
                    <i className="ri-checkbox-fill text-green-500 text-2xl" />
                    <Typography size="normal" >
                        Social-Media-Vernetzung
                    </Typography>
                </div>

                <div className='flex flex-row space-x-2 items-center'>
                    <i className="ri-checkbox-fill text-green-500 text-2xl" />
                    <Typography size="normal" >
                        Anbieter Newsletter
                    </Typography>
                </div>

                <div className='flex flex-row space-x-2 items-center'>
                    <i className="ri-checkbox-fill text-green-500 text-2xl" />
                    <Typography size="normal" >
                        Terminkalender
                    </Typography>
                </div>

                <div className='flex flex-row space-x-2 items-center'>
                    <i className="ri-checkbox-fill text-green-500 text-2xl" />
                    <Typography size="normal" >
                        Werbecontent
                    </Typography>
                </div>

                <div className='flex flex-row space-x-2 items-center'>
                    <i className="ri-checkbox-fill text-green-500 text-2xl" />
                    <Typography size="normal" >
                        Funktionserweiterungen
                    </Typography>
                </div>

                <div className='flex flex-row space-x-2 items-center'>
                    <i className="ri-checkbox-fill text-green-500 text-2xl" />
                    <Typography size="normal" >
                        Prioritäts-Support
                    </Typography>
                </div>
                <ButtonFull variant="primary" onClick={() => { }} title="Wählen" className='mt-4' />
            </div>
        </div>
    )
}

export default PartnerPackageGold