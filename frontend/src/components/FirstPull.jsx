import { useNavigate } from "react-router-dom";
const { Button } = require("react-bootstrap");

function FirstPull() {
  const navigate = useNavigate();
  return (
    <div>
      <Button
        className="btn btn-info"
        type="submit"
        id="firstBannerBtn"
        onClick={() => navigate("/firstbanner")}
      >
        Summon
      </Button>
    </div>
  );
}

export default FirstPull;
