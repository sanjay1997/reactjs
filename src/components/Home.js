import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import Topbar from "./Topbar";
import {
  Container,
  Table,
  InputGroup,
  FormControl,
  Button,
} from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);

  const getResult = () => {
    axios
      .get("http://localhost:5000/home1")
      .then((res) => {
        if (res.status === 200) {
            setData(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(async () => {
    getResult();
  }, []);

  //console.log(data);

  const deleteRow = (id) => {
      if (!window.confirm("Are you sure you want to Delete?")) {
          return
      }
    axios
      .get(`http://localhost:5000/delete1/${id}`)
      .then((res) => {
        if (res.status === 200) {
          alert(res.data.message);
          getResult();
        }
        if (res.status === 401) {
          alert(res.data.message);
        }
        if (res.status === 404) {
          alert(res.data.message);
        }
        //console.log(res.status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Topbar />
      <Container>
        <Table
          responsive
          striped
          bordered
          hover
          variant="dark"
          className="mt-5"
        >
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Project Name</th>
              <th>Site Link</th>
              <th>Email / Username</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, key) => (
              <tr>
                <td>{key++}</td>
                <td>{item.projectName}</td>
                <td>
                  <InputGroup>
                    <input
                      type="text"
                      className="form-control"
                      value={item.site_link}
                      placeholder="Site Link"
                    />
                    <Button className="btn btn-sm btn-light">C</Button>
                  </InputGroup>
                </td>

                <td>
                  <InputGroup>
                    <input
                      type="password"
                      className="form-control"
                      value={item.username}
                      placeholder="Email / Username"
                    />
                    <Button className="btn btn-sm btn-light">C</Button>
                  </InputGroup>
                </td>
                <td>
                  <InputGroup>
                    <input
                      type="password"
                      className="form-control"
                      value={item.password}
                      placeholder="Password"
                    />
                    <Button className="btn btn-sm btn-light">C</Button>
                  </InputGroup>
                </td>

                <td>
                  <Link to={`/edit/${item.id}`}><Button variant="success btn-sm">E</Button></Link>

                  <Button
                    type="button"
                    onClick={() => deleteRow(item.id)}
                    variant="danger btn-sm"
                  >
                    D
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Home;
