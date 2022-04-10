import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "../src/components/Cards";
// import Card from "../src/components/Card";
import Header from "./components/Header";

class App extends Component {
  state = {
    cards: [
      { id: "card0", type: "SSR", cardNumber: 1, revealed: false },
      { id: "card1", type: "SR", cardNumber: 1, revealed: false },
      { id: "card2", type: "R", cardNumber: 1, revealed: false },
      { id: "card3", type: "Featured SSR", cardNumber: 1, revealed: false },
      { id: "card4", type: "R", cardNumber: 1, revealed: false },
      { id: "card5", type: "R", cardNumber: 1, revealed: false },
      { id: "card6", type: "SR", cardNumber: 1, revealed: false },
      { id: "card7", type: "R", cardNumber: 1, revealed: false },
      { id: "card8", type: "SR", cardNumber: 1, revealed: false },
      { id: "card9", type: "Featured SSR", cardNumber: 1, revealed: false },
    ],
    coins: 1000,
  };

  handleClick = (card) => {
    const cards = [...this.state.cards];
    const index = cards.indexOf(card);
    console.log("clicked");
    cards[index] = { ...card };
    cards[index].revealed = true;
    this.setState({ cards });
  };

  render() {
    return (
      <Router>
        <div className="container">
          <Header coins={this.state.coins} />
          <Routes>
            <Route
              path="/"
              element={
                <Cards cards={this.state.cards} reveal={this.handleClick} />
              }
            />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default App;
