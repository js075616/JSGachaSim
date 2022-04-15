import { useNavigate } from "react-router-dom";
const { Card, Button } = require("react-bootstrap");

function BannerSelection({ selectedBanner }) {
  const navigate = useNavigate();

  return (
    <div className="container d-flex align-items-center justify-content-center">
      <Card
        bg="primary"
        id="firstbanner"
        text="light"
        style={{ width: "50%" }}
        className="m-1"
      >
        <Card.Header>Normal Banner</Card.Header>
        <Card.Body className="mt-5 mb-5">
          <Card.Title>This banner features normal rates</Card.Title>
          <Card.Text className="mt-5 mb-5">
            <Button
              className="btn btn-info"
              type="submit"
              id="firstBannerBtn"
              onClick={() => {
                selectedBanner("df");
                navigate("/dfbanner");
              }}
            >
              Go to Banner
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card
        bg="primary"
        id="firstbanner"
        text="light"
        style={{ width: "50%" }}
        className="m-1"
      >
        <Card.Header>Double Rates Banner</Card.Header>
        <Card.Body className="mt-5 mb-5">
          <Card.Title>This banner features double rates on SSRs</Card.Title>
          <Card.Text className="mt-5 mb-5">
            <Button
              className="btn btn-info"
              type="submit"
              id="firstBannerBtn"
              onClick={() => {
                selectedBanner("rd");
                navigate("/rdbanner");
              }}
            >
              Go to Banner
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default BannerSelection;
