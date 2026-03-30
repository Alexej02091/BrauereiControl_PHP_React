import { Container, Table} from 'react-bootstrap'
import { useEffect, useState } from 'react';
import axios from 'axios';

const AktuelleAuftraege = () => {
    const [brauplan, setUsers] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:3001/brauenplan')
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
        <h1>Brauplan</h1>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Sorte</th>
                <th>Tank nummer</th>
                <th>Menge</th>
                <th>Brauer</th>
                <th>Helfer</th>
                <th>Datum</th>
                </tr>
            </thead>
            <tbody>
                {brauplan.map(brauplan => (
                    <tr>  
                    <td>{brauplan.brau_id}</td>
                    <td>{brauplan.sorte}</td>
                    <td>{brauplan.tank_id}</td>
                    <td>{brauplan.menge}</td>
                    <td>{brauplan.brauer}</td>
                    <td>{brauplan.helfer}</td>
                    <td>{brauplan.datum}</td>
                    </tr>
                ))}
            </tbody>
            </Table>
        </Container>
    </div>
  );
};

export default AktuelleAuftraege;