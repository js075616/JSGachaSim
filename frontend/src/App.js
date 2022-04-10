import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../src/components/Spinner";
import { getNewSummon } from "./features/summons/summonSlice";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [tempState, setTempState] = useState({
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
  });

  const dispatch = useDispatch();
  const { cardsFromAPI, isLoading } = useSelector((state) => state.summon);
  // dispatch(getNewSummon());

  // useEffect(() => {
  //   if (isError) {
  //     toast.error(message);
  //   }

  //   if (isSuccess) {
  //     // navigate("/");
  //     toast.success("Summoned!");
  //   }

  //   // dispatch(reset());
  // }, [isError, isSuccess, message, dispatch]);

  const handleClick = (card) => {
    const cards = [...tempState.cards];
    const coins = tempState.coins;
    const index = cards.indexOf(card);
    // console.log(cards[index]);
    cards[index] = { ...card };
    cards[index].revealed = true;
    setTempState({ cards, coins });
    // console.log("Flipped");
  };

  const handleBtnClick = () => {
    dispatch(getNewSummon());
    console.log(cardsFromAPI);
    if (!isLoading && cardsFromAPI.length !== 0 && tempState.coins > 0) {
      const cards = cardsFromAPI.cards;
      const coins = tempState.coins - 50;
      setTempState({ cards, coins });
    } else {
      toast.error("Not enough coins");
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      {" "}
      <Router>
        <div className="container">
          <Header coins={tempState.coins} />
          <Routes>
            <Route
              path="/"
              element={
                <Cards
                  cards={tempState.cards}
                  reveal={handleClick}
                  buttonClick={handleBtnClick}
                />
              }
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
