import React, { useState } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

import cardBack from '../Images/Back.jpg';

const CardBackground = styled.div`
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);

  border-radius: 0px;

  img {
    width: 200px;
  }
`;

const Card = ({ cardImg, cardLabel }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardBackground>
          <img src={cardBack} alt={cardLabel} onClick={() => setIsFlipped(!isFlipped)} />
        </CardBackground>

        <CardBackground>
          <img src="https://drive.google.com/uc?id=13LIr3pOtNvoJ4pUggplDrv3FcUzRf9SF" alt={cardLabel} onClick={() => setIsFlipped(!isFlipped)} />
        </CardBackground>
        {/* <CardBackground>
          <img src={cardImg} alt={cardLabel} onClick={() => setIsFlipped(!isFlipped)} />
        </CardBackground> */}
      </ReactCardFlip>
    </div>
  );
};

export default Card;
