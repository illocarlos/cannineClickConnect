import { createContext, useEffect, useState } from "react";

const ThemeContext = createContext()

function ThemeProviderWrapper(props) {

    const [theme, setTheme] = useState('light')
    const switchTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

    useEffect(() => {
        if (theme == "light") {
            document.documentElement.className = "light"

        } else {
            document.documentElement.className = "dark"
        }
    }, [theme])
    return (
        <ThemeContext.Provider value={{ theme, switchTheme }}>
            {props.children}
        </ThemeContext.Provider>

    )
}

export { ThemeContext, ThemeProviderWrapper }