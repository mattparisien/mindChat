import React, { useState } from "react";
import Register from "./Views/Register/Register/Register";
import CloseButton from "./CloseButton";
import LogIn from "./Views/LogIn/LogIn";

function ModalCard({ toggleModalVisibility, view }) {
	const buttonSize = "small";
	const buttonStyle = "outline";

	return (
		<div className='modal-card-container'>
			<CloseButton
				className={"CloseButton"}
				toggleModalVisibility={toggleModalVisibility}
			/>
			{view === "register" && <Register /> }
			{view === "logIn" && <LogIn /> }
		</div>
	);
}

export default ModalCard;
