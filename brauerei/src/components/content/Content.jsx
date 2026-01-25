import {Button, Card} from 'react-bootstrap';

import {BierListe} from '../../mockdatabase/BierListe';
import Bierlager from './Bierlager';

function Content() {
  if (BierListe.length === 0) {
    return <div> Kein Bier gefunden</div>
  } else {
      return (
        <>
          {BierListe.map((bier) =>(
          <Card key={bier.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{bier.titel}</Card.Title>
              <Card.Text>{bier.preis}</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          ))}
        < Bierlager />
        </>
      );
    }
}

export default Content