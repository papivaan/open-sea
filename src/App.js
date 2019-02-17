import React, { Component } from 'react';
import './App.css';
import { Row, Col, Table, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import AddData from './components/AddData';
import data from './data/example.json';

class App extends Component {
  state = {
    showAddDataTable: false,
  };

  handleAddDataVisibility = value => {
    this.setState({ showAddDataTable: value });
  }

  render() {
    const mockData = data.concat(data).concat(data).concat(data);
    const { showAddDataTable } = this.state;
    return (
      <div className="App">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">OpenSeaAPI</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link
                href="#home"
                onClick={() => this.handleAddDataVisibility(false)}>
                  Home
                </Nav.Link>
              <Nav.Link
                href="#data"
                onClick={() => this.handleAddDataVisibility(true)}>
                Data
              </Nav.Link>
              <NavDropdown title="Options" id="basic-nav-dropdown">
                <NavDropdown.Item href="#track/3.1">Track a vessel</NavDropdown.Item>
                <NavDropdown.Item href="#fleet/3.2">Fleet info</NavDropdown.Item>
                <NavDropdown.Item href="#options/3.3">Display more</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#about/3.4">About</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search the open sea" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
          <Row>
            <Col>
              <Row className="justify-content-md-center">
                <Col md={10} mdoffset={1}>
                {!showAddDataTable && (
                  <Table striped bordered hover variant="dark" className="dataTable">
                    <thead>
                      <tr>
                        <th>MMSI</th>
                        <th>IMO</th>
                        <th>SHIP_ID</th>
                        <th>LAT</th>
                        <th>LON</th>
                        <th>SPEED</th>
                        <th>HEADING</th>
                        <th>COURSE</th>
                        <th>STATUS</th>
                        <th>TIMESTAMP</th>
                        <th>DSRC</th>
                        <th>UTC_SECONDS</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockData.map((i, index) => (
                        <tr key={index}>
                          <td>{i.MMSI}</td>
                          <td>{i.IMO}</td>
                          <td>{i.SHIP_ID}</td>
                          <td>{i.LAT}</td>
                          <td>{i.LON}</td>
                          <td>{i.SPEED}</td>
                          <td>{i.HEADING}</td>
                          <td>{i.COURSE}</td>
                          <td>{i.STATUS}</td>
                          <td>{i.TIMESTAMP}</td>
                          <td>{i.DSRC}</td>
                          <td>{i.UTC_SECONDS}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                  )}
                  {showAddDataTable && (
                    <AddData />
                  )}
                </Col>
              </Row>
            </Col>
          </Row>
      </div>
    );
  }
};

export default App;
