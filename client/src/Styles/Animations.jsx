import styled from 'styled-components'

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

export const TitleAnimation = styled.div`
  animation: move-text 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation-delay: ${(props) => props.animationDelay};

  @keyframes move-text {
    0% {
      transform: translateY(20px);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(20px);
    }
  }
`;
