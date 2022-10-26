import { useState } from "react";
import { Button, Form, Table } from "react-bootstrap";
import { actions } from "../actions";
import AppTable from "./AppTable";
function Appointments() {

    const [team, setTeam] = useState<any>('');

    const [appArr, setAppArr] = useState<any[]>([]);

    return (
        <>

            <br />
            <Form.Select onChange={(e) => {
                e.preventDefault();
                setTeam(e.target.value);
            }}>
                <option>Select Team</option>
                <option value='1'>UI Team</option>
                <option value='2'>Mobile Team</option>
                <option value='3'>React Team</option>
                <option value='4'>Web Team</option>
                <option value='5'>FullStack Team</option>
            </Form.Select>
            <br />
            <Button type="submit" onClick={(e) => {
                e.preventDefault();
                actions.getAppsByTeam(team).then((res: any[]) => setAppArr(res));
                console.log(appArr);

            }}>Select</Button>
            <br />
            {appArr.length == 0 ? <></> : <AppTable teamApp={appArr} />}
           
        </>
    )
}

export default Appointments;