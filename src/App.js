import React from "react";
import "./App.css";
import PdfTool from "./components/PdfTool/PdfTool";
import HomeScreen from "./views/HomeScreen";

const App = () => {
  const [state, setState] = React.useState();
  const [url, setUrl] = React.useState();

  return (
    <div className="App">
      <HomeScreen />
      {/* {!url && (
        <React.Fragment>
          <div
            style={{
              marginTop: "400px",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <div>
              <h4 style={{
                color:'#000'
              }}>Please enter url here!</h4>
            </div>
            <input
              type={"text"}
              value={state}
              onChange={(e) => setState(e.target.value)}
              name={"url"}
              style={{
                width: "500px",
                height: "30px",
                borderRadius: "15px",
                border: "1px solid #d2d2d2",
              }}
            />
            <button
              style={{
                marginLeft: "10px",
                height: "35px",
                width: "100px",
                backgroundColor: "#00a5e4",
                borderRadius: "15px",
                border: "none",
                color: "#fff",
                fontWeight: "600",
              }}
              onClick={() => setUrl(state)}
            >
              Submit
            </button>
          </div>
        </React.Fragment>
      )}

      {url && url !== "" && (
        <React.Fragment>
          <PdfTool url={url} />
          <button
            style={{
              position: "absolute",
              right: "10px",
              top: "10px",
              height: "35px",
              width: "100px",
              backgroundColor: "#fff",
              borderRadius: "15px",
              border: "none",
              color: "#ffa500",
              fontWeight: "600",
            }}
            onClick={() => {
              setUrl("");
              setState("");
            }}
          >
            Cancel
          </button>
        </React.Fragment>
      )} */}
    </div>
  );
};

export default App;
