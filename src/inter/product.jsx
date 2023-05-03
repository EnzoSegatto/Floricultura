import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {

  const Prod1 = 'https://cdn.discordapp.com/attachments/826586755229810688/1103321493447909476/Design_sem_nome__2_-removebg-preview.png'
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src= {Prod1} />
      <Card.Body>
        <Card.Title>Rosa Linda</Card.Title>
        <Card.Text>
          Essa rosa foi feita e escolhida a dedo para você. Colhida no norte na Ásia.
        </Card.Text>
        <Button variant="primary">Fale com especialistas</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;