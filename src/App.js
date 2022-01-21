import logo from "./logo.svg";
import "./App.css";
import ResponsiveNavBar from "./components/NavBar/ResponsiveNavBar";
import { Routes, Route } from "react-router-dom";
import Create from "./components/Create/Create";
import Modal from "./components/Modals/Modal";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import Post from "./components/Post/SinglePost/Post";
import NewPost from "./components/Post/New/NewPost";
import { createContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "./ApolloClient/client";

export const SearchContext = createContext();

function App() {
	const [state, setState] = useState({
		modal: {
			isActive: false,
			view: null,
		},
	});

	const [data, setData] = useState(null);

	const [searchActive, setSearchActive] = useState(false);

	const toggleSearch = () => {
		setSearchActive(!searchActive);
	};

	const searchContextValue = {
		searchActive,
		toggleSearch,
	};

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
		axios
			.get(process.env.REACT_APP_API_URL + "/posts")
			.then(data => setData(data.data))
			.catch(err => console.log(err));
	}, []);

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

	useEffect(() => {
		axios
			.get(process.env.REACT_APP_API_URL + "/posts")
			.then(res => console.log(res))
			.catch(err => console.log(err));
	}, []);

	const formatAuthor = author => {
		return author.toLowerCase().split(" ").join("-");
	};

	return (
		<div className='App'>
			<ApolloProvider>
				<ThemeProvider theme={theme}>
					<SearchContext.Provider value={searchContextValue}>
						<Modal
							isActive={state.modal.isActive}
							toggleRegisterModal={toggleRegisterModal}
							view={state.modal.view}
						/>
						<ResponsiveNavBar
							handleClick={toggleRegisterModal}
						></ResponsiveNavBar>
						<main style={{ marginTop: theme.header.height, height: "100%" }}>
							{data &&
								data.map(post => {
									const to = {};

									return (
										<div className='card'>
											<Link
												to={`/posts/${formatAuthor(post.author)}/${post._id}`}
											>
												<h1>{post.title}</h1>
												<p>{Date.parse(post.date)} </p>
											</Link>
										</div>
									);
								})}

							<Routes>
								<Route element={<Create />} path={"/new-post"} />
								<Route element={<Post />} path={"/posts/:author/:id"} />
								<Route element={<NewPost />} path={"/posts/new"} />
							</Routes>
						</main>
					</SearchContext.Provider>
				</ThemeProvider>
			</ApolloProvider>
		</div>
	);
}

export default App;
