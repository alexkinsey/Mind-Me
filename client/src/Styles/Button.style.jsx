import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: transparent;
  color: white;

  padding: 2rem 4rem;
  width: 16em;
  border: 2px solid white;
  border-radius: 10px;

  font-size: 20px;
  text-align: center;
  
  :hover {
    cursor: pointer;
    background-color: ${(props) => props.highlightColour};
    box-shadow: 0 0 15px ${(props) => props.highlightColour};
  }

  :active {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
