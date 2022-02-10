import ThemeButton from "../Components/ThemeButton";


const ThemeButtonContainer = ({menuPicker, setMenuPicker, handleThemeButton}) => {


    return (
        <>
        <ThemeButton menuPicker ={menuPicker} setMenuPicker ={setMenuPicker} theme ={'Animals'} handleThemeButton = {handleThemeButton}/>
        <ThemeButton menuPicker ={menuPicker} setMenuPicker ={setMenuPicker} theme = {'Celebs'} handleThemeButton = {handleThemeButton}/>
        <ThemeButton menuPicker ={menuPicker} setMenuPicker ={setMenuPicker} theme = {'Locations'} handleThemeButton = {handleThemeButton}/>
        <ThemeButton menuPicker ={menuPicker} setMenuPicker ={setMenuPicker} theme = {'Food'} handleThemeButton = {handleThemeButton}/>
        </>
    )
}


export default ThemeButtonContainer