import React from "react";
import { Container, Row, Col } from "reactstrap";
import StudentList from "./StudentList";
import PdfTool from "../components/PdfTool/PdfTool";
import CONFIG from "../Config/Config";
import AssignmentDetail from "./AssignmentDetail";

const EditContainer = () => {
  return (
    <Container fluid={true} style={{ height: "900px", marginTop: "80px", backgroundColor:'' }}>
      <Row>
        <Col lg={2}>
          <AssignmentDetail />
        </Col>
        <Col lg={7} style={{ height: "860px" }}>
          <PdfTool url={CONFIG.FILEONE}  />
        </Col>
        <Col lg={3}>
          <StudentList />
        </Col>
      </Row>
    </Container>
  );
};

export default EditContainer;
