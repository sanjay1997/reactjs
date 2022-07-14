import React,{useState} from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBCardBody, MDBInput } from 'mdb-react-ui-kit';
import axios from "axios";
import {useNavigate } from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    //const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    //const [contact, setContact] = useState("");
    const [password, setPassword] = useState("");
  
    //for error Display
    //const [nameErr, setNameErr] = useState({});
    const [emailErr, setEmailErr] = useState({});
    //const [contactErr, setContactErr] = useState({});
    const [passwordErr, setPasswordErr] = useState({});

const onRegister = async (e) =>{
    e.preventDefault();
    const isValid = formValidation();
    if (!isValid) return;
    const formdata = {email,password}

    try {
      const res = await axios({
        method : "POST",
        url: "http://localhost:5000/checklogin",
        data: formdata,
      });
      if (res.status === 200) {
        alert(res.data);
        navigate('/home');

      }
    } catch (error) {
      console.log(error);
    }
    
}

const formValidation = () => {
    //const nameErr = {};
    const emailErr = {};
    //const contactErr = {};
    const passwordErr = {};
    let isValid = true;

    // if (name === "") {
    //   nameErr.fullname= "*Please Enter Your Name";
    //   isValid = false;
    // }else if(name.length < 6){
    //   nameErr.fullname= "*Full Name More than 6 Digit";
    //   isValid = false;
    // }

    if (email === "") {
      emailErr.emailID = "*Please Enter Your email-ID.";
      isValid = false;
    } else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      emailErr.emailID = "*Please enter valid email-ID.";
      isValid = false;
    }

    // if (contact === "") {
    //   contactErr.con = "*Please Enter Your Contact No.";
    //   isValid = false;
    // } else if (contact.trim().length < 10) {
    //   contactErr.con = "Enter Contact No. upto 10 Digit";
    //   isValid = false;
    // }

    if (password === "") {
      passwordErr.pass = "*Please Enter Your Password";
      isValid = false;
    } else if (password.trim().length < 8) {
      passwordErr.pass = "Enter Password upto 8 Digit";
      isValid = false;
    }

    //setNameErr(nameErr);
    setEmailErr(emailErr);
    //setContactErr(contactErr);
    setPasswordErr(passwordErr);
    return isValid;
};

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="4">
        </MDBCol>
        <MDBCol md="4">
          <MDBCard className="mt-5 border border-info">
            <div className="header pt-3 grey lighten-2">
              <MDBRow className="d-flex justify-content-start">
                <h3 className="text-center">Password Manage</h3>
              </MDBRow>
            </div>
            <MDBCardBody className="mx-4 mt-4">
            <form onSubmit={onRegister}>
              {/* <MDBInput label="Enter Full Name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
              {Object.keys(nameErr).map((key) => {
                    return <div style={{ color: "red" }}>{nameErr[key]}</div>;
              })} */}

              <MDBInput label="Enter Email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-4" />
              {Object.keys(emailErr).map((key) => {
                    return <div style={{ color: "red" }}>{emailErr[key]}</div>;
                  })}

              {/* <MDBInput label="Your Contact No." type="text" value={contact} onChange={(e) => setContact(e.target.value)} className="mt-4" />
              {Object.keys(contactErr).map((key) => {
                    return <div style={{ color: "red" }}>{contactErr[key]}</div>;
              })} */}
  
              <MDBInput label="Enter Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-4"/>
              {Object.keys(passwordErr).map((key) => {
                    return (
                      <div style={{ color: "red" }}>{passwordErr[key]}</div>
                    );
                  })}
             
              <div className="text-center mb-4 mt-4">
                <MDBBtn color="danger" type="submit" className="btn-block z-depth-2">Log in</MDBBtn>
              </div>
            </form> 
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol md="4">
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Login;