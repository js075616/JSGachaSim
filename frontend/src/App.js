import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SummonScreen from "./pages/SummonScreen";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../src/components/Spinner";
import { getDFSummon, getRDSummon } from "./features/summons/summonSlice";
import { useDispatch, useSelector } from "react-redux";
import BannerSelection from "./pages/BannerSelection";
import Login from "./pages/Login";
import Register from "./pages/Register";
// import FirstPull from "./components/FirstPull";

function App() {
  const dispatch = useDispatch();
  const { cardsFromAPI, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.summon
  );
  // const { user } = useSelector((state) => state.auth);
  const [selectedBanner, setSelectedBanner] = useState("df");

  useEffect(() => {
    if (isError) {
      toast.error(message);
    } else {
      if (selectedBanner === "df") dispatch(getDFSummon());
      else if (selectedBanner === "rd") dispatch(getRDSummon());
    }
  }, [isError, isSuccess, message, dispatch, selectedBanner]);

  const [tempState, setTempState] = useState({
    cards: cardsFromAPI,
    coins: 2000,
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
    if (selectedBanner === "df") dispatch(getDFSummon());
    else if (selectedBanner === "rd") dispatch(getRDSummon());
    if (!isLoading && cardsFromAPI.length !== 0 && tempState.coins > 0) {
      const cards = cardsFromAPI.cards;
      const coins = tempState.coins - 50;
      // if (user) {
      //   var existing = localStorage.getItem("user");
      //   existing = existing ? JSON.parse(existing) : {};
      //   existing["coins"] = user.coins - 50;
      //   localStorage.setItem("user", JSON.stringify(existing));
      // }
      setTempState({ cards, coins });
    } else {
      toast.error("There was an issue with the summon.");
    }
  };

  const handleBannerSelection = (banner) => {
    setSelectedBanner(banner);
    var cards = [];
    var coins = tempState.coins;
    setTempState({ cards, coins });
    console.log(tempState.cards.length);
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
              path="/dfbanner"
              element={
                <SummonScreen
                  cards={tempState.cards}
                  reveal={handleClick}
                  summonBtnClick={handleSummonBtnClick}
                  flipAll={handleFlipAll}
                  bannerName="SSR Goku, Geralt, and Jotaro Kujo blast onto the scene!"
                  bannerDesc="R: 10 at 37%, SR: 10 at 60%, Featured SSR: 3 at 3%"
                />
              }
            />
            <Route
              path="/rdbanner"
              element={
                <SummonScreen
                  cards={tempState.cards}
                  reveal={handleClick}
                  summonBtnClick={handleSummonBtnClick}
                  flipAll={handleFlipAll}
                  bannerName="Double Rates Banner"
                  bannerDesc="12 Featured SSR at 10%, 261 SSR at 10%, 140 SR at 80%"
                />
              }
            />
            <Route
              path="/"
              element={
                <BannerSelection selectedBanner={handleBannerSelection} />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
