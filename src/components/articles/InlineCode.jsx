import React from "react";

import "./inlinecode.css";

const InlineCode = ({ children }) => {
  return <code className="inline-code">{children}</code>;
};

export { InlineCode };
