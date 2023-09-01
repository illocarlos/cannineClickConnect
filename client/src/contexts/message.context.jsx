import { createContext, useState } from 'react'



const MessageContext = createContext()

function MessageProviderWrapper(props) {

    const [showToast, setShowToast] = useState(true)
    const [toastMessage, setToastMessage] = useState('Mensaje de ejemplo')

    const emitMessage = text => {
        setToastMessage(text)
        setShowToast(true)
    }

    const closeMessage = () => setShowToast(false)

    return (
        <MessageContext.Provider value={{ toastMessage, emitMessage, showToast, closeMessage }}>
            {props.children}
        </MessageContext.Provider>
    )
}

export { MessageContext, MessageProviderWrapper }
