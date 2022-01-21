import { StyledResponsiveNavBar } from "./styles/styles";

import Logo from "../Logo/Logo";
import React, { useState } from "react";
import NavRight from "./NavRight/NavRight";
import Search from "./Search/Search";

function ResponsiveNavBar({ handleClick }) {
	const [searchActive, setSearchActive] = useState(false);

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
