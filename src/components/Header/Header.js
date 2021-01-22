import React from "react";
import { Navbar } from "reactstrap";

import Logo from "../../assets/logo11.png";
import ProfileDefaultLogo from "../../assets/Deafult-Profile-Pitcher.png";

const Header = () => {

  return (
    <div style={{ position: "fixed", width: "100%", zIndex: 3 }}>
      <Navbar
        style={{
          backgroundColor: "#3f3348",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        expand="md"
      >
        <img
          src={Logo}
          alt={""}
          style={{
            width: "120px",
            height: "50px",
            marginLeft: "10px",
          }}
        />

        <div>
          <h6
            style={{
              fontSize: 14,
              color: "#fff",
              fontWeight: "600",
              letterSpacing: 0.6,
            }}
          >
            St'Mary Higher secoundary school
          </h6>
        </div>
        <div>
          <span
            style={{ color: "#fff", textAlign: "center", marginRight: "20px" }}
          >
            Abinaya Sekar
          </span>
          <img
            src={ProfileDefaultLogo}
            alt={""}
            style={{
              width: "40px",
              height: "40px",
              marginRight: "20px",
            }}
          />
        </div>
      </Navbar>
    </div>
  );
};

export default Header;
