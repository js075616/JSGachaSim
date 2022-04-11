import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SummonScreen from "./pages/SummonScreen";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../src/components/Spinner";
import { getNewSummon } from "./features/summons/summonSlice";
import { useDispatch, useSelector } from "react-redux";
import BannerSelection from "./pages/BannerSelection";
import FirstPull from "./components/FirstPull";

function App() {
  const dispatch = useDispatch();
  const { cardsFromAPI, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.summon
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    } else {
      dispatch(getNewSummon());
    }
  }, [isError, isSuccess, message, dispatch]);

  const [tempState, setTempState] = useState({
    cards: cardsFromAPI,
    coins: 1000,
  });

  const handleClick = (card) => {
    const cards = [...tempState.cards];
    const coins = tempState.coins;
    const index = cards.indexOf(card);
    cards[index] = { ...card };
    cards[index].revealed = true;
    setTempState({ cards, coins });
  };

  const handleFlipAll = () => {
    var cards = [...tempState.cards];
    const coins = tempState.coins;
    tempState.cards.forEach((card) => {
      const index = cards.indexOf(card);
      cards[index] = { ...card };
      cards[index].revealed = true;
    });
    setTempState({ cards, coins });
  };

  const handleSummonBtnClick = () => {
    dispatch(getNewSummon());
    if (!isLoading && cardsFromAPI.length !== 0 && tempState.coins > 0) {
      const cards = cardsFromAPI.cards;
      const coins = tempState.coins - 50;
      setTempState({ cards, coins });
    } else {
      toast.error("There was an issue with the summon.");
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
            <Route path="/firstbanner/firstpull" element={<FirstPull />} />
            <Route
              path="/firstbanner"
              element={
                <SummonScreen
                  cards={tempState.cards}
                  reveal={handleClick}
                  summonBtnClick={handleSummonBtnClick}
                  flipAll={handleFlipAll}
                />
              }
            />
            <Route path="/" element={<BannerSelection />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
