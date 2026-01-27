import {Button, Card, Container, Row} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Biersortiment = () => {
    const [biersortiment, setUsers] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/biersortiment')
        .then(response => {
          setUsers(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the users!', error);
        });
    }, []);

    return ( 
    <Container>
      <h1>Biersortiment</h1>
      <Row classNAme="align-items-center py-2">
        {biersortiment.map(biersortiment => (
           <Card key={biersortiment.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={biersortiment.biersorte_image} />
            <Card.Img variant="top" src={biersortiment.pfand_image} />
            <Card.Body>
                <Card.Title>{biersortiment.biersorte}</Card.Title>
                <Card.Text>Pfand: {biersortiment.pfand}</Card.Text>
                <Card.Text>Volumen: {biersortiment.volumen} Liter</Card.Text>
                <Card.Text>Pries: {biersortiment.preis} €</Card.Text>
              <Button variant="primary">Bestellen</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
};

export default Biersortiment;