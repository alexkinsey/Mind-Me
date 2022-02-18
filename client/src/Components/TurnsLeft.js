import styled from 'styled-components'

const Wrapper = styled.div`
  position: fixed;
  right: 1rem;
  top: 0;
`

const TurnsLeft = ({turns, maxTurns}) => {
  return (
    <Wrapper>
      <p>{maxTurns - turns} turns left</p>
    </Wrapper>
  );
};

export default TurnsLeft;
