import React from "react";
import { Navbar } from "reactstrap";

import Logo from "../../assets/logo11.png";
import ProfileDefaultLogo from "../../assets/Deafult-Profile-Pitcher.png";

const Header = () => {

  return (
    <div style={{ position: "fixed", width: "100%", zIndex: 3 }}>
      <Navbar
        className={"headerBackground"}
        style={{
          // backgroundColor: "#007bff",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        expand="md"
      >
        <img
          src={Logo}
          alt={""}
          style={{
            width: "110px",
            height: "45px",
            marginLeft: "10px",
            color: 'tint("#006600")',
          }}
        />

        <div>
          <h6
            style={{
              fontSize: 18,
              color: "#fff",
              fontFamily:'Montserrat-SemiBold',
              letterSpacing: 0.6,
            }}
          >
            {"Vidya Mandir Senior Secondary School".toUpperCase()}
          </h6>
        </div>
        <div>
          <span
            style={{
              color: "#fff",
              textAlign: "center",
              marginRight: "20px",
              fontFamily:'Montserrat-SemiBold'
            }}
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
