import React from "react";
import { StyledLink } from "./styles/styles";

function Link({ href, onClickHandler, children, bold }) {
	return (
		<StyledLink
			href={href}
			onClick={onClickHandler}
			className='Link'
			bold={bold}
		>
			{children}
		</StyledLink>
	);
}

export default Link;
