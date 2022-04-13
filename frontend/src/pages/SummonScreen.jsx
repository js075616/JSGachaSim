import Cards from "../components/Cards";

function SummonScreen({
  cards,
  reveal,
  summonBtnClick,
  flipAll,
  bannerName,
  bannerDesc,
}) {
  return (
    <div>
      <h3>
        <b>{bannerName}</b>
      </h3>
      <h4>{bannerDesc}</h4>
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
