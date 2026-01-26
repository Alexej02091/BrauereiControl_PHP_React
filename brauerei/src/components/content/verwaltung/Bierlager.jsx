import {Button, Card} from 'react-bootstrap'
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
      <h1>Bierlager List</h1>
        {bierlager.map(bierlager => (
           <Card key={bierlager.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>Tanknummer   {bierlager.tanknummer}</Card.Title>
                <Card.Text>Biersorteid   {bierlager.biersorteid}</Card.Text>
                <Card.Text>Braudatum     {bierlager.braudatum}</Card.Text>
                <Card.Text>Aktuellemenge {bierlager.aktuellemenge}</Card.Text>
                <Card.Text>Temperatur    {bierlager.temperatur}</Card.Text>
                <Card.Text>Zustand       {bierlager.zustand}</Card.Text>
                <Card.Text>Stammwürze    {bierlager.stammwürze}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default Bierlager;