import React from "react";
import styled from "styled-components";

const StyledContainerNarrow = styled.div`
	margin: 0 700px;
	height: 100%;
`;

function ContainerNarrow({ children }) {
	return (
		<StyledContainerNarrow className='ContainerNarrow'>
			{children}
		</StyledContainerNarrow>
	);
}

export default ContainerNarrow;
