import {Form, Container, Button} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Auftraggeben = () => {
    const [bierbrauen, setBierbrauen] = useState([]);
    const [biersorten, setBiersorten] = useState([]);
    // const [datum, setDatum] = useState();

    const [data, setData] = useState({
      datum: "",
      tank: "",
      sorte: ""
    });

    const handleChange = (e) => {
      const value = e.target.value;
        setData({
          ...data,
          [e.target.name]: value
        });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      const userData = {
        tank: data.tanknummer,
        sorte: data.sorte,
        datum: data.datum
      };

      axios.post("http://localhost:3001/auftraggeben", userData).then((response) => {
        console.log(response.status, response.data.token);
      });
    }

    useEffect(() => {
      axios.get('http://localhost:3001/leerhauptgaertank')
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
          <Form onSubmit={handleSubmit}>
            <h2>Bierbrauen</h2>
            <Form.Select  
              aria-label="Default select example" style={{ width: '18rem' }}
              name = "tanknummer"
              
              onChange={handleChange}
              required
              >
                <option key="freie-tank">Freie Tank auswählen</option>
                  {bierbrauen.map(bierbrauen => (
                    <option key={bierbrauen.tanknummer} value={bierbrauen.tanknummer}>{bierbrauen.tanknummer}</option>            
                  ))}
            </Form.Select>
            <Form.Select
              value={data.sorte}
              name="sorte"
              onChange={handleChange}
              required 
              aria-label="Default select example" style={{ width: '18rem' }}
              >
                <option key="sorte">Sorte auswählen</option>
                    {biersorten.map(biersorten => (
                      <option key={biersorten.bezeichnung} >
                        {biersorten.bezeichnung}</option>
                    ))}
            </Form.Select>
            <Form.Control
                type="date"
                name="datum"
                value={data.datum}
                onChange={handleChange}
                style={{ width: '18rem' }}
            />
            <Button 
              type="submit"
              variant="primary"
            >Auftrag geben</Button>
          </Form> 
        </Container>
    );
};

export default Auftraggeben;