import React, { useState, useEffect } from "react";
import Button from "../../../../components/Button/Button";
import Input from "../../../../Form/Input/Input";
import * as EmailValidator from "email-validator";
import axios from "axios";
import Form from "../../../../Form/Form";
import LoadingButton from "@mui/lab/LoadingButton";

function SignUpEmail({ setSuccess }) {
	const [state, setState] = useState({
		success: false,
		firstName: {
			value: "",
			error: {
				hasError: false,
				errorMsg: null,
			},
		},
		lastName: {
			value: "",
			error: {
				hasError: false,
				errorMsg: null,
			},
		},
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
		password2: {
			value: "",
			error: {
				hasError: false,
				errorMsg: null,
			},
		},
	});

	const [validationError, setValidationError] = useState(null);
	const [loading, setLoading] = useState(false);

	const [getUserUrl, setGetUserUrl] = useState(null);

	const handleChange = e => {
		const inputName = e.target.name;

		validationError && setValidationError(null);

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

	const handleSubmit = e => {
		setLoading(true);
		e.preventDefault();

		const firstName = state.firstName.value;
		const lastName = state.lastName.value;
		const email = state.email.value;
		const password = state.password.value;
		const password2 = state.password2.value;

		const user = {
			firstName,
			lastName,
			email,
			password,
			password2,
		};

		axios
			.post(process.env.REACT_APP_SERVER_URL + "/register", user)
			.then(res =>
				res.data.errors
					? (setValidationError(res.data.errors), setLoading(false))
					: (setSuccess(true), setLoading(false))
			)
			.catch(err => console.log(err));
	};

	return (
		<Form onSubmit={handleSubmit}>
			<div style={{ display: "flex", gap: "0.4rem" }} className='FormGroup'>
				<Input
					variant={"outlined"}
					name='firstName'
					placeholder='First Name'
					label='First Name'
					value={state.firstName.value}
					onChange={handleChange}
					error={state.firstName.error.hasError}
					helperText={state.firstName.error.errorMsg}
				/>
				<Input
					variant={"outlined"}
					name='lastName'
					placeholder='First Name'
					label='Last Name'
					value={state.lastName.value}
					onChange={handleChange}
					error={state.lastName.error.hasError}
					helperText={state.lastName.error.errorMsg}
				/>
			</div>
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
			<Input
				variant={"outlined"}
				name='password2'
				placeholder='Confirm Password'
				type='password'
				label='Confirm Password'
				value={state.password2.value}
				onChange={handleChange}
				error={state.password.error.hasError}
				helperText={state.password2.error.errorMsg}
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
			<LoadingButton
				type='submit'
				loading={loading}
				variant='contained'
				size='large'
				fullWidth
				sx={{ mt: 2 }}
			>
				Sign up
			</LoadingButton>
		</Form>
	);
}

export default SignUpEmail;
