import * as React from "react";

const Highlight: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="highlight">{children}</span>
);

export default Highlight;
