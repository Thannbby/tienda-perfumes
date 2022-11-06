import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


export const Item = ({info}) => {
    return (
          <Card style={{ width: '18rem' }} className='film'>
          <Card.Img src={info.pictureUr1} alt={info.title} />
          <Card.Body>
            <Card.Title>{info.title}</Card.Title>
            <Card.Text>
            ${info.price}
            </Card.Text>
            <Link to={`/item/${info.id}`}>
                  <Button variant="primary">Ver Detalle</Button>
            </Link>
          </Card.Body>
        </Card>
    );
  }