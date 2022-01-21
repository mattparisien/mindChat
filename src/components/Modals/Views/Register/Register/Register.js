import React, { useState, useEffect } from "react";
import Wrapper from "../../../../Wrapper/Wrapper";
import CallToActions from "./CallToActions";
import SignUpEmail from "./SignUpEmail";


export default function Register() {
	const [view, setView] = useState("index");
	const [success, setSuccess] = useState(false);

	const handleSignInClick = () => {
		setView("email");
	};

	useEffect(() => {
		success && (setView("success"));
	}, [success]);

	return (
		<div className='register-card'>
			<Wrapper
				className='register-card--gateways'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='flex-start'
				center
			>
				<h2 className='register-card--heading'>
					{view === "index" && "Join MindTalk"}
					{view === "email" && "Sign up with your Email"}
				</h2>
				{view === "index" && <CallToActions signInClick={handleSignInClick} />}
				{view === "email" && <SignUpEmail setSuccess={setSuccess} />}
			</Wrapper>
		</div>
	);
}
