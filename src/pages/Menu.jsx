import '../css/cima.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu() {
  const Logo = 'https://cdn.discordapp.com/attachments/826586755229810688/1103297076386865242/Design_sem_nome__1_-removebg-preview.png'

  return (
    <Navbar bg="light" expand="lg">
      <Container>
      <div className="head"><img width={100} height={100} src={Logo}/></div>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/produtos">Produtos</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

   export default Menu
   