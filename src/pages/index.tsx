import * as React from "react"
import Helmet from "react-helmet"
import Links from "../components/Links"

export interface IndexPageProps {}

const Section: React.FC<{ title: React.ReactNode; [key: string]: any }> = ({
  title,
  children,
  ...props
}) => (
  <section {...props}>
    <h2 className="mb-4 text-4xl text-gray-800 font-medium leading-tight dark:text-gray-200">
      {title}
    </h2>
    {children}
  </section>
)

const TextSection: React.FC<{ title: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Section title={title}>
    <div className="flex flex-col gap-4 text-lg">{children}</div>
  </Section>
)

const Highlight: React.FC = ({ children }) => (
  <span className="highlight">{children}</span>
)

const CVItem: React.FC<{
  title: React.ReactNode
  details: React.ReactNode
  active?: boolean
  companyUrl?: string
}> = ({ title, details, active = false, companyUrl = null, children }) => (
  <div
    className={`px-6 py-6 border-2 ${
      active
        ? "border-gray-800 dark:border-gray-200"
        : "border-gray-300 dark:border-gray-700"
    }`}
  >
    {companyUrl !== null ? (
      <a href={companyUrl}>
        <h3 className="mb-1 text-3xl text-gray-800 leading-tight transition dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-400">
          {title}
        </h3>
      </a>
    ) : (
      <h3 className="mb-1 text-3xl text-gray-800 leading-tight dark:text-gray-200">
        {title}
      </h3>
    )}

    <span className="block mb-4 text-gray-800 dark:text-gray-200">
      {details}
    </span>
    <div className="leading-relaxed">{children}</div>
  </div>
)

const Tags: React.FC = ({ children }) => (
  <div className="mt-4 flex flex-wrap gap-1">{children}</div>
)

const Tag: React.FC = ({ children }) => (
  <span className="px-2 py-1 bg-gray-800 text-white text-xs rounded dark:bg-gray-700 dark:text-white">
    {children}
  </span>
)

const StandardLink: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, className, ...props }) => (
  <a
    className={` ${className} text-gray-800 font-medium underline dark:text-gray-200`}
    {...props}
  >
    {children}
  </a>
)

const Confidential: React.FC = () => (
  <span className="inline-block px-2 py-1 text-gray-800 bg-gray-100 text-opacity-60 rounded dark:text-gray-200 dark:bg-gray-700 dark:bg-opacity-50">
    Confidential
  </span>
)

