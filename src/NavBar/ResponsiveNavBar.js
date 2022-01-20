import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
} from "@material-ui/core";
import BurgerIcon from "./BurgerIcon";
import { useContext } from "react";
import { Link } from "@material-ui/core";
import { StyledResponsiveNavBar } from "./styles/styles";
import Button from "../Button/Button";
import { createContext } from "react";
import Logo from "../Logo/Logo";
import React, { useState } from "react";
import NavRight from "./NavRight/NavRight";
import Search from "./Search/Search";
import { SearchContext } from "../App";

function ResponsiveNavBar({ handleClick }) {
	const [searchActive, setSearchActive] = useState(false);

	const toggleSearch = () => {
		setSearchActive(!searchActive);
	};

	return (
		<StyledResponsiveNavBar searchActive={searchActive}>
			<div className='header-inner'>
				<nav className='nav'>
					<Logo />
					<NavRight handleClick={handleClick} />
				</nav>
			</div>
			<Search />
		</StyledResponsiveNavBar>
	);
}

export default ResponsiveNavBar;
