import { useEffect, useState } from "react";
import "./App.css";
import LocationInfo from "./components/LocationInfo";
import ResidentInfo from "./components/ResidentInfo";
import axios from "axios";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import PaginationApp from "./components/PaginationApp";
import Hero from "./components/Hero";
import { ImSearch } from 'react-icons/im';

function App() {
  const [location, setLocation] = useState([]);
  const [searchId, setSearchId] = useState("");
  const [info, setInfo] = useState({});

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126 + 1);

    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data));
  }, []);

  const handleSearch = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${searchId}`)
      .then((res) => setLocation(res.data));

    setSearchId("");
  };

  const handlePagination = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/`)
      .then((res) => setInfo(res.info));
  };

  return (
    <>
      {/* NavBar */}
      <Hero />
      {/* Search */}
      <div className="container mt-5">
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            placeholder="
          Enter id or location"
            aria-label="
          Enter id or location"
            aria-describedby="basic-addon2"
          />
          <Button
            variant="outline-secondary"
            onClick={handleSearch}
            id="button-addon2"
            className="text-white bg-success"
          >
            Search <ImSearch className="text-white bg-success"/>
          </Button>
        </InputGroup>
      </div>

      {/* Pagination */}
      <PaginationApp />
      {/* Location Info */}
      <div className="container">
        <LocationInfo location={location} />
        <Row xs={1} md={2} lg={3} className=" container g-4">
          {location.residents?.map((character) => (
            <Col className="container">
              <ResidentInfo key={character} url={character} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
}

export default App;
