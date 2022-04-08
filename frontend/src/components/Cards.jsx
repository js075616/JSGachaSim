import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Card, Row, Button } from "react-bootstrap";

function Cards() {
  return (
    <div className="App">
      <Container className="p-2">
        <Row>
          {[0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((variant, idx) => (
            <Card
              bg="secondary"
              key={idx}
              id={idx}
              text="light"
              style={{ width: "19%" }}
              className="m-1"
            >
              <Card.Header>Card {idx + 1} </Card.Header>
              <Card.Body>
                <Card.Title></Card.Title>
                <Card.Text>
                  <Button className="w-100 mt-5 btn" type="submit">
                    Reveal
                  </Button>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
        <Button className="w-25 m-3 p-2 btn">Summon Again</Button>
      </Container>
    </div>
  );
}

export default Cards;
