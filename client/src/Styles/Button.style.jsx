import styled from "styled-components";

const PrimaryButton = styled.button`
  background-color: transparent;
  color: white;
  font-size: 20px;
  border-radius: 10px;
  padding: 2rem 4rem;
  border: 2px solid white;
  text-align: center;
  width: 16em;

  &:hover {
    background-color: ${(props) => props.highlightColour};
    color: white;
    cursor: pointer;
    box-shadow: 0 0 15px ${(props) => props.highlightColour};
  }
`;

export default PrimaryButton