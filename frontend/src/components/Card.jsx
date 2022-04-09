import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

class CardComponent extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const { card } = this.props;
    return (
      <Card
        bg={revealCardBG(card)}
        id={card.id}
        text="light"
        style={{ width: "19%" }}
        className="m-1"
      >
        <Card.Header>{cardTitle(card)}</Card.Header>
        <Card.Body>
          <Card.Title></Card.Title>
          <Card.Text>
            {!card.revealed && (
              <Button
                className="w-100 mt-5 btn"
                type="submit"
                id={card.id + "btn"}
                onClick={() => this.props.reveal(this.props.card)}
              >
                Reveal
              </Button>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

function revealCardBG(card) {
  if (card.revealed === true) {
    if (card.type === "SSR") return "warning";
    else if (card.type === "SR") return "primary";
    else if (card.type === "R") return "info";
    else if (card.type === "Featured SSR") return "success";
  } else {
    return "secondary";
  }
}

function cardTitle(card) {
  if (card.revealed === true) return card.type;
  else return "\n";
}

export default CardComponent;
