import { createContext, useEffect, useState } from "react"
import authService from '../services/auth.service'


const AuthContext = createContext()

function AuthProviderWrapper(props) {

    const [loggedUser, setLoggedUser] = useState(null)
    const [isLoading, setIsLading] = useState(true)


    const authenticateUser = () => {

        const token = localStorage.getItem('authToken')

        if (token) {
            authService
                .verify(localStorage.getItem('authToken'))
                .then(response => {

                    setLoggedUser(response.data.loggedUser)
                    setIsLading(false)
                })
                .catch(err => console.log(err))
        } else {
            logout()
        }
    }

    const logout = () => {
        localStorage.removeItem('authToken')
        setLoggedUser(null)
        setIsLading(false)
    }

    const storeToken = authToken => localStorage.setItem('authToken', authToken)

    useEffect(() => {
        authenticateUser()
    }, [])

    return (
        <AuthContext.Provider value={{ loggedUser, authenticateUser, logout, storeToken, isLoading }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper }