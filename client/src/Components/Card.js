import styled from 'styled-components';
import ReactCardFlip from 'react-card-flip';
import { useCallback, useState } from 'react';

// Styles
import { AnimationFadeUp } from '../Styles/Animations';

const CardBackground = styled.div`
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

const CardLabel = styled.span`
  text-align: center;
  color: var(--white);
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, -50%);
  text-shadow: 0 0 8px rgba(0, 0, 0, 1);
`;

const Card = ({ cardBack, id, cardImg, cardLabel, isFlipped, onCardClick }) => {
  const [imgError, setImgError] = useState(false);

  const handleClick = useCallback(() => {
    onCardClick(id, cardLabel);
  }, [id, cardLabel, onCardClick]);

  const handleImgError = () => {
    setImgError(true);
  };

  return (
    <AnimationFadeUp animationDelay={`${id * 50}ms`}>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        className="CardFlip"
      >
        <CardBackground>
          <img src={cardBack} alt={cardLabel} onClick={handleClick} />
        </CardBackground>

        <CardBackground>
          <CardLabel>{cardLabel}</CardLabel>
          {imgError || !cardImg ? (
            <div
              style={{ background: 'lightgrey', width: '100%', height: '100%' }}
            />
          ) : (
            <img
              src={cardImg}
              alt={cardLabel}
              onClick={handleClick}
              onError={handleImgError}
            />
          )}
        </CardBackground>
      </ReactCardFlip>
    </AnimationFadeUp>
  );
};

export default Card;
