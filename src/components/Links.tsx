import * as React from "react";
import {
  SiGithub,
  SiGmail,
  SiLinkedin,
  SiTwitter,
  SiMastodon,
} from "react-icons/si/index.js";
import { classes } from "src/utils/styles";

const LinksItem: React.FC<{
  icon: React.ReactNode;
  name: React.ReactNode;
}> = ({ icon, name }) => (
  <li className="flex items-center gap-3 text-base text-gray-800 font-normal transition dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-300">
    {icon} {name}
  </li>
);

export interface LinksProps {
  align?: "left" | "center";
  condensed?: boolean;
}

const Links: React.FC<LinksProps> = ({
  align = "center",
  condensed = true,
}) => {
  return (
    <ul
      className={classes(
        "flex flex-col gap-2 flex-wrap sm:flex-row sm:gap-x-5",
        align === "center" && `sm:justify-center`
      )}
    >
      <a rel="me" href="https://www.linkedin.com/in/lynnntropy/">
        <LinksItem
          icon={<SiLinkedin className="relative top-px" />}
          name={"lynnntropy"}
        />
      </a>
      <a rel="me" href="https://github.com/lynnntropy">
        <LinksItem
          icon={<SiGithub className="relative top-px" />}
          name={"lynnntropy"}
        />
      </a>
      <a rel="me" href="https://twitter.com/lynnntropy">
        <LinksItem
          icon={<SiTwitter className="relative top-px" />}
          name={"@lynnntropy"}
        />
      </a>
      {condensed && <div className="hidden basis-full sm:block" />}
      <a rel="me" href="https://hachyderm.io/@lynnntropy">
        <LinksItem
          icon={<SiMastodon className="relative top-px" />}
          name={"@lynnntropy@hachyderm.io"}
        />
      </a>
      <a rel="me" href="mailto:lynn@lynn.zone">
        <LinksItem
          icon={<SiGmail className="relative top-px" />}
          name={"lynn@lynn.zone"}
        />
      </a>
    </ul>
  );
};

export default Links;
