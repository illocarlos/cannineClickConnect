import { Container, Row, Col } from 'react-bootstrap'
import LoginForm from '../../../components/AuthComponents/Loginform'

const LoginPage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1 className='mt-3 d-flex justify-content-center'>Access</h1>

                    <hr />

                    <LoginForm />

                </Col>
            </Row>

        </Container>
    )
}

export default LoginPage