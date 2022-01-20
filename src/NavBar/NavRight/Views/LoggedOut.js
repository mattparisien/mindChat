import React from "react";
import Button from "../../../Button/Button";
import Divider from "../../../Divider/Divider";
import SearchIcon from "../../../Vector/SearchIcon";
import Search from "../../Search/Search";

function LoggedOut({ handleClick, toggleSearch, searchActive }) {
	console.log(toggleSearch)
	return (
		<>
			<Button
				size={"large"}
				naked
				onClick={handleClick}
				type={"button"}
				fill='dark'
				className='nav--right__login'
			>
				Log In
			</Button>
			<Button
				size='large'
				onClick={handleClick}
				type={"button"}
				variant='contained'
				fill='dark'
				className='nav--right__register'
			>
				Get started
			</Button>
			<Divider direction='vertical' />
			<div className='nav--right__search'>
				<Search isActive={searchActive} toggleSearch={toggleSearch} />
				<Button isIconButton naked onClick={toggleSearch}>
					<SearchIcon />
				</Button>
			</div>
		</>
	);
}

export default LoggedOut;
