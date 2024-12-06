import { GoogleLogin, GoogleLoginResponse } from 'react-google-login';
import googleIcon from '../../assets/icons/google.png';

const GoogleButton = () => {
    const client_id =
        "233345635594-km0tlqqrv2difnjgovf2jn11sgg7117c.apps.googleusercontent.com";

    // Define the correct type for response
    const handleGoogleLogin = (response: GoogleLoginResponse) => {
        console.log(response);
        // Add logic for handling the Google login response here
    };

    return (
        <GoogleLogin
            clientId={client_id}
            render={renderProps => (
                <button
                    onClick={renderProps.onClick}
                    className="w-full bg-white hover:bg-gray-100 text-black rounded-[30px] py-2 px-2 flex items-center justify-center"
                >
                    <img src={googleIcon} alt="Google Icon" className="w-6 h-6 mr-6" />
                    Google
                </button>
            )}
            // onSuccess={handleGoogleLogin}
            onFailure={handleGoogleLogin}
            cookiePolicy={'single_host_origin'}
        />
    );
};

export default GoogleButton;
