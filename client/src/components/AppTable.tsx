import { Table } from "react-bootstrap";
import Appointment from "./Appointment";

function AppTable(props:any) {
    return (
        <>
        <h1>Team Appointments</h1>
            <Table bordered  size="sm">
                <thead>
                    <tr>
                        <th>From</th>
                        <th>To</th>
                        <th>Description</th>
                        <th>Room</th>
                    </tr>
                </thead>
            <tbody>
                {props.teamApp.map((a: any, i:number) => <Appointment key={i} group_id={a.group_id} start_time={a.start_time} end_time={a.end_time} description={a.description} room={a.room} />)}
                </tbody>
        </Table>
    </>
    )
}

export default AppTable;