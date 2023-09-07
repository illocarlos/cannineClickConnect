import { Card, Row, Col } from "react-bootstrap"




const AttendeeCard = ({ attendee }) => {

    return (
        <Card style={{ width: '18rem', border: "2px solid black" }} >

            <Card.Body>
                <Row>
                    <Col>
                        <img src={attendee.avatar[0]} alt="" />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}
export default AttendeeCard