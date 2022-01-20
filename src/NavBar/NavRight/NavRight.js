import React from "react";
import { Box } from "@material-ui/core";
import Button from "../../Button/Button";
import LoggedOut from "./Views/LoggedOut";
import LoggedIn from "./Views/LoggedIn";
import { SearchContext } from "../../App";

function NavRight({ handleClick, toggleSearch }) {
	return (
		<SearchContext.Consumer>
			{searchContext => {
				return (
					<Box className='nav--right'>
						<LoggedOut
							handleClick={handleClick}
							toggleSearch={searchContext.toggleSearch}
							searchActive={searchContext.searchActive}
							naked
						/>
						{/* <LoggedIn handleClick/> */}
					</Box>
				);
			}}
		</SearchContext.Consumer>
	);
}

export default NavRight;
