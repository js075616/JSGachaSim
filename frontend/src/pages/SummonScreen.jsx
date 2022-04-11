import Cards from "../components/Cards";

function SummonScreen({ cards, reveal, summonBtnClick, flipAll }) {
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

export default SummonScreen;
