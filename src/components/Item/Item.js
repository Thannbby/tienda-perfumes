import './Item.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


//  export const Item = ({info}) =>{
//      return(
//   <div className='film'>
//   <div >
//     <img src={info.pictureUr1} alt={info.title}/>
//     <h4>{info.title}</h4>
//     <h5>{info.price}</h5>
//   </div>
//    </div>
//  )
//  }



export const Item = ({info}) => {
    return (
          <Card style={{ width: '18rem' }} className='film'>
          <Card.Img src={info.pictureUr1} alt={info.title} />
          <Card.Body>
            <Card.Title>{info.title}</Card.Title>
            <Card.Text>
            {info.price}
            </Card.Text>
            <Button variant="primary">Comprar</Button>
          </Card.Body>
        </Card>
    );
  }