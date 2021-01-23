import React from "react";

import StudentData from "../data/StudentData.json";
import ProfileImage from "../assets/Deafult-Profile-Pitcher.png";
import { Col, Container, Input, Row } from "reactstrap";

const StudentList = ({ studentChange, name }) => {
  function submited(key) {
    let data;

    switch (key) {
      case "submit":
        data = StudentData.filter((f) => f.submit === true);
        break;

      case "unsubmit":
        data = StudentData.filter((f) => f.submit === false);
        break;

      case "correction":
        data = StudentData.filter((f) => f.correction === true);
        break;

      default:
        break;
    }

    return data.length;
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className="studentheader"
        style={{
          marginTop: "4px",
          textAlign: "center",
          width: "98.2%",
          height: "60px",
          borderRadius: "10px",
        }}
      >
        <Container>
          <Row>
            <Col lg={3}>
              <p
                className={"studentDetailHeader1"}
                style={{
                  color: "#000",
                  fontFamily: "Montserrat-SemiBold",
                  
                }}
              >
                TOTAL : {StudentData.length}
              </p>
            </Col>
            <Col lg={2.9}>
              <p
                className={"studentDetailHeader1"}
                style={{
                  color: "#5cb85c",
                  fontFamily: "Montserrat-SemiBold",
                }}
              >
                SUBMIT : {submited("submit")}
              </p>
            </Col>
            <Col lg={4}>
              <p
                className={"studentDetailHeader1"}
                style={{
                  color: "#d8534f",
                  fontFamily: "Montserrat-SemiBold",
                }}
              >
                NOTSUBMIT : {submited("unsubmit")}
              </p>
            </Col>
            <Col lg={3}>
              <p
                className={"studentDetailHeader1"}
                style={{
                  color: "#ee6305",
                  fontFamily: "Montserrat-SemiBold",
                }}
              >
                REVIEW : {submited("correction")}
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        className={"studentList"}
        style={{
          height: "780px",
          borderRadius: "10px",
        }}
      >
        <div style={{ padding: "5px" }}>
          <Row>
            <Col lg={8}>
              <Input type={"text"} placeholder={"Name"} />
            </Col>

            <Col lg={4}>
              <Input type={"text"} placeholder={"Status"} />
            </Col>
          </Row>
          <hr />
        </div>
        {StudentData &&
          StudentData.map((x, i) => (
            <div
              style={{
                padding: "8px",
                cursor: "pointer",
              }}
              onClick={() => studentChange(x.name)}
              key={i}
            >
              <Row>
                <Col lg={6}>
                  <img
                    src={ProfileImage}
                    alt={""}
                    style={{ width: "30px", height: "30px" }}
                  />
                  <span
                    style={{
                      fontFamily: "Montserrat-SemiBold",
                      marginLeft: "15px",
                      fontSize: 14,
                      letterSpacing: 0.5,
                      color: x.name === name ? "#007bff" : "#000",
                    }}
                  >
                    {x.name}
                  </span>
                </Col>
                <Col lg={2}></Col>
                <Col lg={4}>
                  <span
                    style={{
                      fontSize: 12,
                      color:
                        x.correction === true
                          ? "#ee6305"
                          : x.submit === true
                          ? "#5cb85c"
                          : "#d8534f",
                      fontFamily: "Montserrat-SemiBold",
                      fontWeight: "bold",
                    }}
                  >
                    {x.correction === true
                      ? "REVIEW"
                      : x.submit === true
                      ? "SUBMIT"
                      : "NOT SUBMIT"}
                  </span>
                </Col>
              </Row>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StudentList;
