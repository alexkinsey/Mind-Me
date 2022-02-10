import React from 'react';
import styled from 'styled-components';

import Card from '../Components/Card';

const Grid = styled.div`
  display: flex;
  gap: 1em;
`;

const CardContainer = () => {
  return (
    <Grid>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </ Grid>
  );
};

export default CardContainer;
