import ButtonFull from '../ButtonFull';
import Typography from '../Typography';

interface IPartnerBlockProps {
    onPartnerClick(): void;
}

const PartnerBlock = (props: IPartnerBlockProps) => {
    const { onPartnerClick } = props;

    return (
        <div className="login bg-bgRegister w-full mt-10 md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700  ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center flex flex-col">
                <Typography size="big">Partner Werden</Typography>
                <Typography size="normal" className="pt-4">
                    Vielen Dank für Ihr Interesse an einer Zusammenarbeit mit Goldene Seiten!
                    Bitte füllen Sie die folgenden Informationen aus, damit wir Ihre Partnerschaftsanfrage bearbeiten können.
                </Typography>
                <Typography size="normal" className="pt-4">
                    Bitte prüfen Sie alle Angaben sorgfältig, bevor Sie Ihre Anfrage absenden.
                    Nachdem wir Ihre Informationen erhalten haben, werden wir Ihre Anfrage schnellstmöglich bearbeiten.
                </Typography>
                <Typography size="normal" className="pt-4 pb-6">
                    Nochmals vielen Dank für Ihr Interesse an einer Partnerschaft mit Goldene Seiten!
                </Typography>
                <ButtonFull onClick={onPartnerClick} variant="primary" title="Partner werden" className="my-6" />
            </div>
        </div>
    )
}

export default PartnerBlock