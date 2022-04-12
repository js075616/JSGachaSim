// const { Component } = require("react");
const { Card, Button } = require("react-bootstrap");

function CardComponent({ card, reveal }) {
  return (
    <Card
      bg={revealCardBG(card)}
      id={card.id}
      text="light"
      style={{ width: "19%" }}
      className="m-1"
    >
      <Card.Header>{cardHeader(card)}</Card.Header>
      <Card.Body className="mt-5 mb-5">
        <Card.Title>{cardTitle(card)}</Card.Title>
        <Card.Text className="mt-5 mb-5">
          {!card.revealed ? (
            <Button
              className={revealButtonBG(card)}
              type="submit"
              id={card.id + "btn"}
              onClick={() => reveal(card)}
            >
              Flip
            </Button>
          ) : (
            <Button className={revealButtonBG(card)} disabled></Button>
          )}
        </Card.Text>
      </Card.Body>
    </Card>
  );
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

function revealButtonBG(card) {
  let classes = "w-75 btn ";
  if (card.revealed === true) {
    if (card.type === "SSR") return classes + " btn-warning";
    else if (card.type === "SR") return classes + " btn-primary";
    else if (card.type === "R") return classes + " btn-info";
    else if (card.type === "Featured SSR") return classes + " btn-success";
  } else {
    return classes + " btn-info";
  }
}

function cardHeader(card) {
  if (card.revealed === true) return card.type;
  else return "Card";
}

function cardTitle(card) {
  if (card.revealed === true) return card.cardNumber;
  else return "";
}

export default CardComponent;
