import React from "react";

import StudentData from "../data/StudentData.json";
import ProfileImage from "../assets/Deafult-Profile-Pitcher.png";
import { Col, Input, Row } from "reactstrap";

const StudentList = () => {
  function submited(key) {
    let data;

    switch (key) {
      case "submit":
        data = StudentData.filter((f) => f.submit === true);
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
        style={{ marginTop: "5px", textAlign: "center", width: "100%" }}
      >
        <div style={{ padding: "0px" }}>
          <Row>
            <Col lg={3}>
              <p className={"studentDetailHeader1"} style={{
                color:'#000',
                fontWeight:'bold'
              }}>
                Total : {StudentData.length}
              </p>
            </Col>
            <Col lg={3}>
              <p className={"studentDetailHeader1"} style={{
                color:'#5cb85c',
                fontWeight:'bold'
              }}>
                Submit : {submited("submit")}
              </p>
            </Col>
            <Col lg={3}>
              <p className={"studentDetailHeader1"} style={{
                color:'#d8534f',
                fontWeight:'bold'
              }}>
              Unsubmit : {submited("correction")}
              </p>
            </Col>
            <Col lg={3}>
              <p className={"studentDetailHeader1"} style={{
                color:'#ee6305',
                fontWeight:'bold'
              }}>
                Review : {submited("correction")}
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div className={"studentList"} style={{ height: "780px" }}>
        <div style={{ padding: "5px" }}>
          <Row>
            <Col lg={6}>
              <span className={"studentDetailHeader"}>Name</span>
            </Col>
            <Col lg={3}></Col>
            <Col lg={3}>
              <span className={"studentDetailHeader"}>Status</span>
            </Col>
          </Row>
          <hr />
        </div>
        {StudentData &&
          StudentData.map((x, i) => (
            <div
              style={{
                padding: "8px",
              }}
            >
              <Row>
                <Col lg={6}>
                  <img
                    src={ProfileImage}
                    alt={""}
                    style={{ width: "30px", height: "30px" }}
                  />
                  <span style={{ marginLeft: "10px", fontSize: 13 }}>
                    {x.name}
                  </span>
                </Col>
                <Col lg={3}></Col>
                <Col lg={2}>
                  <div style={{
                      width:'60px',
                      height:'20px',
                      paddingBottom:'25px',
                      // backgroundColor:x.submit === true ? '#5cb85c' :'#d8534f',
                      backgroundColor : x.correction === true ? '#ee6305' : x.submit === true? '#5cb85c' :'#d8534f',
                      borderRadius:'10px',
                      // marginLeft:'15px',
                      textAlign:'center'
                  }} className={'indicator'}>
                    <span style={{
                      fontSize:9, color:'#fff', fontWeight:'600'
                    }}>{x.correction === true ? 'review' : x.submit === true? 'submit' :'unsubmit'}</span>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
      </div>
    </div>
  );
};

export default StudentList;
