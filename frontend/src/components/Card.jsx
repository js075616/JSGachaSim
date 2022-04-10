// import "bootstrap/dist/css/bootstrap.min.css";
const { Component } = require("react");
const { Card, Button } = require("react-bootstrap");

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
        <Card.Body className="mt-5 mb-5">
          <Card.Title></Card.Title>
          <Card.Text className="mt-5 mb-5">
            {!card.revealed ? (
              <Button
                className={revealButtonBG(card)}
                type="submit"
                id={card.id + "btn"}
                onClick={() => this.props.reveal(this.props.card)}
              >
                Flip
              </Button>
            ) : (
              <Button
                className={revealButtonBG(card)}
                type="submit"
                disabled
                onClick={() => this.props.reveal(this.props.card)}
              ></Button>
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

function revealButtonBG(card) {
  let classes = "w-100 btn ";
  if (card.revealed === true) {
    if (card.type === "SSR") return classes + " btn-warning";
    else if (card.type === "SR") return classes + " btn-primary";
    else if (card.type === "R") return classes + " btn-info";
    else if (card.type === "Featured SSR") return classes + " btn-success";
  } else {
    return classes + " btn-info";
  }
}

function cardTitle(card) {
  if (card.revealed === true) return card.type;
  else return "\n";
}

export default CardComponent;
