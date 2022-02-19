import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import useSound from 'use-sound';

// Components
import CardContainer from './CardContainer';
import EndScreen from './EndScreen';
import BackButton from '../Components/BackButton';

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
import TurnsLeft from '../Components/TurnsLeft';

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
    transform: translate(0%, 75%);
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

const GameContainer = ({ cardsToDisplay, themeName, handleBackButton }) => {
  const { width, height } = useWindowSize();

  const [flippedCards, setFlippedCards] = useState(new Array(cardsToDisplay.length).fill(false));
  const [chosenCard1, setChosenCard1] = useState({ id: null, label: null });
  const [chosenCard2, setChosenCard2] = useState({ id: null, label: null });

  var startingMaxTurns = 0;
  if (cardsToDisplay.length > 30) {
    startingMaxTurns = 60;
  } else if (cardsToDisplay.length > 16) {
    startingMaxTurns = 40;
  } else if (cardsToDisplay.length > 8) {
    startingMaxTurns = 30;
  }

  const [gameComplete, setGameComplete] = useState(false);
  const [turns, setTurns] = useState(0);
  const [maxTurns, setMaxTurns] = useState(startingMaxTurns);
  const [endingScenario, setEndingScenario] = useState('');

  const [clickSound] = useSound(Pop);
  const [correctSound] = useSound(Correct);
  const [incorrectSound] = useSound(Incorrect);
  const [winSound] = useSound(Win);

  useEffect(() => {
    if (flippedCards.every((v) => v === true) && !gameComplete && (maxTurns === 0 || turns < maxTurns)) {
      console.log('win');
      setGameComplete(true);
      setEndingScenario('win');

      winSound();
      setTimeout(function () {
        winSound();
      }, 680);
    } else if (turns >= maxTurns && !gameComplete && cardsToDisplay.length > 8) {
      console.log('lose');
      setGameComplete(true);
      setEndingScenario('lose');
    }
  });

  useEffect(() => {
    if (chosenCard1.id !== null && chosenCard2.id !== null) {
      if (chosenCard1.label === chosenCard2.label) {
        setChosenCard2({ id: null, label: null });
        setChosenCard1({ id: null, label: null });

        setTimeout(function () {
          correctSound();
        }, 680);
      } else {
        setTimeout(function () {
          flippedCards[chosenCard2.id] = false;
          flippedCards[chosenCard1.id] = false;

          setFlippedCards(flippedCards);

          setChosenCard2({ id: null, label: null });
          setChosenCard1({ id: null, label: null });

          incorrectSound();
        }, 680);
      }
    }
  }, [chosenCard1, chosenCard2, flippedCards]);

  const onCardClick = (id, label) => {
    if (chosenCard1.id === null && chosenCard2.id === null && !flippedCards[id]) {
      setChosenCard1({ id: id, label: label });
      flippedCards[id] = true;

      setFlippedCards(flippedCards);

      clickSound();
    } else if (chosenCard2.id === null && chosenCard1.id !== null && !flippedCards[id]) {
      setChosenCard2({ id: id, label: label });
      flippedCards[id] = true;

      setFlippedCards(flippedCards);
      setTurns(turns + 1);

      clickSound();
    }
  };

  const onRetryClick = () => {
    setFlippedCards(new Array(cardsToDisplay.length).fill(false));
    setTurns(0);
    setGameComplete(false);
    setEndingScenario('');
  };

  let cardBack;
  if (themeName === 'Animals') {
    cardBack = cardBackOrng;
  } else if (themeName === 'Food') {
    cardBack = cardBackRed;
  } else if (themeName === 'Locations') {
    cardBack = cardBackBlue;
  } else if (themeName === 'Celebs') {
    cardBack = cardBackGreen;
  }

  return (
    <div>
      <AnimationFadeIn>
        <BackButtonContainer>
          {gameComplete ? null : <BackButton size={'small'} handleBackButton={handleBackButton} />}
        </BackButtonContainer>

        <TurnsLeftContainer>
          {maxTurns > 0 && !gameComplete ? <TurnsLeft turns={turns} maxTurns={maxTurns} /> : null}
        </TurnsLeftContainer>
      </AnimationFadeIn>

      <CardContainer
        cardsToDisplay={cardsToDisplay}
        cardBack={cardBack}
        flippedCards={flippedCards}
        onCardClick={onCardClick}
      />

      {gameComplete && endingScenario === 'win' ? (
          <Model>
            <Confetti width={width} height={height} gravity={0.25} numberOfPieces={400} />
            <EndScreen
              turns={turns}
              onRetryClick={onRetryClick}
              endingScenario={endingScenario}
              handleBackButton={handleBackButton}
            />
          </Model>
      ) : gameComplete && endingScenario === 'lose' ? (
        <Model>
          <EndScreen
            turns={turns}
            onRetryClick={onRetryClick}
            endingScenario={endingScenario}
            handleBackButton={handleBackButton}
          />
        </Model>
      ) : null}
    </div>
  );
};

export default GameContainer;
