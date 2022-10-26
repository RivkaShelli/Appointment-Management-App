import './App.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Appointments from './components/Appointments';
import AddAppointment from './components/AddAppointment';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Appointment Management</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="Appointments">Appointments</Nav.Link>
            <Nav.Link href="Add">Add Appointment</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <BrowserRouter>

        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Appointments" element={<Appointments />} />
            <Route path="Add" element={<AddAppointment />} />
          </Routes>
        </Container>

      </BrowserRouter>
    </div>
  );
}

export default App;
