import Cards from "../components/Cards";

function Dashboard({ cards, reveal, summonBtnClick, flipAll }) {
  return (
    <div>
      <Cards
        cards={cards}
        reveal={reveal}
        summonBtnClick={summonBtnClick}
        flipAll={flipAll}
      />
    </div>
  );
}

export default Dashboard;
