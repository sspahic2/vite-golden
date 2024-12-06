import advers from '../../../../../assets/images/advers.jpeg'
import facture from '../../../../../assets/images/facture.avif'
import ButtonCustom from '../../../../../components/ButtonCustom'
import Typography from '../../../../../components/Typography'

const ExtensionsComponent = () => {


    return (
        <div className='flex flex-col'>
            <Typography size="big" className='font-bold text-gray '>
                Erweiterungen
            </Typography>

            <Typography size="normal" className='mt-4'>
                Wir entwickeln das Netzwerk stetig weiter und fügen neue Funktionen hinzu.
                Einige die du hinzubuchen kannst wirst du unten aufgelistet finden.
            </Typography>



            <div className="border-b-2 border-primary mt-12  max-w-full" />

            <div >
                <div className="flex flex-row space-x-10 mt-10" >
                    <img src={facture} alt={facture} className='w-[70px] h-[70px] mr-2' />
                    <div className='flex flex-col'>
                        <div className='flex flex-col lg:flex-row w-full justify-between items-center'>
                            <Typography size="normal" className="text-bold">Automatisierte Rechnungen</Typography>
                            <i className="ri-error-warning-fill text-3xl" />
                            <ButtonCustom variant="primary" onClick={() => { }} title="Coming soon" />
                        </div>
                        <Typography size="normal" className="text-bold mt-4">
                            Durch die automatisierte Rechnungsfunktion ist es dir mit wenigen Klicks einfach und schnell möglich Teilnehmern eine Rechnung für das wahrgenommene Angebot zu erstellen.
                            Diese kannst du dann als PDF herunterladen als auch direkt an den Teilnehmer versenden.
                        </Typography>
                    </div>
                </div>
                <div className="border-b-2 border-primary mt-12  max-w-full" />

                <div className="flex flex-row space-x-10 mt-10 items-center" >
                    <img src={advers} alt={advers} className='w-[70px] h-[70px] mr-2' />
                    <div className='flex flex-col w-full'>
                        <div className='flex flex-col lg:flex-row w-full justify-between items-center'>
                            <Typography size="normal" className="text-bold">Professionelle Werbevideos</Typography>
                            <i className="ri-error-warning-fill text-3xl" />
                            <ButtonCustom variant="primary" onClick={() => { }} title="Jetz anfragen" />
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default ExtensionsComponent