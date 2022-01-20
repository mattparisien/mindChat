import React from "react";
import Lottie from "react-lottie";
import animationData from "../../../../assets/lotties/success-check.json";

function Success() {
	const defaultOptions = {
		loop: false,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	return (
		<div className='Success success-card'>
			<Lottie options={defaultOptions} height={"100%"} width={"100%"} />
		</div>
	);
}

export default Success;
