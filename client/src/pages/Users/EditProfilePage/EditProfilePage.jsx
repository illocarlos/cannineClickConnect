import { Container } from "react-bootstrap"
import EditUserForm from "../../../components/UserComponents/EditUserForm/EditUserForm"

const EditProfileUser = () => {

    return (
        <div className="d-flex justify-content-center">
            <Container>
                <h1>Edit your profile.</h1>
                <EditUserForm />
            </Container >
        </div >
    )

}

export default EditProfileUser