import { Link } from 'react-router-dom';

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
        
     <Nav>
      <Nav.Item>
        <Nav.Link href="/biersortiment">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="link-1">Lager</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/neuerauftrag">Neuer Auftrag</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="link-3">Aktuele Aufträge</Nav.Link>
      </Nav.Item>
    </Nav>
    </Container>
    );
}

export default Header