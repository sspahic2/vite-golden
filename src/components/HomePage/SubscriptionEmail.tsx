import ButtonCustom from '../ButtonCustom';
import Typography from '../Typography';

interface ISubscriptionEmail {
    className?: string;
}


const SubscriptionEmail = (props: ISubscriptionEmail) => {
    const { className } = props;

    return (
        <div className={`subscriptionEmail ${className}`}>
            <div className='container mx-auto text-center pt-10 flex flex-col'>
                {/* <span className='customText' >Bleiben Sie inspiriert und gesund!</span> */}
                <Typography size="big" className='pt-10'>Bleiben Sie inspiriert und gesund!</Typography>

                {/* <p className='text-sm lg:text-2xl pt-10'>
                    Abonnieren Sie unseren Newsletter und erhalten Sie exklusive Tipps, Artikel und Angebote direkt in Ihr Postfach.
                </p> */}

                <Typography size="large" className='pt-10'>
                    Abonnieren Sie unseren Newsletter und erhalten Sie exklusive Tipps, Artikel und Angebote direkt in Ihr Postfach.
                </Typography>

                <div className='pt-10 md:space-x-10 md:flex items-center justify-center'>
                    <input placeholder="Ihre E-Mail Adresse" className="searchText w-full md:w-1/3" />
                    <ButtonCustom className="font-bold mt-6 md:mt-0 " variant="primary" onClick={() => { }} title="Jetzt abonnieren" />
                </div>
            </div>
        </div>
    )
}

export default SubscriptionEmail