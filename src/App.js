import logo from "./logo.svg";
import "./App.css";
import ResponsiveNavBar from "./NavBar/ResponsiveNavBar";
import { Routes, Route } from "react-router-dom";
import Create from "./Create/Create";
import Modal from "./Modals/Modal";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Post from "./Post/Post";
import NewPost from "./Post/New/NewPost";
import axios from "axios";

function App() {
	const [state, setState] = useState({
		modal: {
			isActive: false,
			view: null,
		},
	});

	const theme = {
		colors: {
			lightGrey: "#e5e5e5",
			dark: "#282828",
		},
		header: {
			height: "80px",
		},
	};

	useEffect(() => {
		axios.get(process.env.REACT_APP_API_URL + '/posts')
		.then(data => console.log(data))
		.catch(err => console.log(err))
	}, [])

	const toggleRegisterModal = e => {
		const isRegisterView = e.target.classList.contains("nav--right__register");

		e.preventDefault();
		setState(prev => ({
			...prev,
			modal: {
				isActive: !state.modal.isActive,
				view: isRegisterView ? "register" : "logIn",
			},
		}));
	};

	return (
		<div className='App'>
			<ThemeProvider theme={theme}>
				<Modal
					isActive={state.modal.isActive}
					toggleRegisterModal={toggleRegisterModal}
					view={state.modal.view}
				/>
				<ResponsiveNavBar handleClick={toggleRegisterModal}></ResponsiveNavBar>
				<main style={{marginTop: theme.header.height, height: "100%"}}>
					<Routes>
						<Route element={<Create />} path={"/new-post"} />
						<Route element={<Post />} path={"/posts"} />
						<Route element={<NewPost />} path={"/posts/new"} />
					</Routes>
				</main>
			</ThemeProvider>
		</div>
	);
}

export default App;
