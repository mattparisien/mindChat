import React, { useState } from "react";
import { IconButton, Avatar, Tooltip, Box, TextField } from "@mui/material";
import { StyledActionsMenu } from "./styles";
import AccountMenu from "./AccountMenu";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { StyledSearch } from "./styles";
import { List, ListItem } from "@material-ui/core";

function LoggedIn({ handleClick }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleIconClick = e => {
		setAnchorEl(e.currentTarget);
	};

	const [searchActive, setSearchActive] = useState(false);

	const toggleSearchActivity = () => {
		setSearchActive(!searchActive);
	};
	const flexContainer = {
		display: "flex",
		flexDirection: "row",
		padding: 0,
	};

	return (
		<>
			<List style={flexContainer}>
				<ListItem>
					hi
				</ListItem>
				<ListItem>
					<StyledSearch isVisible={searchActive}>
						<Box className='nav--right__search'>
							<TextField
								className='search-bar'
								placeholder='Search MindTalk'
								autoFocus
							/>
							<IconButton onClick={toggleSearchActivity}>
								{searchActive ? (
									<CloseIcon size='small' />
								) : (
									<SearchIcon size='small' />
								)}
							</IconButton>
						</Box>
					</StyledSearch>
				</ListItem>
				<ListItem>
					<Box className='nav--right__actionsMenu'>
						<Tooltip title='Account Settings'>
							<IconButton
								size='small'
								onClick={handleIconClick}
								type={"button"}
								className='nav--right__actionsMenu__btn'
							>
								<Avatar className='av--right__actionsMenu__avatar' />
							</IconButton>
						</Tooltip>
					</Box>
				</ListItem>
			</List>
		</>
	);
}

export default LoggedIn;
