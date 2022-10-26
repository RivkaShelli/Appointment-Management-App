function Appointment(props:any) {
    return (
        <tr>
            <td>{ props.start_time}</td>
            <td>{props.end_time }</td>
            <td>{ props.description}</td>
            <td>{ props.room}</td>
        </tr>
    )
}

export default Appointment;