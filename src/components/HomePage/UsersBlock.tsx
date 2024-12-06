import 'remixicon/fonts/remixicon.css';
import ButtonFull from '../ButtonFull';
import Typography from '../Typography';

const UsersBlock = () => {
    return (
        <div className='usersBlocks bg-bgUsers'>
            <div className='container mx-auto my-10 flex flex-col lg:flex-row lg:space-x-10'>
                <div className='userBlock flex-grow min-h-full pt-10 px-10 flex flex-col justify-between'>
                    <div>
                        {/* <span className='customText'>Vorteile für Nutzer</span> */}
                        <Typography size="big" className='pt-10'>Vorteile für Nutzer</Typography>


                        <div className='flex items-center pt-4'>
                            <div className='text-primary text-4xl'>
                                <i className="ri-checkbox-fill"></i>
                            </div>
                            {/* <p className='customTextP pl-5'>
                                Große Auswahl an Dienstleistungen und Anbietern.
                            </p> */}
                            <Typography size="normal" className='pl-5'>
                                Große Auswahl an Dienstleistungen und Anbietern.
                            </Typography>

                        </div>

                        <div className='flex pt-4'>
                            <div className='text-primary text-4xl'>
                                <i className="ri-checkbox-fill"></i>
                            </div>
                            {/* <p className='customTextP pl-5'>
                                Zugang zu Bewertungen für informierte Entscheidungen.
                            </p> */}
                            <Typography size="normal" className='pl-5'>
                                Zugang zu Bewertungen für informierte Entscheidungen.
                            </Typography>
                        </div>

                        <div className='flex pt-4'>
                            <div className='text-primary text-4xl'>
                                <i className="ri-checkbox-fill"></i>
                            </div>
                            {/* <p className='customTextP pl-5'>
                                Verifizierte und überprüfte Profile von Dienstleistern.
                            </p> */}
                            <Typography size="normal" className='pl-5'>
                                Verifizierte und überprüfte Profile von Dienstleistern.
                            </Typography>
                        </div>

                        <div className='flex pt-4'>
                            <div className='text-primary text-4xl'>
                                <i className="ri-checkbox-fill"></i>
                            </div>
                            {/* <p className='customTextP pl-5'>
                                Informationen zu bevorstehenden Veranstaltungen, Seminaren und Workshops.
                            </p> */}
                            <Typography size="normal" className='pl-5'>
                                Informationen zu bevorstehenden Veranstaltungen, Seminaren und Workshops.
                            </Typography>
                        </div>
                    </div>

                    {/* <button onClick={() => { }} className='bg-primary w-full btnItem mt-5 mb-10'>
                        Zum Profil
                    </button> */}
                    <ButtonFull variant="primary" onClick={() => { }} title="Zum Profil" className=' mt-4 mb-10' />

                </div>

                <div className='userBlock flex-grow min-h-full mt-10 lg:m-0 pt-10 px-10 flex flex-col justify-between'>
                    <div>
                        {/* <span className='customText'>Vorteile für Anbieter</span> */}
                        <Typography size="big" className='pt-10'>Vorteile für Anbieter</Typography>

                        <div className='flex items-center pt-4'>
                            <div className='text-primary text-4xl'>
                                <i className="ri-checkbox-fill"></i>
                            </div>
                            {/* <p className='customTextP pl-5'>
                                Individuelles Profil.
                            </p> */}
                            <Typography size="normal" className='pl-5'>
                                Individuelles Profil.
                            </Typography>
                        </div>

                        <div className='flex pt-4'>
                            <div className='text-primary text-4xl'>
                                <i className="ri-checkbox-fill"></i>
                            </div>
                            {/* <p className='customTextP pl-5'>
                                Stärkung der Online-Sichtbarkeit ohne eigene Website.
                            </p> */}
                            <Typography size="normal" className='pl-5'>
                                Stärkung der Online-Sichtbarkeit ohne eigene Website.
                            </Typography>
                        </div>

                        <div className='flex pt-4'>
                            <div className='text-primary text-4xl'>
                                <i className="ri-checkbox-fill"></i>
                            </div>
                            {/* <p className='customTextP pl-5'>
                                Einfaches Verwalten von Terminen und Buchungen über die Plattform.
                            </p> */}
                            <Typography size="normal" className='pl-5'>
                                Einfaches Verwalten von Terminen und Buchungen über die Plattform.
                            </Typography>
                        </div>

                        <div className='flex pt-4'>
                            <div className='text-primary text-4xl'>
                                <i className="ri-checkbox-fill"></i>
                            </div>
                            {/* <p className='customTextP pl-5'>
                                Direktes Kundenfeedback zur Verbesserung der eigenen Dienstleistung.
                            </p> */}
                            <Typography size="normal" className='pl-5'>
                                Direktes Kundenfeedback zur Verbesserung der eigenen Dienstleistung.
                            </Typography>
                        </div>
                    </div>

                    <ButtonFull variant="primary" onClick={() => { }} title="Zum Profil" className=' mt-4 mb-10' />

                </div>
            </div>
        </div>
    );
};

export default UsersBlock;
