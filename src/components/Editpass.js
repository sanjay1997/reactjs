import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import Topbar from "./Topbar";
import { MDBValidation, MDBInput, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";

const Editpass = () => {
  const { id } = useParams();

  const [formValue, setFormValue] = useState({
    projectName: "",
    site_link: "",
    username: "",
    password: "",
  });

  const getResult = async () => {
    const response = await axios.get(`http://localhost:5000/edit1/${id}`);
    //console.log(response.data);
    setFormValue(response.data);
  };

  useEffect(async () => {
    getResult();
  }, []);

const updatePassword = async (e) =>{
  e.preventDefault();
  const formdata = new URLSearchParams();
  formdata.append("pname",formValue.projectName);
  formdata.append("sitelink",formValue.site_link);
  formdata.append("username",formValue.username);
  formdata.append("password",formValue.password);

  // const formdata = { 
  //   pname:formValue.projectName,
  //   sitelink:formValue.site_link,
  //   username:formValue.username,
  //   password:formValue.password,
  // }

  try {
    const response = await axios({
      method:'POST',
      url: `http://localhost:5000/update1/${id}`,
      data:formdata,
    });
    if (response.status === 200) {
      alert('Password Details Successfully Update.');
    }
    if (response.status === 401) {
      alert('Password Details Not Updated.');
    }
  } catch (error) {
    alert(error);
  }
}

const onChange = (e) => {
  setFormValue({ ...formValue, [e.target.name]: e.target.value });
  //console.log(formValue);
};

  return (
    <>
    <Topbar />
    <div className="container mt-3">
    <div className="card shadow-lg p-3 mb-5 bg-white rounded ">
    <div className="card-header"><b>UPDATE PASSWORD DETAILS</b></div>
    <div className="card-body">
      <form onSubmit={updatePassword}>
        <div className="row">
        
          <div className="col">
              <input type="text" className="form-control" placeholder="Enter Project Name"
              value={formValue.projectName}
              name="projectName"
              onChange={onChange} required />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Enter Site Link"
            value={formValue.site_link}
            name="site_link"
            onChange={onChange} required />
          </div>
          <div className="col">
            <input type="password" className="form-control" placeholder="Enter Username"
            value={formValue.username}
            name="username"
            onChange={onChange} required />
          </div>
          <div className="col">
            <input type="password" className="form-control" placeholder="Enter Password"
            value={formValue.password}
            name="password"
            onChange={onChange} required />
          </div>
          
        </div>
        <br/>
        <div className="row">
          <div className="col">
            <button type="submit" className="btn btn-primary btn-md">Changes Save</button>
            <Link to={`/home`}><button type="button" className="btn btn-primary btn-md">Back</button></Link>
            </div>
        </div>
        
      </form>
    </div>
    </div>
      
    </div>
    </>
  );
};

export default Editpass;
