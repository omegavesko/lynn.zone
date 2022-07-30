import * as React from "react";

const Link: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, className, ...props }) => (
  <a
    className={`text-gray-800 font-medium underline dark:text-gray-200 ${className}`}
    {...props}
  >
    {children}
  </a>
);

export default Link;
