import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import { Button, Col, Row } from "reactstrap";


function PdfTool({ url , name, studentName, className, section}) {
  
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount
  useEffect(() => {
    WebViewer(
      {
        path: "/webviewer/lib",
        pdftronServer: "https://demo.pdftron.com/",
        initialDoc: url,
        // loadAsPDF: url
      },
      viewer.current
    ).then((instance) => {
      const { docViewer, Annotations } = instance;
      const annotManager = docViewer.getAnnotationManager();

      docViewer.on("documentLoaded", () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation();
        rectangleAnnot.PageNumber = 1;
        // values are in page coordinates with (0, 0) in the top left
        rectangleAnnot.X = 100;
        rectangleAnnot.Y = 150;
        rectangleAnnot.Width = 200;
        rectangleAnnot.Height = 50;
        rectangleAnnot.Author = annotManager.getCurrentUser();

        annotManager.addAnnotation(rectangleAnnot);
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        annotManager.redrawAnnotation(rectangleAnnot);
      });
    });
  }, []);
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className="header" style={{ marginTop: "5px", textAlign: "center" }}>
        <Row>
          <Col lg={4}>
            <span
              style={{
                fontSize: 15,
                fontFamily: "Montserrat-SemiBold",
                color: "gray",
              }}
            >
              Name :{" "}
              <span
                style={{
                  color: "#000",
                }}
              >
                {studentName}
              </span>
            </span>
            <span
              style={{
                fontSize: 15,
                marginLeft: "10px",
                fontFamily: "Montserrat-SemiBold",
                color: "gray",
              }}
            >
              Class :{" "}
              <span
                style={{
                  color: "#000",
                }}
              >
              {className} - {section}
              </span>
            </span>
          </Col>
          <Col lg={4}>
            <span style={{ fontSize: 18, fontFamily: "Montserrat-SemiBold" }}>
              {name.toUpperCase()}
            </span>
          </Col>
          <Col lg={4}>
            <Button
              outline
              color="primary"
              style={{ fontFamily: "Montserrat-SemiBold" }}
            >
              Submit
            </Button>
          </Col>
        </Row>
      </div>
      <div
        className="webviewer"
        style={{
          boxShadow: "0px 0px 3px #999",
        }}
        ref={viewer}
      ></div>
    </div>
  );
}

export default PdfTool;
