import { useContext, useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import { MessageContext } from "../../contexts/message.context"
import './LoginForm.css'


const LoginForm = () => {
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { emitMessage } = useContext(MessageContext)
    const { authenticateUser, storeToken } = useContext(AuthContext)
    const { loggedUser } = useContext(AuthContext)

    const [loginData, setLoginData] = useState({

        email: '',
        password: '',

    })


    const handleInputChange = e => {
        const { value, name } = e.target
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {
        e.preventDefault()

        authService

            .login(loginData)
            .then(({ data }) => {
                emitMessage('welcome')
                storeToken(data.authToken)
                authenticateUser()
            })
            .catch(err => {
                setErrors(err.response.data.message)

            })
    }

    useEffect(() => {
        loggedUser && navigate(`/user/${loggedUser._id}`)
    }, [loggedUser])

    return (
        <div className="logPage">
            <Form className="logForm" onSubmit={handleSubmit}>

                <Form.Group className="mb-3" controlId="email">
                    <Form.Label className=" fLabel d-flex justify-content-center" >Email</Form.Label>
                    <Form.Control type="email" value={loginData.email} onChange={handleInputChange} name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label className="fLabel d-flex justify-content-center"  >Password</Form.Label>
                    <Form.Control type="password" value={loginData.password} onChange={handleInputChange} name="password" />
                </Form.Group>

                <div className="d-grid">
                    <Button variant="dark" type="submit">Access</Button>
                </div>
                {errors && <p className="mt-3" style={{ backgroundColor: 'rgba(255, 0, 0, 0.5)', color: 'black', fontSize: "1.3rem", textAlign: "center" }}>{errors}</p>}


            </Form>
        </div>
    )
}

export default LoginForm