import React from "react";

/* Create a Footer.js component that renders a <footer> element to show a copyright message in a <p> with a dynamically updated year.
 */

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © {currentYear}</p>
    </footer>
  );
};

export default Footer;
