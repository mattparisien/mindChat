import React from "react";
import Button from "../../../../Button/Button";
import GoogleLogin from "react-google-login";

function SignUpButton(props) {
	return (
		<Button
			size={"large"}
			className='SignUpButton'
			width='300px'
			onClick={props.clickHandler}
			variant="contained"
		>
			{props.children}
		</Button>
	);
}

export default SignUpButton;
