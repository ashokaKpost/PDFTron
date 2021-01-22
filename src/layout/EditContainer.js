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
        <Col lg={6} style={{height:'860px', }}>
          <PdfTool url={CONFIG.FILEONE} assignment={'Assignment - 4'} />
        </Col>
        <Col lg={3}>
          <StudentList />
        </Col>
      </Row>
    </Container>
  );
};

export default EditContainer;
