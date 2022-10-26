import { createRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { actions } from "../actions";

function AddAppointment() {

    function buildBody() {
        const bodyObj = {
            group_id: team,
            start_time: fromDateRef.current?.value,
            end_time: toDateRef.current?.value,
            description: descriptionRef.current?.value,
            room: roomRef.current?.value
        }
        return bodyObj;
    }
    let fromDateRef = createRef<HTMLInputElement>();
    let toDateRef = createRef<HTMLInputElement>();
    let descriptionRef = createRef<HTMLInputElement>();
    let roomRef = createRef<HTMLInputElement>();
    const [team, setTeam] = useState<any>('');



    return (
        <div>
            <h1>Add a new appointment:</h1>
            <Form>
                <Form.Select onChange={(e) => {
                    e.preventDefault();
                    setTeam(e.target.value);
                }} required>
                    <option>Select Team</option>
                    <option value='1'>UI Team</option>
                    <option value='2'>Mobile Team</option>
                    <option value='3'>React Team</option>
                    <option value='4'>Web Team</option>
                    <option value='5'>FullStack Team</option>
                </Form.Select>
                <Form.Group className="mb-3">
                    <Form.Label>From:</Form.Label>
                    <Form.Control type="datetime-local" ref={fromDateRef} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>To:</Form.Label>
                    <Form.Control type="datetime-local" ref={toDateRef} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Description:</Form.Label>
                    <Form.Control type="text" ref={descriptionRef} required />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Room:</Form.Label>
                    <Form.Control type="text" ref={roomRef} required />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={(e: any) => {
                    e.preventDefault();
                    actions.add(e, buildBody)
                }}>
                    Add Appointment
                </Button>
            </Form>
        </div>
    )
}

export default AddAppointment;