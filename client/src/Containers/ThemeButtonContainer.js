import styled from 'styled-components';

import BackButton from '../Components/BackButton';
import ThemeButton from '../Components/ThemeButton';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThemeButtonContainer = ({ handleThemeButton }) => {
  return (
    <Wrapper>
      <ThemeButton theme={'Animals'} handleThemeButton={handleThemeButton} />
      <ThemeButton theme={'Celebs'} handleThemeButton={handleThemeButton} />
      <ThemeButton theme={'Locations'} handleThemeButton={handleThemeButton} />
      <ThemeButton theme={'Food'} handleThemeButton={handleThemeButton} />
    </Wrapper>
  );
};

export default ThemeButtonContainer;
