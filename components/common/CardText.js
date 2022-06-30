import Card from 'react-bootstrap/Card';

export default function CardText(props) {
  return (
    <Card.Link href={props.link}>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{props.subtitle}</Card.Subtitle>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card>
    </Card.Link>
  );
}