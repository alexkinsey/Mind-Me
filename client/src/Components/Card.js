import React, { useState } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

import cardBack from '../Images/Back.jpg';

const CardBackground = styled.div`
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  overflow: hidden;

  border: var(--medGrey) 0.5px solid;
  border-radius: 10px;
  height: 200px;
  width: 130px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const Card = ({ cardImg, cardLabel }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const onCardClick = () => { 
    setIsFlipped(!isFlipped)
  }


  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardBackground>
          <img src={cardBack} alt={cardLabel} onClick={() => onCardClick()} />
        </CardBackground>

        <CardBackground>
          <img src={cardImg} alt={cardLabel} onClick={() => onCardClick()} />
        </CardBackground>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
