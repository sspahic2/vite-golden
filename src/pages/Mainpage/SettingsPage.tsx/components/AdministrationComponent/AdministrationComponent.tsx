import ButtonCustom from '../../../../../components/ButtonCustom';
import Typography from '../../../../../components/Typography';

const AdministrationComponent = () => {
    const handleSubmit = () => {
        console.log("test");
    }

    return (
        <div className='flex flex-col'>
            <Typography size="big" className='font-bold text-gray '>
                Administration
            </Typography>

            <Typography size="large" className='mt-4'>
                Stripe Konto White Label
            </Typography>

            <div className="border-b-2 border-primary my-8  max-w-full" />

            <Typography size="large" className='mt-4'>
                Anbieter AGBs
            </Typography>
            <Typography size="normal" className='mt-4'>
                Fühe hier deine AGBs, die das Vertragsverhältnis zwischen dir als Anbieter und dem Nutzer als Vertragspartner regeln, ein.
                Solltest du keine eigenen AGBs haben oder einfügen, so gilt unsere AGB-Vorlage für ein Vertragsverhältnis.
                Bitte lasse diese für dich vorab prüfen.
            </Typography>
            <div className='mt-4 flex flex-col items-start'>
                <textarea
                    id="comment"
                    rows={5}
                    className="mt-4 inputSettings max-w-7xl w-full p-4 text-sm text-gray-900 bg-white"
                    required
                />
            </div>
            <div className="flex justify-start my-4">
                <ButtonCustom variant="primary" onClick={handleSubmit} title="Speicher" className='mt-4' />
            </div>
            <div className="border-b-2 border-primary my-2  max-w-full" />
            <div className="flex justify-start mt-4">
                <ButtonCustom variant="primary" onClick={handleSubmit} title="Account Löschen" className='min-w-[250px]' />
            </div>

        </div >
    )
}

export default AdministrationComponent