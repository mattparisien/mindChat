import React from "react";
import { Box } from "@material-ui/core";
import Button from "../../Button/Button";
import LoggedOut from "./Views/LoggedOut";
import LoggedIn from "./Views/LoggedIn";

function NavRight({ handleClick, toggleSearch }) {
	return (
		<Box className='nav--right'>
			<LoggedOut
				handleClick={handleClick}
				toggleSearch={toggleSearch}
				naked
			/>
			{/* <LoggedIn handleClick/> */}
		</Box>
	);
}

export default NavRight;
