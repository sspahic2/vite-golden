import ButtonFull from '../../../components/ButtonFull'
import Typography from '../../../components/Typography'

const PartnerPackageNormal = () => {
    return (
        <div className='flex flex-col items-center cardShadow bg-[#FBFBFB] max-w-sm p-10'>
            <Typography size="large" className='font-bold'>
                Anbieter
            </Typography>
            <Typography size="normal" className='mt-2'>
                Schalte die Anbieter-Funktion

            </Typography>

            <Typography size="normal">

                freiund erhöhe effektiv
                deine Reichweite.
            </Typography>

            <Typography size="large" className='mt-4'>
                7,99€ / Monat <br />
                (Mindestlaufzeit: 3 Monate)
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
                    <i className="ri-checkbox-blank-line text-2xl" />
                    <Typography size="normal" >
                        Funktionserweiterungen
                    </Typography>
                </div>

                <div className='flex flex-row space-x-2 items-center'>
                    <i className="ri-checkbox-blank-line text-2xl" />
                    <Typography size="normal" >
                        Prioritäts-Support
                    </Typography>
                </div>
                <ButtonFull variant="primary" onClick={() => { }} title="Wählen" className='mt-4' />
            </div>
        </div>
    )
}

export default PartnerPackageNormal