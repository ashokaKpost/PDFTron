import React from "react";
import { Card, CardBody, CardText, CardTitle, Col, Row } from "reactstrap";
import AssignmentData from "../data/Assignments.json";

const AssignmentDetail = ({ assignmentChange, assignmentId }) => {
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
          marginTop: "5px",
          textAlign: "center",
          width: "98%",
          fontSize: 16,
          borderRadius: "10px",
          fontFamily: "Montserrat-SemiBold",
        }}
      >
        CLASSES
      </div>
      <div
        style={{
          marginLeft: "8px",
          marginTop: "10px",
          overflow: "hidden",
          height: "800px",
        }}
      >
        {AssignmentData &&
          AssignmentData.map((x, i) => (
            <Card
              onClick={() => assignmentChange(x)}
              style={{
                margin: "1px",
                marginTop: "15px",
                border: "none",
                boxShadow: "0px 0px 4px #999",
                backgroundColor: x._id === assignmentId ? "#007bff" : "#fff",
                borderRadius: "10px",
                cursor:'pointer'
              }}
              key={i}
            >
              <CardBody>
                <CardTitle
                  tag="h5"
                  style={{
                    color: x._id === assignmentId ? "#fff" : "#000",
                    fontFamily: "Montserrat-SemiBold",
                  }}
                >
                  {x.class} - {x.section} - {x.subject}
                </CardTitle>
                {/* <CardSubtitle
                  tag="p"
                  // className="mb-2 text-muted"
                  style={{
                    fontSize: 10,
                    margin: "5px 5px 5px 0px",
                    color: x._id === "003" ? "#fff" : "gray",
                  }}
                >
                  {x.subject}
                </CardSubtitle> */}
                <CardText
                  style={{
                    fontSize: 14,
                    color: x._id === assignmentId ? "#fff" : "#000",
                    fontFamily: "Montserrat-SemiBold",
                  }}
                >
                  {x.name}
                </CardText>
                {/* <hr /> */}
                <Row>
                  <Col lg={5}>
                    <span
                      style={{
                        fontSize: 10.5,
                        fontFamily: "Montserrat-SemiBold",
                        color: x._id === assignmentId ? "#fff" : "GrayText",
                      }}
                    >
                      {x.assignmentDate}
                    </span>
                  </Col>
                  <Col lg={7}>
                    <span
                      style={{
                        fontSize: 10.5,
                        fontFamily: "Montserrat-SemiBold",
                        color: x._id === assignmentId ? "#fff" : "GrayText",
                      }}
                    >
                      Submit On : {x.finalDate}
                    </span>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ))}
      </div>
    </div>
  );
};

export default AssignmentDetail;
