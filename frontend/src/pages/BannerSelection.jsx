import { useNavigate } from "react-router-dom";
const { Card, Button } = require("react-bootstrap");

function BannerSelection() {
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
        <Card.Header>First Banner</Card.Header>
        <Card.Body className="mt-5 mb-5">
          <Card.Title>Click the button to go to the first banner!</Card.Title>
          <Card.Text className="mt-5 mb-5">
            <Button
              className="btn btn-info"
              type="submit"
              id="firstBannerBtn"
              onClick={() => navigate("/firstbanner")}
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
