import { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import useSound from 'use-sound';

// Components
import CardContainer from './CardContainer';
import EndScreen from './EndScreen';
import BackButton from '../Components/BackButton';
import TurnsLeft from '../Components/TurnsLeft';

// Images
import cardBackBlue from '../Images/CardBlue.jpg';
import cardBackGreen from '../Images/CardGreen.jpg';
import cardBackOrng from '../Images/CardOrng.jpg';
import cardBackRed from '../Images/CardRed.jpg';

// Sounds
import Pop from '../Sounds/pop.mp3';
import Correct from '../Sounds/success.mp3';
import Incorrect from '../Sounds/incorrect.mp3';
import Win from '../Sounds/win.mp3';

// Styles
import { AnimationFadeIn } from '../Styles/Animations';

const Model = styled.div`
  z-index: auto;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);

  div {
    margin: auto;
    transform: translate(0%, 50%);
  }
`;

const BackButtonContainer = styled.div`
  z-index: 100;
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const TurnsLeftContainer = styled.div`
  z-index: 100;
  position: absolute;
  right: 1rem;
  top: 0.5rem;
`;

const getCardBack = (themeName) => {
  switch (themeName) {
    case 'Animals':
      return cardBackOrng;
    case 'Food':
      return cardBackRed;
    case 'Locations':
      return cardBackBlue;
    default:
      return cardBackGreen;
  }
};

const getMaxTurns = (cardsLength) => {
  if (cardsLength > 30) return 60;
  if (cardsLength > 16) return 40;
  if (cardsLength > 8) return 30;
  return 0;
};

const GameContainer = ({ cardsToDisplay, themeName, handleBackButton }) => {
  const { width, height } = useWindowSize();

  const [flippedCards, setFlippedCards] = useState(
    new Array(cardsToDisplay.length).fill(false)
  );
  const [chosenCards, setChosenCards] = useState([]);
  const [gameComplete, setGameComplete] = useState(false);
  const [turns, setTurns] = useState(0);
  const [endingScenario, setEndingScenario] = useState('');

  const maxTurns = getMaxTurns(cardsToDisplay.length);

  const [clickSound] = useSound(Pop);
  const [correctSound] = useSound(Correct);
  const [incorrectSound] = useSound(Incorrect);
  const [winSound] = useSound(Win);

  const checkGameCompletion = () => {
    if (
      flippedCards.every((v) => v) &&
      !gameComplete &&
      (maxTurns === 0 || turns < maxTurns)
    ) {
      setTimeout(() => {
        setGameComplete(true);
        setEndingScenario('win');
        winSound();
      }, 680);
    } else if (
      turns >= maxTurns &&
      !gameComplete &&
      cardsToDisplay.length > 8
    ) {
      setGameComplete(true);
      setEndingScenario('lose');
    }
  };

  const checkChosenCards = () => {
    if (chosenCards.length === 2) {
      const [firstCard, secondCard] = chosenCards;
      if (firstCard.label === secondCard.label) {
        setChosenCards([]);
        setTimeout(correctSound, 680);
      } else {
        setTimeout(() => {
          setFlippedCards((prev) => {
            const newFlippedCards = [...prev];
            newFlippedCards[firstCard.id] = false;
            newFlippedCards[secondCard.id] = false;
            return newFlippedCards;
          });
          setChosenCards([]);
          incorrectSound();
        }, 680);
      }
    }
  };

  useEffect(checkGameCompletion, [
    flippedCards,
    gameComplete,
    maxTurns,
    turns,
    winSound,
    cardsToDisplay.length,
  ]);
  useEffect(checkChosenCards, [chosenCards, correctSound, incorrectSound]);

  const onCardClick = useCallback(
    (id, label) => {
      if (chosenCards.length < 2 && !flippedCards[id]) {
        setFlippedCards((prev) => {
          const newFlippedCards = [...prev];
          newFlippedCards[id] = true;
          return newFlippedCards;
        });
        setChosenCards((prev) => [...prev, { id, label }]);
        if (chosenCards.length === 1) {
          setTurns((prev) => prev + 1);
        }
        clickSound();
      }
    },
    [chosenCards.length, flippedCards, clickSound]
  );

  const onRetryClick = useCallback(() => {
    setFlippedCards(new Array(cardsToDisplay.length).fill(false));
    setTurns(0);
    setGameComplete(false);
    setEndingScenario('');
    setChosenCards([]);
  }, [cardsToDisplay.length]);

  const cardBack = getCardBack(themeName);

  return (
    <div>
      <AnimationFadeIn>
        <BackButtonContainer>
          {!gameComplete && (
            <BackButton size={'small'} handleBackButton={handleBackButton} />
          )}
        </BackButtonContainer>

        <TurnsLeftContainer>
          {maxTurns > 0 && !gameComplete && (
            <TurnsLeft turns={turns} maxTurns={maxTurns} />
          )}
        </TurnsLeftContainer>
      </AnimationFadeIn>

      <CardContainer
        cardsToDisplay={cardsToDisplay}
        cardBack={cardBack}
        flippedCards={flippedCards}
        onCardClick={onCardClick}
      />

      {gameComplete && (
        <Model>
          {endingScenario === 'win' && (
            <Confetti
              width={width}
              height={height}
              gravity={0.25}
              numberOfPieces={400}
            />
          )}
          <EndScreen
            turns={turns}
            onRetryClick={onRetryClick}
            endingScenario={endingScenario}
            handleBackButton={handleBackButton}
          />
        </Model>
      )}
    </div>
  );
};

export default GameContainer;
