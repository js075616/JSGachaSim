import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Button } from "react-bootstrap";
import CardComponent from "./Card";

// TODO: Add a flip all button
function Cards({ cards, reveal, summonBtnClick, flipAll }) {
  return (
    <div className="Cards">
      <h4>
        This banner contains 7 Featured SSR at 5%, 10 SSR at 5%, 10 SR at 30%,
        and 15 R at 60%. The final slot is a GSSR.
      </h4>
      <Container className="align-items-center justify-content-center">
        <Row>
          {cards.map((card) => (
            <CardComponent key={card.id} card={card} reveal={reveal} />
          ))}
        </Row>
      </Container>
      <Button onClick={() => flipAll()} className="w-25 mt-5 p-2 btn-info">
        Flip All
      </Button>
      <Button onClick={() => summonBtnClick()} className="w-25 mt-5 p-2 btn">
        Summon Again
      </Button>
    </div>
  );
}

export default Cards;
