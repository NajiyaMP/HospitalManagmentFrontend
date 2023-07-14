import {Container,Nav,Navbar,NavDropdown,NavLink} from 'react-bootstrap';
// import { Route,Routes } from 'react-router-dom';
// import Admin from './Admin/Admin';
// import Neuro from "./Department/Neuro";
// import Cardio from './Department/Cardio';
// import General from './Department/General';
// import Ortho from './Department/Ortho';
// import Deps from './Departmenthead/Deps';
// import LogoutButton from './Logout';
// import RegistrationForm from './LOGIN/RegistrationForm';
// import LoginForm from './LOGIN/Login';



function Navigationbar() {


  
  return (
    <>
      <Navbar bg="dark" variant="dark"  sticky="top" fixed="top" expand="lg">
        <Container>
          <Navbar.Brand href="#home"></Navbar.Brand>

          <Nav className="me-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="/Admin">admin</Nav.Link>


            
            

            <NavDropdown title="Departments" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/neuro">Neurology</NavDropdown.Item>
              <NavDropdown.Item href="/Ortho">Orthopedics</NavDropdown.Item>
               <NavDropdown.Item href="/General"> General surgery </NavDropdown.Item>
               <NavDropdown.Item href="/Cardio">Cardiology</NavDropdown.Item>
            </NavDropdown>


            <Nav.Link href="/Deps">DepartmentHead</Nav.Link>
            <NavLink href="/logout"   >logout</NavLink>

          </Nav>
        </Container>
      </Navbar>
       
    

      
      
    </>
  );
}

export default Navigationbar;