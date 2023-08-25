import React from "react";
import "./externallink.css";

const ExternalLink = ({ href, children }) => {
  return (
    <a
      href={href}
      className="external-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children} <i className="bx bx-link-external external-icon"></i>
    </a>
  );
};

export { ExternalLink };
