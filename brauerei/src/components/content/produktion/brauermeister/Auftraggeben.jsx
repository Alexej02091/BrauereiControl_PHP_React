import {Form} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';

const Auftraggeben = () => {
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
        <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </Form.Select>
    );
};

export default Auftraggeben;