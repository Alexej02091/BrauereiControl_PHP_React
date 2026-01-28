import {Form, Container, Button} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Auftraggeben = () => {
    const [bierbrauen, setBierbrauen] = useState([]);
    const [biersorten, setBiersorten] = useState([]);
    
    const [datum, setDatum] = useState();
    const [tank, setTank] = useState();
    const [sorte, setSorte] = useState();

    useEffect(() => {
      axios.get('http://localhost:3001/bierbrauen')
        .then(response => {
          setBierbrauen(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the users!', error);
        });
    }, []);

    useEffect(() => {
      axios.get('http://localhost:3001/biersorten', )
        .then(response => {
          setBiersorten(response.data);
        })
        .catch(error => {
          console.error('There was an error fetching the users!', error);
        });
    }, []);

    return (
        <Container>
            <h2>Bierbrauen</h2>
            <Form.Select aria-label="Default select example" style={{ width: '18rem' }}>
                <option>Freie Tank auswählen</option>
                    {bierbrauen.map(bierbrauen => (
                        <option 
                          key={bierbrauen.tanknummer} 
                          value={bierbrauen.tanknummer}
                          onChange={e => setTank(e.target.value)}>
                            Tank: {bierbrauen.tanknummer}</option>
                            
                    ))}
            </Form.Select>
            <Form.Select aria-label="Default select example" style={{ width: '18rem' }}>
                <option>Sorte auswählen</option>
                    {biersorten.map(biersorten => (
                        <option 
                          key={biersorten.biersorten_id} 
                          value={biersorten.bezeichnung}
                          onChange={e=> setSorte(e.target.value)}>
                            {biersorten.bezeichnung}</option>
                    ))}
            </Form.Select>
            <Form.Control
                type="date"
                value={datum}
                onChange={(e) => setDatum(e.target.value)}
                style={{ width: '18rem' }}
            />
            <Button 
              variant="primary"
            >Auftrag geben</Button> 
        </Container>
    );
};

export default Auftraggeben;