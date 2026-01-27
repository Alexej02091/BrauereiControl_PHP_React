import {Nav, Container, Row, Col, Button} from 'react-bootstrap';

function Header() {

    return(
        <Container>
          <Row className="align-items-center py-2">
            <Col>
              <h3 style={{ margin: 0 }}>Irtysch GmbH</h3>
            </Col>
            <Col className="text-end">
              <Button variant="primary" className="me-2">Login</Button>
            </Col>
          </Row>
        

     
     <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Lager</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Neuer Auftrag</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-3">Aktuele Aufträge</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    );
}

export default Header