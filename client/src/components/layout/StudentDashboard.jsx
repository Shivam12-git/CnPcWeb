import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import { Button, Card, Form, Container, Row, Col } from "react-bootstrap";

class StudentDashboard extends Component {
  onLogout = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <>
        <Container fluid>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">{user.name}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Form>
                    <Row>
                      <Col className="pr-1" md="5">
                        <Form.Group>
                          <label>RollNo</label>
                          <Form.Control
                            defaultValue={user.rollNo}
                            disabled
                            placeholder="RollNo"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="3">
                        <Form.Group>
                          <label>Name</label>
                          <Form.Control
                            defaultValue={user.name}
                            placeholder="Name"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label htmlFor="exampleInputEmail1">
                            Email address
                          </label>
                          <Form.Control
                            defaultValue={user.email}
                            disabled
                            placeholder="Email"
                            type="email"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="6">
                        <Form.Group>
                          <label>First Name</label>
                          <Form.Control
                            defaultValue="Mike"
                            placeholder="Company"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="6">
                        <Form.Group>
                          <label>Last Name</label>
                          <Form.Control
                            defaultValue="Andrew"
                            placeholder="Last Name"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>Address</label>
                          <Form.Control
                            defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                            placeholder="Home Address"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col className="pr-1" md="4">
                        <Form.Group>
                          <label>City</label>
                          <Form.Control
                            defaultValue="Mike"
                            placeholder="City"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="px-1" md="4">
                        <Form.Group>
                          <label>Country</label>
                          <Form.Control
                            defaultValue="Andrew"
                            placeholder="Country"
                            type="text"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                      <Col className="pl-1" md="4">
                        <Form.Group>
                          <label>Postal Code</label>
                          <Form.Control
                            placeholder="ZIP Code"
                            type="number"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md="12">
                        <Form.Group>
                          <label>About Me</label>
                          <Form.Control
                            cols="80"
                            defaultValue="Lamborghini Mercy, Your chick she so thirsty, I'm in
                            that two seat Lambo."
                            placeholder="Here can be your description"
                            rows="4"
                            as="textarea"
                          ></Form.Control>
                        </Form.Group>
                      </Col>
                    </Row>
                    <div
                      className="clearfix"
                      style={{ textAlign: "center", margin: "10px 0px" }}
                    >
                      <Button
                        className="btn-fill"
                        style={{ width: "12%" }}
                        type="submit"
                        variant="info"
                      >
                        Update Profile
                      </Button>
                    </div>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            {/* <Col md="4">
              <Card className="card-user">
                <div className="card-image">
                  <img
                    alt="..."
                    // src={
                    //   require("assets/img/photo-1431578500526-4d9613015464.jpeg")
                    //     .default
                    // }
                  ></img>
                </div>
                <Card.Body>
                  <div className="author">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="avatar border-gray"
                        // src={require("assets/img/faces/face-3.jpg").default}
                      ></img>
                      <h5 className="title">Mike Andrew</h5>
                    </a>
                    <p className="description">michael24</p>
                  </div>
                  <p className="description text-center">
                    "Lamborghini Mercy <br></br>
                    Your chick she so thirsty <br></br>
                    I'm in that two seat Lambo"
                  </p>
                </Card.Body>
                <hr></hr>
                <div className="button-container mr-auto ml-auto">
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-facebook-square"></i>
                  </Button>
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-twitter"></i>
                  </Button>
                  <Button
                    className="btn-simple btn-icon"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    variant="link"
                  >
                    <i className="fab fa-google-plus-square"></i>
                  </Button>
                </div>
              </Card>
            </Col> */}
          </Row>
        </Container>
      </>
    );
  }
}

StudentDashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(StudentDashboard);
