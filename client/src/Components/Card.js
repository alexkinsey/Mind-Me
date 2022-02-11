import React, { useState } from 'react';
import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';

const CardBackground = styled.div`
  -webkit-box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.25);
`;

const Card = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <CardBackground>
          <img
          
           src="https://upload.wikimedia.org/wikipedia/commons/3/36/Playing_card_club_A.svg"
            onClick={() => setIsFlipped(!isFlipped)}
          />
        </CardBackground>

        <CardBackground>
          <img
          
            src="https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg"
            onClick={() => setIsFlipped(!isFlipped)}
          />
        </CardBackground>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
