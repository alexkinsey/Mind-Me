import GameContainer from "../Containers/GameContainer";
import MainMenuButton from "./MainMenuButton";
import MindMe from "../MindMe";



const BackButton = (handleBackButton) => {
  return (
    <div>
     <button onClick={() => handleBackButton()}>{}back</button>
      </div>
  );
};

export default BackButton;
