import {Button, Card} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div>
      <h1>Biersortiment</h1>
        {biersortiment.map(biersortiment => (
           <Card key={biersortiment.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Biersorte {biersortiment.biersorte_id}</Card.Title>
                <Card.Text>Größe      {biersortiment.lieferform_id}</Card.Text>
                <Card.Text>Pries      {biersortiment.preis_id}</Card.Text>
              <Button variant="primary">Bestellen</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Biersortiment;