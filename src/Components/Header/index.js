import React from "react";
import "./index.css";
import logo from "./icons/logo.png";
import brandLogo from "./icons/brandLogo.png";

const HeaderRaw = () => (
  <div className={"Header"}>
    <img alt={"brand logo"} src={brandLogo} className={"brandLogo"} />
    <img alt={"logo"} src={logo} className={"logo"} />
  </div>
);

export default HeaderRaw;
