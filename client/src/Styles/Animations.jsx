import styled from 'styled-components';

export const AnimationFadeUp = styled.div`
  animation: fade-up 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: ${(props) => props.animationDelay};

  @keyframes fade-up {
    0% {
      transform: translateY(20px);
      opacity: 0;
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;

export const AnimationTitle = styled.div`
  display: inline;
  animation: flip-text 1s ease-in forwards;
  animation-delay: ${(props) => props.animationDelay};

  opacity: 0;

  @keyframes flip-text {
    0% {
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transition-timing-function: ease-in;
      opacity: 0;
    }
    40% {
      transform: perspective(400px) rotate3d(0, 1, 0, 0deg);
      transition-timing-function: ease-in;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: perspective(400px);
      opacity: 1;
    }
  }
`;
