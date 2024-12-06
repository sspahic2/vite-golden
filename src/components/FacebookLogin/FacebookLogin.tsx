import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import facebook from '../../assets/icons/facebook.png';
import { ReactFacebookFailureResponse, ReactFacebookLoginInfo } from 'react-facebook-login';



const FacebookButton = () => {

    // Update the response type
    const handleFacebookLogin = (response: ReactFacebookLoginInfo | ReactFacebookFailureResponse) => {
        if ('error' in response) {
            console.error("Facebook login failed", response.error);
            // Handle login failure here
        } else {
            console.log(response);
            // Handle login success here
            // You can safely access fields like response.name, response.email, etc.
        }
    };

    return (
        <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"
            autoLoad={false}
            fields="name,email,picture"
            callback={handleFacebookLogin}
            render={renderProps => (
                <button
                    onClick={renderProps.onClick}
                    className="w-full bg-[#1877F2] hover:bg-[#0c63d4] text-white rounded-[30px] py-2 px-2 flex items-center justify-center"
                >
                    <img src={facebook} alt="Facebook icon" className="w-6 h-6 mr-6" />
                    Facebook
                </button>
            )}
        />
    );
};

export default FacebookButton;
