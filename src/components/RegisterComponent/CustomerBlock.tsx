import ButtonFull from "../ButtonFull"
import Typography from "../Typography"


interface ICustomerBlockProps {
    onCustomerClick(): void;
}

const CustomerBlock = (props: ICustomerBlockProps) => {
    const { onCustomerClick } = props;

    return (
        <div className="login bg-bgRegister w-full md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center flex flex-col">
                <Typography size="big">Kunden registrieren</Typography>
                <Typography size="normal" className="pt-4">
                    Vielen Dank für Ihr Interesse daran, Kunde bei Goldene Seiten zu werden.
                    Bitte geben Sie die erforderlichen Informationen ein, damit wir Ihre Anfrage weiter bearbeiten können.
                </Typography>
                <Typography size="normal" className="pt-4">
                    Bitte prüfen Sie alle Angaben sorgfältig, bevor Sie Ihre Anfrage absenden.
                    Wir werden uns schnellstmöglich bei Ihnen melden.
                </Typography>
                <Typography size="normal" className="pt-4 pb-12">
                    Nochmals vielen Dank für Ihr Interesse daran, Kunde bei Goldene Seiten zu werden!
                </Typography>
                <ButtonFull onClick={onCustomerClick} variant="primary" title="Kunde registrieren" className="my-6" />
            </div>
        </div>
    )
}

export default CustomerBlock