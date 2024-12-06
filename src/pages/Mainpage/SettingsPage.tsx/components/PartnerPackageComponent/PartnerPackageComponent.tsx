import ButtonCustom from '../../../../../components/ButtonCustom'
import Typography from '../../../../../components/Typography'
import PartnerPackageGold from '../../../../Partner/components/PartnerPackageGold'
import PartnerPackageNormal from '../../../../Partner/components/PartnerPackageNormal'

const PartnerPackageComponent = () => {

    const handleSubmit = () => {
        console.log("test");
    }


    const sections = [
        {
            title: "Ehrenkodex",
            icon: "ri-error-warning-fill",
            content: "Ehrenhaftes Verhalten ist uns sehr wichtig. Die Richtlinien der Goldenene Seiten sind einzuhalten genau wie die Inhale die du bewerben möchtest."
        },
        {
            title: "Fluide Plattform-Provision",
            icon: "ri-error-warning-fill",
            content: "Bei jeder Buchung geht ein Teil des Gesamtbetrags an die Goldenen Seiten. Dieser dient dazu die Plattform zu erhalten und weiter aufzubauen. Die Höhe der Provision richtet sich nach der Buchungshöhe. Den Schlüssel findest du in den Nutzungsbedinungen sowie unter FAQ."
        },
        {
            title: "Preisgestaltung",
            icon: "ri-error-warning-fill",
            content: "Jedes Angebot beinhaltet einen Rabatt den du frei wählen kannst. Wir empfehlen jedoch mindestens 5% auf dein Angebot zu gewähren. Die Best-Preis-Garantie besagt, dass dein Angebot auf den Goldenen Seiten auf keinem anderen öffentlichen Weg günstiger geworben werden soll."
        },
        {
            title: "Haftungsausschluss",
            icon: "ri-error-warning-fill",
            content: "Auch wenn wir jedes Angebot inhaltlich prüfen übernehmen wir keine Haftung für dein Angebot oder die daraus resultierenden Ereignisse. Dies liegt in deiner ehrenhaften Eigenverantwortlichkeit."
        }
    ];


    return (
        <div className='flex flex-col'>
            <div className='flex justify-center'>
                <Typography size="big" className='font-bold text-gray'>
                    Wähle eine Anbieter-Mitgliedschaft
                </Typography>
            </div>


            <div className="flex justify-center space-x-4 mt-4">
                <ButtonCustom variant="primary" onClick={handleSubmit} title="Monatlich" className='mt-4' />
                <ButtonCustom variant="outline" onClick={handleSubmit} title="Jährlich" className='mt-4' />
            </div>

            <div className='flex flex-col space-y-10 xl:space-y-0 xl:flex-row mt-8 items-center xl:space-x-4 text-center justify-center'>
                <PartnerPackageNormal />
                <PartnerPackageGold />
            </div>

            <div className='flex flex-col justify-center mt-8 text-center'>
                <Typography size="large" >
                    Die Mitgliedschaft wird zusammen mit deinem Anbieter-Profil freigeschaltet. Vorher fallen keine Kosten für dich an.
                </Typography>


                <div className="border-b-2 border-primary mt-8  max-w-full" />


                <Typography size="large" className='mt-4'>
                    Bevor du deine Anfrage absendestlies dir bitte unsere Nutzungsbedienungen und AGBs durch. Dies ist wichtig!
                </Typography>

                <Typography size="large" className='mt-4'>
                    Keynotes:
                </Typography>


                {sections.map((section, index) => (
                    <div className="flex flex-row space-x-10 mt-10" key={index}>
                        <div className="mt-4">
                            <i className={`${section.icon} text-primary text-5xl`} />
                        </div>
                        <div className="flex flex-col text-left max-w-lg">
                            <div>
                                <Typography size="large" className="font-bold">{section.title}</Typography>
                            </div>
                            <div className="mt-2">
                                <Typography size="normal" className="text-bold">{section.content}</Typography>
                            </div>
                        </div>
                    </div>
                ))}

                <div className='mt-12 flex flex-col items-start'>
                    <Typography size="large">
                        Nutzungsbedingungen
                    </Typography>
                    <textarea
                        id="comment"
                        rows={5}
                        className="mt-4 inputBorderNotShadow max-w-xl w-full p-4 text-sm text-gray-900 bg-white"
                        required
                    />
                </div>

                <div className='mt-12 flex flex-col items-start'>
                    <Typography size="large">
                        AGBs
                    </Typography>
                    <textarea
                        id="comment"
                        rows={5}
                        className="mt-4 inputBorderNotShadow max-w-xl w-full p-4 text-sm text-gray-900 bg-white"
                        required
                    />

                    <div className='flex flex-row items-center mt-4'>
                        <input
                            id="terms-5"
                            type="checkbox"
                            className="w-4 h-4 border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 checked:bg-white checked:border-black checked:ring-0"
                            required
                        />
                        <Typography size="normal" className="ml-2">
                            Ich habe die Nutzungsbedingungen und AGBs gelesen und akzeptiere sie.
                        </Typography>
                    </div>
                </div>
            </div>

            <div className="flex justify-start mt-4">
                <ButtonCustom variant="primary" onClick={handleSubmit} title="Speichern" className='mt-4' />
            </div>
        </div>
    )
}

export default PartnerPackageComponent