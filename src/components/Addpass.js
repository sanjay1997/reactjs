import React, { useState } from "react";
import { Container, Row, Col, Card,Button } from "react-bootstrap";
import axios from "axios";
import Topbar from "./Topbar";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import {Link } from "react-router-dom";


const Addpass = () => {
  const [formValue, setFormValue] = useState({
    pname: "",
    sitelink: "",
    email: "",
    city: "",
    state: "",
    zip: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    const saveDetails = new URLSearchParams();
    saveDetails.append("projectName", formValue.pname);
    saveDetails.append("site_link", formValue.sitelink);
    saveDetails.append("username", formValue.username);
    saveDetails.append("password", formValue.password);

    try {
      // make axios post request
      const response = await axios({
        method: "POST",
        url: "http://localhost:5000/addpass2",
        data: saveDetails,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const onChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  return (
    <>
      <Topbar />
      <Container className="mt-5">
        <Row>
          <Col sm={12}>
            <Card border="bg-dark">
              <Card.Header>
                <Card.Title>Add Password</Card.Title>
              </Card.Header>
              <Card.Body>
                <form className="row g-3" onSubmit={submitHandler}>
                  <div className="col-md-3">
                    <MDBInput
                      name="pname"
                      value={formValue.pname}
                      onChange={onChange}
                      id="validationCustom01"
                      required
                      label="Project Name"
                      validation="Please Provide a Project Name."
                      invalid
                    />
                  </div>

                  <div className="col-md-3">
                    <MDBInput
                      value={formValue.sitelink}
                      name="sitelink"
                      onChange={onChange}
                      id="validationCustom02"
                      required
                      label="Site Link"
                      validation="Please provide a Site Link."
                      invalid
                    />
                  </div>

                  <div className="col-md-3">
                    <MDBInput
                      value={formValue.username}
                      name="username"
                      onChange={onChange}
                      id="validationCustom03"
                      required
                      label="Username / Email"
                      validation="Please provide a Username / Email."
                      invalid
                    />
                  </div>

                  <div className="col-md-3">
                    <MDBInput
                      value={formValue.password}
                      name="password"
                      onChange={onChange}
                      id="validationCustom04"
                      required
                      label="Password"
                      validation="Please provide a Password."
                      invalid
                    />
                  </div>

                  <div className="col-1">
                    <MDBBtn type="submit">Save</MDBBtn>
                  </div>
                  <div className='col-11'>
                      <Link to={`/home`}><Button variant="primary">Back</Button></Link>
                  </div>
                </form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Addpass;
