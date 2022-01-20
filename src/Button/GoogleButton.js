import React from "react";
import GoogleLogin from "react-google-login";

function GoogleButton() {
	const handleLogin = googleData => {
		console.log(googleData);
	};
	const handleFailure = result => {
		alert(result);
	};

	return (
		<GoogleLogin
			clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
			buttonText='Sign up with Google'
			onSuccess={handleLogin}
			onFailure={handleFailure}
			cookiePolicy={"single_host_origin"}
		></GoogleLogin>
	);
}

export default GoogleButton;
