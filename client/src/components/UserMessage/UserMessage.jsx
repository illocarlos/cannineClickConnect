
import { useContext } from "react"
import { Toast, ToastContainer } from "react-bootstrap"
import { MessageContext } from "../../contexts/message.context"



const UserMessage = () => {

    const { toastMessage, showToast, closeToast } = useContext(MessageContext)





    return (
        <ToastContainer position="top-center">
            <Toast onClose={closeToast} show={showToast} delay={3000} autohide >
                <Toast.Header>
                    <strong className="me-auto">atention</strong>
                </Toast.Header>
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
        </ToastContainer>
    )

}

export default UserMessage

