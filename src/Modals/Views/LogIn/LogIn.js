import React, { useEffect, useState } from "react";
import Wrapper from "../../../Wrapper/Wrapper";
import CallToActions from "../Register/Register/CallToActions";
import SignUpEmail from "../Register/Register/SignUpEmail";
import Input from "../../../Form/Input/Input";
import Button from "../../../Button/Button";

import axios from "axios";

function LogIn() {
	const handleChange = e => {
		const inputName = e.target.name;

		setState(prev => ({
			...prev,
			[inputName]: {
				value: e.target.value,
				error: {
					hasError: false,
					errorMsg: null,
				},
			},
		}));
	};

	const [state, setState] = useState({
		email: {
			value: "",
			error: {
				hasError: false,
				errorMsg: null,
			},
		},
		password: {
			value: "",
			error: {
				hasError: false,
				errorMsg: null,
			},
		},
	});

	const [loading, setLoading] = useState(false);
	const [validationError, setValidationError] = useState(null);
	const [loggedIn, setLoggedIn] = useState(false);
	const [userData, setUserData] = useState(null);

	useEffect(() => {
		if (loggedIn) {
			axios
				.get(process.env.REACT_APP_API_URL + "/login")
				.then(user => console.log(user))
				.catch(err => console.log(err));
		}
	}, [loggedIn]);

	const handleSubmit = e => {
		setLoading(true);
		e.preventDefault();

		const email = state.email.value;
		const password = state.password.value;

		const user = {
			email,
			password,
		};

		axios
			.post(process.env.REACT_APP_API_URL + "/login", user)
			.then(
				res => res.data === "Successfully Authenticated" && setLoggedIn(true)
			)
			.catch(err => console.log(err));
	};
	return (
		<div className='login-card'>
			<Wrapper
				className='login-card--gateways'
				display='flex'
				flexDirection='column'
				justifyContent='center'
				alignItems='flex-start'
				center
			>
				<h2 className='login-card--heading'>Log In</h2>
				<form onSubmit={handleSubmit}>
					<Input
						variant={"outlined"}
						name='email'
						placeholder='email@example.com'
						label='Email Address'
						value={state.email.value}
						onChange={handleChange}
						error={state.email.error.hasError}
						helperText={state.email.error.errorMsg}
					/>
					<Input
						variant={"outlined"}
						name='password'
						placeholder='Password'
						type='password'
						label='Password'
						value={state.password.value}
						onChange={handleChange}
						error={state.password.error.hasError}
						helperText={state.password.error.errorMsg}
						inputProps={{ maxLength: 128 }}
					/>

					<div className='form-error-wrapper'>
						{validationError &&
							validationError.map((err, i) => {
								return (
									<p key={i} className='form-error'>
										{err.msg}
									</p>
								);
							})}
					</div>
					<Button
						type='submit'
						loading={loading}
						variant='contained'
						fill={"dark"}
						size='large'
						fullWidth
						style={{ marginTop: "1rem" }}
					>
						Log In
					</Button>
				</form>
			</Wrapper>
		</div>
	);
}

export default LogIn;
