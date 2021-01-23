import React from "react";
import { Container, Row, Col } from "reactstrap";
import StudentList from "./StudentList";
import PdfTool from "../components/PdfTool/PdfTool";
import CONFIG from "../Config/Config";
import AssignmentDetail from "./AssignmentDetail";

const EditContainer = () => {
  const [assignment, setAssignment] = React.useState({
    name: "Units and Measurements",
    subject: "Physics",
    _id: "003",
    class: "XI",
    section: "C",
    finalDate: "22-01-2021",
    assignmentDate: "10-01-2021",
  });
  const [student, setStudent] = React.useState("Ashok");

  const asignmentChange = (data) => {
    setAssignment(data);
  };
  const studentChange = (stu) => {
    setStudent(stu);
  };
  
  return (
    <Container
      fluid={true}
      style={{ height: "900px", marginTop: "80px", backgroundColor: "" }}
    >
      <Row>
        <Col lg={2}>
          <AssignmentDetail
            assignmentChange={asignmentChange}
            assignmentId={assignment._id}
          />
        </Col>
        <Col lg={7} style={{ height: "860px" }}>
          <PdfTool
            url={CONFIG.FILEONE}
            studentName={student}
            name={assignment.name}
            className={assignment.class}
            section={assignment.section}
          />
        </Col>
        <Col lg={3}>
          <StudentList studentChange={studentChange} name={student} />
        </Col>
      </Row>
    </Container>
  );
};

export default EditContainer;
