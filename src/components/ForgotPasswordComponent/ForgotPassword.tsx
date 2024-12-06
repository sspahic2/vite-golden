import ButtonFull from "../ButtonFull";
import Typography from "../Typography";

const ForgotPassword = () => {

    const handleSubmit = () => {
        console.log("test");
    }

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-20 lg:py-0">
                <div className="login bg-bgLogin w-full md:mt-0 sm:max-w-xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8 text-center">

                        <Typography size="big">Passwort vergessen</Typography>
                        <form className="mx-14 space-y-8 md:space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-2">
                                    <Typography size="large">Ihre E-Mail-Adresse</Typography>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="block w-full p-2.5 inputLogin"
                                    placeholder="name@company.com"
                                    required />
                            </div>
                            <ButtonFull variant="primary" onClick={() => { }} title=" Passwort zurücksetzen" className='mt-4' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ForgotPassword;



