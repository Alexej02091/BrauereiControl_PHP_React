import {Button, Card, Container, Row, Col} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Bierlager = () => {
    const [bierlager, setUsers] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/bierlager')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the users!', error);
        });
    }, []);

    return (
    <div>
      <Container>
        <h1>Bierlager</h1>
          <Row className="align-items-center py-2" xs={1} sm={2} md={3} lg={4}>
            {bierlager.map(bierlager => (
               <Col key={bierlager.id} className="mb-2 ">
                <Card key={bierlager.id} 
                  style={{ 
                    width: '16rem', 
                    borderWidth: '3px', 
                    borderStyle: 'solid',
                    borderRadius: '25px' }}>
                  <Card.Body>
                    <Card.Title className="mb-1">Tanknummer {bierlager.tanknummer}</Card.Title>
                    <Card.Text className="mb-1">
                      <span style={{ marginRight: "66px" }}>Biersorte</span>
                      {bierlager.biersorte }
                    </Card.Text>
                    <Card.Text className="mb-1"> 
                      <span style={{ marginRight: "49px" }}>Braudatum</span>
                     {new Date(bierlager.braudatum).toLocaleDateString("de-DE")}
                    </Card.Text>
                    <Card.Text className="mb-1">
                      <span style={{ marginRight: "21px" }}>Aktuellemenge</span> 
                      {bierlager.aktuellemenge}
                    </Card.Text>
                    <Card.Text className="mb-1">
                      <span style={{ marginRight: "45px" }}>Temperatur</span>
                      {bierlager.temperatur}
                    </Card.Text>
                    <Card.Text className="mb-1">
                      <span style={{ marginRight: "70px" }}>Zustand</span>
                      {bierlager.zustand}
                      </Card.Text>
                    <Card.Text className="mb-1">
                      <span style={{ marginRight: "35px" }}>Stammwürze</span>
                      {bierlager.stammwürze}
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
    </div>
  );
};

export default Bierlager;