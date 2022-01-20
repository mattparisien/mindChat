import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
} from "@material-ui/core";
import BurgerIcon from "./BurgerIcon";
import { Link } from "@material-ui/core";
import { StyledResponsiveNavBar } from "./styles/styles";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import React, { useState } from "react";
import NavRight from "./NavRight/NavRight";
import Search from "./Search/Search";

function ResponsiveNavBar({ handleClick }) {
	const [searchActive, setSearchActive] = useState(false);

	const toggleSearch = () => {
		setSearchActive(!searchActive);
	};

	return (
		<StyledResponsiveNavBar searchActive={searchActive}>
			<Search isActive={searchActive} toggleSearch={toggleSearch} />
			<div className='header-inner'>
				<nav className='nav'>
					<Logo />
					<NavRight handleClick={handleClick} toggleSearch={toggleSearch} />
				</nav>
			</div>
		</StyledResponsiveNavBar>
	);
}

export default ResponsiveNavBar;
