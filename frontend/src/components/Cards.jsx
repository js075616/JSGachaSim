import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import CardComponent from "./Card";

class Cards extends Component {
  render() {
    const { cards, reveal } = this.props;
    return (
      <div className="Cards">
        <Container className="">
          <Row>
            {cards.map((card) => (
              <CardComponent key={card.id} card={card} reveal={reveal} />
            ))}
          </Row>
          <Button disabled className="w-25 mt-5 p-2 btn">
            Summon Again
          </Button>
        </Container>
      </div>
    );
  }
}

export default Cards;
