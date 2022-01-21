import React from "react";
import Close from "../Vector/Close";
import { IconButton } from "@mui/material";

function CloseButton({ toggleModalVisibility }) {
	
	const handleClick = () => {
		console.log(toggleModalVisibility)
	}

	return (
		<IconButton onClick={handleClick}>
			<Close />
		</IconButton>
	);
}

export default CloseButton;
