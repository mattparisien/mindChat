import React from "react";
import SignUpButton from "./SignUpButton";
import { Google, Facebook, Email } from "../../../../Vector/Socials";
import Button from "../../../../components/Button/Button";
import GoogleLogin from "react-google-login";
import GoogleButton from "../../../../components/Button/GoogleButton";

function CallToActions({ signInClick }) {
	return (
		<>
			<SignUpButton>
				<Google /> Sign up with Google{" "}
			</SignUpButton>
			<SignUpButton>
				<Facebook /> Sign up with Facebook{" "}
			</SignUpButton>
			<SignUpButton clickHandler={signInClick}>
				<Email /> Sign up with your Email
			</SignUpButton>
			<GoogleButton />

			<div
				className='register-card--sign-in-cta'
				style={{ margin: "0 auto", paddingTop: "2rem" }}
			>
				Have an account? <Button naked>Sign in</Button>
			</div>
		</>
	);
}

export default CallToActions;
