import React, { useState } from "react";
import {
	TextField,
	Container,
	Box,
	FormControl,
	InputLabel,
	Typography,
	Button,
	Paper,
} from "@material-ui/core";

function Create() {
	const [state, setState] = useState({
		title: {
			value: "",
		},
		body: {
			value: "",
		},
	});

	const resetFormState = () => {
		setState({
			title: {
				value: "",
			},
			body: {
				value: "",
			},
		});
	};

	const handleSubmit = e => {
		e.preventDefault();
		resetFormState();
		
	};

	return (
		<>
			<Container maxWidth='md'>
				<Typography variant='h3' align={"left"}>
					Add a new post
				</Typography>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						height: "100%",
						justifyContent: "flex-start",
					}}
				>
					<form
						style={{
							display: "flex",
							flexDirection: "column",
							height: "100%",
							justifyContent: "flex-start",
						}}
						action={"/new-post"}
						method={"POST"}
						onSubmit={handleSubmit}
					>
						<TextField
							id='title'
							label='Title'
							variant='outlined'
							margin='normal'
							type={"text"}
						/>
						<TextField
							id='body'
							label='Write your new post...'
							variant='outlined'
							multiline
							rows={30}
							onChange={e => {
								setState(prev => ({
									...prev,
									[e.target.id]: {
										value: e.target.value,
									},
								}));
							}}
						></TextField>
						<Box m={2} ml={"auto"}>
							<div className='char-count-strip'>Word count: {state.body.value.length}</div>
						</Box>
						<Box mt={5} mr={"auto"}>
							<Button
								type={"submit"}
								variant={"contained"}
								color='primary'
								size='large'
							>
								Post
							</Button>
						</Box>
					</form>
				</Box>
			</Container>
		</>
	);
}

export default Create;
