
import { useContext } from "react"
import { Toast, ToastContainer } from "react-bootstrap"
import { MessageContext } from "../../contexts/message.Context"



const UserMessage = () => {

    const { toastMessage, showToast, closeMessage } = useContext(MessageContext)
    return (

        <ToastContainer onClose={closeMessage} show={showToast}
            position="top-end" className="p-3" style={{ zIndex: 1 }}>
            <Toast>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body>{toastMessage}</Toast.Body>
            </Toast>
        </ToastContainer >


    )
}

export default UserMessage