const IndexPage: React.FC<IndexPageProps> = () => {
  return (
    <>
      <Helmet titleTemplate="%s">
        <title>Lynn Romich</title>
        <meta name="description" content="Turning ☕ into 💾 since 19XX" />
      </Helmet>
      <h1 className="mb-2 text-6xl text-gray-800 font-medium leading-none dark:text-gray-200">
        Lynn Romich
      </h1>
      <p className="mb-6 text-lg text-gray-800 dark:text-gray-200">
        Turning ☕ into 💾 since 19XX
      </p>

      <Links />

      {/* Main */}
      <div className="mt-8 flex flex-col gap-8">
        <TextSection title="About me">
          <p>
            👋 Hi! I'm Lynn, a <Highlight>software engineer</Highlight> with
            more than {new Date().getFullYear() - 2017} years of professional
            experience building and maintaining digital products, with a focus
            on the Web.
          </p>
        </TextSection>
        <TextSection title="About you (hopefully?)">
          <p>
            You're a company with an{" "}
            <Highlight>ethical business model</Highlight> that doesn't exploit
            anyone to do what it does (and maybe even does some good).
          </p>
          <p>
            You know that the best products are made by{" "}
            <Highlight>diverse, inclusive, autonomous teams</Highlight>, and
            that good engineering is worth investing in.
          </p>
        </TextSection>
        <TextSection title="What I do">
          <p>
            I specialize in building backend systems, websites and cutting-edge
            web applications using tools like <Highlight>modern PHP</Highlight>{" "}
            and <Highlight>JavaScript</Highlight>{" "}
            <span className="text-base text-gray-500 dark:text-gray-400">
              (preferably, with TypeScript)
            </span>
            .
          </p>
          <p>
            I have years of experience building fast, stable and maintainable
            backends, usually based on <Highlight>PHP</Highlight> or{" "}
            <Highlight>Node.js</Highlight>, and exposing a{" "}
            <Highlight>REST</Highlight> or <Highlight>GraphQL</Highlight> API.
          </p>
          <p>
            When it comes to building websites and user interfaces, I'm heavily
            invested into <Highlight>React</Highlight> and the tools that build
            on top of it (<Highlight>Next.js</Highlight>,{" "}
            <Highlight>Gatsby</Highlight>, etc.), but I'm also open to working
            with other frameworks, like <Highlight>Vue.js</Highlight> or{" "}
            <Highlight>Angular</Highlight>.
          </p>
          <p>
            Or course, I'm also{" "}
            <Highlight>always open to learning new things</Highlight>, so by no
            means am I restricting myself to the tech that I've listed here.
          </p>
        </TextSection>
        <Section title="Experience">
          <div className="flex flex-col gap-5">
            <CVItem
              title="Freelance Software Engineer"
              details={
                <>
                  <span className="whitespace-nowrap">
                    2021 &mdash; current
                  </span>
                </>
              }
              active={true}
            >
              <div className="text-gray-800 dark:text-gray-200">
                I'm currently taking on freelance work.{" "}
                <StandardLink href="#contact">Get in touch</StandardLink> if you
                have a project for me!
              </div>
            </CVItem>
            <CVItem
              title="DataCamp"
              companyUrl="https://www.datacamp.com/"
              details={
                <>
                  <span className="whitespace-nowrap">
                    Software Engineer &middot;
                  </span>{" "}
                  <span className="whitespace-nowrap">Contract &middot;</span>{" "}
                  <span className="whitespace-nowrap">
                    Aug 2021 &mdash; Feb 2022
                  </span>
                </>
              }
            >
              <div className="flex flex-col gap-3 text-gray-800 dark:text-gray-200">
                <p>
                  I worked with DataCamp in a contract position writing mainly
                  frontend TypeScript code with React and Next.js, embedded in
                  an existing team to help maintain and iterate on their
                  public-facing web properties (i.e. everything on{" "}
                  <StandardLink href="https://www.datacamp.com/">
                    datacamp.com
                  </StandardLink>
                  ).
                </p>
                <p>
                  This included communication with stakeholders, code reviews,
                  managing the software development process using Jira and
                  GitHub, as well as implementing designs built in Figma by the
                  design team.
                </p>
              </div>
            </CVItem>
            <CVItem
              title="Infostud Group"
              companyUrl="https://www.infostud.com/?locale=en"
              details={
                <>
                  <span className="whitespace-nowrap">
                    Software Engineer &middot;
                  </span>{" "}
                  <span className="whitespace-nowrap">Full-time &middot;</span>{" "}
                  <span className="whitespace-nowrap">2017 &mdash; 2021</span>
                </>
              }
            >
              <div className="flex flex-col gap-3 text-gray-800 dark:text-gray-200">
                <p>
                  At Infostud, I participated in the development of greenfield
                  projects across the entire stack (frontend, backend, DevOps),
                  as well as being responsible for maintenance of legacy code,
                  as part of the team behind Poslovi Infostud and HR Lab &mdash;
                  the leading platforms for job seekers and employers in Serbia.
                </p>
                <p>
                  Tech-wise, I primarily worked with PHP and
                  JavaScript/TypeScript, and deployed (greenfield) projects as
                  Docker images to an internal Kubernetes cluster.
                </p>
                <ul className="cv-item-bullets flex flex-col gap-3">
                  <li>
                    Worked on the rewrite of Poslovi Infostud's ATS product (now{" "}
                    <StandardLink href="https://www.hrlab.rs/en/hr-lab-asistent">
                      HR Lab ATS
                    </StandardLink>
                    ) using modern tech such as PHP 7+, React, GraphQL, Docker,
                    and Kubernetes. HR Lab ATS is now the most widely-used ATS
                    software in Serbia.
                  </li>
                  <li>
                    Built an internal payment platform that integrated with
                    PayPal and NestPay (a proprietary payment platform) to
                    enable HR Lab products to easily implement payment by credit
                    card and other payment methods. On average, tens of
                    thousands of dollars worth of payments passed through this
                    service every month.
                  </li>
                  <li>
                    Maintained{" "}
                    <StandardLink href="https://poslovi.infostud.com/">
                      Poslovi.infostud.com
                    </StandardLink>
                    , the leading job board in Serbia, with over 1 million
                    monthly unique users.
                  </li>
                  <li>
                    Built the current iteration of{" "}
                    <StandardLink href="https://www.hrlab.rs/en/">
                      HRLab.rs
                    </StandardLink>
                    , the website for the HR Lab brand, in collaboration with a
                    designer using React and Gatsby. Improved site performance
                    by 300% compared to the previous iteration of the site.
                  </li>
                  <li>
                    Migrated a production website (
                    <StandardLink href="https://www.hrlab.rs/en/">
                      HRLab.rs
                    </StandardLink>
                    ) from Gatsby to Next.js, with no need for downtime or a
                    feature freeze.
                  </li>
                  <li>
                    Implemented CI/CD pipelines for the team's codebases using
                    GitLab CI/CD, Docker, Kubernetes, and Helm.
                  </li>
                  <li>
                    Built{" "}
                    <StandardLink href="https://prijava.infostud.com/">
                      prijava.infostud.com
                    </StandardLink>
                    , an OAuth 2-based frontend for the company's internal LDAP
                    database. This resulted in a significantly friendlier user
                    experience for employees logging into internal tools.
                  </li>
                  <li>
                    Built{" "}
                    <StandardLink href="https://accounts.hrlab.rs">
                      accounts.hrlab.rs
                    </StandardLink>
                    , an OAuth 2-based identity server for the HR Lab platform.
                    This enabled HR Lab products to easily authenticate users
                    through a central location.
                  </li>
                </ul>
              </div>
              <Tags>
                <Tag>PHP</Tag>
                <Tag>JavaScript</Tag>
                <Tag>TypeScript</Tag>
                <Tag>Symfony</Tag>
                <Tag>React</Tag>
                <Tag>Docker</Tag>
                <Tag>Kubernetes</Tag>
                <Tag>GraphQL</Tag>
                <Tag>Next.js</Tag>
                <Tag>DevOps</Tag>
              </Tags>
            </CVItem>
            <CVItem
              title="Sol Press, LLC"
              details={
                <>
                  <span className="whitespace-nowrap">
                    Software Engineer &middot;
                  </span>{" "}
                  <span className="whitespace-nowrap">Contract &middot;</span>{" "}
                  <span className="whitespace-nowrap">2017 &mdash; 2020</span>
                </>
              }
            >
              <div className="text-gray-800 dark:text-gray-200">
                I worked on various projects for Sol Press over the course of a
                few years, doing everything from web development to server
                administration, and largely being responsible for building their
                presence on the Web from scratch.
              </div>
              <Tags>
                <Tag>PHP</Tag>
                <Tag>JavaScript</Tag>
                <Tag>Vue.js</Tag>
                <Tag>Laravel</Tag>
                <Tag>Nuxt.js</Tag>
                <Tag>WordPress</Tag>
                <Tag>DevOps</Tag>
                <Tag>Linux</Tag>
              </Tags>
            </CVItem>
            <CVItem
              title="Execom"
              companyUrl="https://www.execom.eu/"
              details={
                <>
                  <span className="whitespace-nowrap">Intern &middot;</span>{" "}
                  <span className="whitespace-nowrap">
                    Mar 2017 &mdash; Apr 2017
                  </span>
                </>
              }
            >
              <div className="text-gray-800 dark:text-gray-200">
                During my internship at Execom, I worked independently on
                multiple Web-based projects for several weeks, using
                technologies like PHP and AngularJS.
              </div>
              <Tags>
                <Tag>PHP</Tag>
                <Tag>JavaScript</Tag>
                <Tag>Symfony</Tag>
                <Tag>AngularJS</Tag>
              </Tags>
            </CVItem>
          </div>
        </Section>
        <Section id="contact" title="Get in touch!">
          <Links />
        </Section>
      </div>
    </>
  )
}

export default IndexPage
