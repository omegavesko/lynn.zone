import * as React from "react"
import { SiGithub, SiGmail, SiLinkedin, SiTwitter } from "react-icons/si"

const LinksItem: React.FC<{
  icon: React.ReactNode
  name: React.ReactNode
}> = ({ icon, name }) => (
  <li className="flex items-center gap-3 text-lg text-gray-800 font-normal transition dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-300 lg:gap-2 lg:text-base">
    {icon} {name}
  </li>
)

export interface LinksProps {}

const Links: React.FC<LinksProps> = () => {
  return (
    <ul className="flex flex-col gap-2 flex-wrap lg:flex-row lg:gap-x-5">
      <a href="https://www.linkedin.com/in/lynnntropy/">
        <LinksItem icon={<SiLinkedin />} name={"lynnntropy"} />
      </a>
      <a href="https://github.com/lynnntropy">
        <LinksItem icon={<SiGithub />} name={"lynnntropy"} />
      </a>
      <a href="https://twitter.com/lynnntropy">
        <LinksItem icon={<SiTwitter />} name={"lynnntropy"} />
      </a>
      <a href="mailto:lynn@lynn.zone">
        <LinksItem icon={<SiGmail />} name={"lynn@lynn.zone"} />
      </a>
    </ul>
  )
}

export default Links
