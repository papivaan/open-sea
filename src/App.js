import React, { Component } from 'react';
import './App.css';
import { Row, Col, Table, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

import data from './data/example.json';

class App extends Component {
  render() {
    const mockData = data.concat(data).concat(data).concat(data);

    return (
      <div className="App">
        <Navbar bg="dark" expand="lg" variant="dark">
          <Navbar.Brand href="#home">OpenSea</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#data">Data</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#track/3.1">Track a vessel</NavDropdown.Item>
                <NavDropdown.Item href="#fleet/3.2">Fleet info</NavDropdown.Item>
                <NavDropdown.Item href="#options/3.3">Display more</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#about/3.4">About</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <Row>
          <Col>
            <Row className="container">
              <Col md={12} mdoffset={1}>
                <Table striped bordered hover variant="dark">
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
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
