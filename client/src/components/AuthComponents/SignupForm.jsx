import { useState, useContext } from "react"
import { Form, Button } from "react-bootstrap"
import authService from "../../services/auth.service"
import { useNavigate } from "react-router-dom"
import uploadServices from "../../services/upload.service"
import { MessageContext } from "../../contexts/message.context"
import Loader from "../Loader/Loader"
import FormError from '../../components/FormError/FormError';
import './SignupForm.css'

const SignupForm = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()
    const { emitMessage } = useContext(MessageContext)

    const [signupData, setSignupData] = useState({
        username: '',
        email: '',
        city: '',
        password: '',
        avatar: '',
        about: ''

    })


    const handleInputChange = e => {
        const { value, name } = e.target
        setSignupData({
            ...signupData,
            [name]: value
        })
    }

    const handleFormSubmit = e => {

        e.preventDefault()
        setIsLoading(true)

        authService
            .signup(signupData)
            .then(() => {
                emitMessage('welcome')
                navigate('/')
            })
            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })
            .finally(() => {
                setIsLoading(false);
            });
    }


    const handleFileUpload = e => {

        const formData = new FormData()

        for (let i = 0; i < e.target.files.length; i++) {
            formData.append('imagesData', e.target.files[i])
        }

        uploadServices
            .uploadimages(formData)
            .then(({ data }) => {
                setSignupData({
                    ...signupData,
                    avatar: data.cloudinary_urls
                })
            })
            .catch(err => console.log(err))
    }


    return (

        <Form style={{ textAlign: 'center' }} onSubmit={handleFormSubmit}>

            <Form.Group className="mb-3" controlId="username">
                <Form.Label className="fLabel">Name</Form.Label>
                <Form.Control type="text" value={signupData.username} onChange={handleInputChange} name="username" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="about">
                <Form.Label className="fLabel">About</Form.Label>
                <Form.Control type="text" value={signupData.about} onChange={handleInputChange} name="about" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="city">
                <Form.Label className="fLabel">City</Form.Label>
                <Form.Control type="text" value={signupData.city} onChange={handleInputChange} name="city" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="password">
                <Form.Label className="fLabel">Password</Form.Label>
                <Form.Control type="password" value={signupData.password} onChange={handleInputChange} name="password" />
            </Form.Group>


            <Form.Group className="mb-3" controlId="email">
                <Form.Label className="fLabel">Email</Form.Label>
                <Form.Control type="email" value={signupData.email} onChange={handleInputChange} name="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="avatar">
                <Form.Label className="fLabel">Avatar (URL)</Form.Label>
                <Form.Control type="file" multiple onChange={handleFileUpload} />
            </Form.Group>

            {isLoading ? (
                <Loader />
            ) : (
                <div className="d-grid">
                    <Button variant="dark" type="submit">Sign up</Button>
                </div>
            )}
            {errors.length > 0 && <FormError> {errors.map(elm => <p>{elm}</p>)}</FormError>}
        </Form>
    )
}

export default SignupForm
