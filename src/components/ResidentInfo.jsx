import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const ResidentInfo = ({ url }) => {
  const [resident, setResident] = useState({});

  useEffect(() => {
    axios.get(url).then((res) => setResident(res.data));
  }, []);

  const { name, image, species, status, origin, episode } = resident;

  return (
    <div className="container ">
      <Card style={{ width: "18rem" }} className="text-white">
        <Card.Img variant="top" src={image} />
        <span>
          {(() => {
            if (status === "Dead") {
              return (
                <span className="position-absolute top-0 start-100 translate-middle badge bg-danger">
                  {status}
                </span>
              );
            } else if (status === "Alive") {
              return (
                <span className="position-absolute top-0 start-100 translate-middle badge bg-success">
                  {status}
                </span>
              );
            } else {
              return (
                <span className="position-absolute top-0 start-100 translate-middle badge bg-secondary">
                  {status}
                </span>
              );
            }
          })()}
        </span>
        <Card.Body>
          <Card.Title className="mb-3">{name}</Card.Title>

          <Row>
            <Col>
              <Card.Text className="mb-1">
                {" "}
                Spicie: <b>{species}</b>
              </Card.Text>
              <Card.Text className="mb-1">
                {" "}
                Origin: <b>{origin?.name}</b>
              </Card.Text>
              <Card.Text className="mb-1">
                {" "}
                Episode: <b>{episode?.length}</b>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ResidentInfo;
