import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";
import CardComponent from "./Card";

// TODO: Add a flip all button
function Cards({ cards, reveal, buttonClick }) {
  return (
    <div className="Cards">
      <h4>
        This banner contains 3 Featured SSR at 5%, 5 SR at 25%, and 10 R at 70%
      </h4>
      <Container className="align-items-center justify-content-center">
        <Row>
          {cards.map((card) => (
            <CardComponent key={card.id} card={card} reveal={reveal} />
          ))}
        </Row>
      </Container>
      <Button onClick={() => buttonClick()} className="w-25 mt-5 p-2 btn">
        Summon Again
      </Button>
    </div>
  );
}

export default Cards;
