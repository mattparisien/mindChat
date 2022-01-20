import React from "react";
import {
	Menu,
	MenuItem,
	Avatar,
	ListItemIcon,
	Divider,
} from "@material-ui/core";

function AccountMenu({ open, setAnchorEl }) {
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<Menu
			id='account-menu'
			onClose={handleClose}
			onClick={handleClose}
			open={open}
		>
			<MenuItem>
				<Avatar /> Profile
			</MenuItem>
			<MenuItem>
				<Avatar /> My account
			</MenuItem>
			<Divider />
			<MenuItem>
				<ListItemIcon></ListItemIcon>
				Add another account
			</MenuItem>
			<MenuItem>
				<ListItemIcon></ListItemIcon>
				Settings
			</MenuItem>
			<MenuItem>
				<ListItemIcon></ListItemIcon>
				Logout
			</MenuItem>
		</Menu>
	);
}

export default AccountMenu;
