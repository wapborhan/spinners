import React from "react";

const Footer = () => {
  var d = new Date();

  return (
    <div className="footer  p-3 text-center bg-dark text-light mt-4">
      © {d.getFullYear()} . All rights reserved | Design BY{" "}
      <a
        className="text-decoration-none text-warning"
        href="https://www.srdreamlab.com"
      >
        SR Dream Lab
      </a>
      .
    </div>
  );
};

export default Footer;
