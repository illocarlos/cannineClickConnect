import './Footer.css'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
const Footer = () => {

    const { theme, switchTheme } = useContext(ThemeContext)

    return (
        <footer bg={theme === 'dark' ? 'light' : 'dark'} data-bs-theme={theme === 'dark' ? 'light' : 'dark'}>
            - WebMad-0723 Ironhack -
        </footer>
    )

}
export default Footer