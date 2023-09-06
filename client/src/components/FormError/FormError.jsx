import Alert from 'react-bootstrap/Alert'

const FormError = ({ children }) => {
    return (
        <Alert variant={'warning'} style={{ textAlign: 'center', fontSize: '.9em' }}>
            {children}
        </Alert>
    )
}

export default FormError