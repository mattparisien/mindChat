import React from "react";
import { StyledModal } from "./styles/styles";
import ModalCard from "./ModalCard";
import classNames from "classnames";

function Modal({ isActive, view, toggleRegisterModal }) {
	const modalClass = classNames("RegisterModal", {
		isActive: isActive,
		isOff: !isActive,
	});

	return (
		<StyledModal isActive={isActive} className={modalClass}>
			<ModalCard toggleModalVisiblity={toggleRegisterModal} view={view}/>
			<div className='overlay' onClick={toggleRegisterModal}></div>
		</StyledModal>
	);
}

export default Modal;
