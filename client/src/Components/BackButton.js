import styled from 'styled-components';

import PrimaryButton from '../Styles/Button.style'

const StyledBackButton = styled(PrimaryButton)`
  background-color: rgba(0,0,0,0.3);
  font-size: 2.5em;
  padding: 1rem 4rem 1.2rem 4rem;
  font-weight: bold;
  width: auto;

  &:hover {
    box-shadow: none;
    background-color: black;
    cursor: pointer;
  }
`;

const BackButton = ({ handleBackButton }) => {
  return (
    <div>
      <StyledBackButton onClick={() => handleBackButton()}>&#x2190;</StyledBackButton>
    </div>
  );
};

export default BackButton;
