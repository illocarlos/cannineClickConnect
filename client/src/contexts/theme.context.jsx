import { createContext, useState } from "react";

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    const [theme, setTheme] = useState('light')
    const switchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {props.children}
        </ThemeContext.Provider>

    )
}

export { ThemeContext, ThemeProviderWrapper }