import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";

function PdfTool({ url }) {
  console.log(url, "url");
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
      <div className="header" style={{marginTop:'5px', textAlign:'center'}}>
        React Highlighter
        </div>
      <div className="webviewer" ref={viewer}></div>
    </div>
  );
}

export default PdfTool;
