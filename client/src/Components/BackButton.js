import styled from 'styled-components';

import PrimaryButton from '../Styles/Button.style';

const StyledBackButton = styled(PrimaryButton)`
  background-color: rgba(0, 0, 0, 0.3);
  font-size: ${(props) => (props.size === 'small' ? '1.5em' : '2.5em')};
  padding: ${(props) => (props.size === 'small' ? '0.5rem 1rem 0.6rem 1rem' : '1rem 4rem 1.2rem 4rem')};
  font-weight: bold;
  width: auto;
  border-width: ${(props) => (props.size === 'small' ? '1.5px' : null)};

  &:hover {
    box-shadow: none;
    background-color: black;
    cursor: pointer;
  }
`;

const BackButton = ({ size, handleBackButton }) => {
  return (
    <div>
      <StyledBackButton size={size} onClick={() => handleBackButton()}>
        &#x2190;
      </StyledBackButton>
    </div>
  );
};

export default BackButton;
