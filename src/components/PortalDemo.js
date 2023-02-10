import React from "react";
import ReactDoM from "react-dom";

function PortalDemo() {
  return ReactDoM.createPortal(
    <h1>portal Demo</h1>,
    document.getElementById("portal-root")
  );
}

export default PortalDemo;
