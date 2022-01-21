import styled from "styled-components";
import { FLEXCENTER } from "../../styles/global";

export const StyledEditor = styled.div`
	color: blue;
	font-size: ;
`;

export const StyledContainer = styled.div`
  height 100%;
  margin: 0 20vw;
  
  .new-post-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 300px;
  }

  .new-post-title {
    border: 0px;
    height: 4rem;
    font-size: 3rem;

    &:focus {
      outline: none;
    }
  }


`;
