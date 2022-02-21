import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: transparent;
  color: white;

  width: 14em;
  height: 4.5em;
  border: 2px solid white;
  border-radius: 0.5em;

  font-size: 1.25em;
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
