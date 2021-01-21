import React from "react";
import { Container, Row, Col } from "reactstrap";
import StudentList from "./StudentList";
import PdfTool from "../components/PdfTool/PdfTool";
import CONFIG from "../Config/Config";

const EditContainer = () => {
  return (
    <Container fluid={true} style={{height:'900px', marginTop:'80px'}}>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6} style={{height:'810px', border:'1px solid #d2d2d2'}}>
          <PdfTool url={CONFIG.FILEONE} />
        </Col>
        <Col lg={3}>
          <StudentList />
        </Col>
      </Row>
    </Container>
  );
};

export default EditContainer;
