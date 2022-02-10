const ThemeButton = ({menuPicker, setMenuPicker, theme, handleThemeButton} ) => {

    return (
        <div>

        <button onClick={() => handleThemeButton (theme)}>{theme}</button>

        </div>

    )

};

export default ThemeButton