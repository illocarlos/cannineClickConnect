import './Footer.css'
import { useContext } from "react";
import { ThemeContext } from "../../contexts/theme.context";
const Footer = () => {

    const { theme, switchTheme } = useContext(ThemeContext)

    return (
        <footer bg={theme === 'dark' ? 'light' : 'dark'} data-bs-theme={theme === 'dark' ? 'light' : 'dark'}>
            heeuuuuuuu soy el footer
        </footer>
    )

}
export default Footer