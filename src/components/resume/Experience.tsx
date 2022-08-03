import * as React from "react";
import Link from "../Link";

const CVItem: React.FC<{
  title: React.ReactNode;
  details: React.ReactNode;
  active?: boolean;
  companyUrl?: string;
  children: React.ReactNode;
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

    <span className="block mb-4 text-gray-800 dark:text-gray-300">
      {details}
    </span>
    <div className="leading-relaxed text-gray-800 dark:text-gray-300">
      {children}
    </div>
  </div>
);

const Tags: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mt-4 flex flex-wrap gap-1">{children}</div>
);

const Tag: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-2 py-1 bg-gray-800 text-white text-xs rounded dark:bg-gray-700 dark:text-white">
    {children}
  </span>
);

const Resume: React.FC = () => (
  <>
    <div className="flex flex-col gap-5">
      <CVItem
        title="Freelance Software Engineer"
        details={
          <>
            <span className="whitespace-nowrap">2021 &mdash; current</span>
          </>
        }
        active={true}
      >
        <div>
          I'm currently taking on freelance work.{" "}
          <Link href="#contact">Get in touch</Link> if you have a project for
          me!
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
            <span className="whitespace-nowrap">Aug 2021 &mdash; Feb 2022</span>
          </>
        }
      >
        <div className="flex flex-col gap-3">
          <p>
            I worked with DataCamp in a contract position writing mainly
            frontend TypeScript code with React and Next.js, embedded in an
            existing team to help maintain and iterate on their public-facing
            web properties (i.e. everything on{" "}
            <Link href="https://www.datacamp.com/">datacamp.com</Link>
            ).
          </p>
          <p>
            This included communication with stakeholders, code reviews,
            managing the software development process using Jira and GitHub, as
            well as implementing designs built in Figma by the design team.
          </p>
        </div>
        <Tags>
          <Tag>JavaScript</Tag>
          <Tag>TypeScript</Tag>
          <Tag>React</Tag>
          <Tag>Next.js</Tag>
          <Tag>Docker</Tag>
          <Tag>GraphQL</Tag>
        </Tags>
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
        <div className="flex flex-col gap-3">
          <p>
            At Infostud, I participated in the development of greenfield
            projects across the entire stack (frontend, backend, DevOps), as
            well as being responsible for maintenance of legacy code, as part of
            the team behind Poslovi Infostud and HR Lab &mdash; the leading
            platforms for job seekers and employers in Serbia.
          </p>
          <p>
            Tech-wise, I primarily worked with PHP and JavaScript/TypeScript,
            and deployed (greenfield) projects as container images to an
            internal Kubernetes cluster.
          </p>
          <ul className="cv-item-bullets flex flex-col gap-3">
            <li>
              Worked on the rewrite of Poslovi Infostud's ATS product (now{" "}
              <Link href="https://www.hrlab.rs/en/hr-lab-asistent">
                HR Lab Assistant
              </Link>
              ) using modern tech like PHP 7+, React, GraphQL, Docker, and
              Kubernetes. HR Lab Assistant is now the most widely-used ATS
              software in Serbia.
            </li>
            <li>
              Built an internal payment platform that integrated with PayPal and
              NestPay (a proprietary payment processor) to enable HR Lab
              products to easily integrate credit card payments, as well as
              other payment methods. On average, tens of thousands of dollars
              worth of payments passed through this service every month.
            </li>
            <li>
              Maintained{" "}
              <Link href="https://poslovi.infostud.com/">
                Poslovi.infostud.com
              </Link>
              , the leading job board in Serbia, with over 1 million monthly
              unique users.
            </li>
            <li>
              Built the (as of 2021) current iteration of{" "}
              <Link href="https://www.hrlab.rs/en/">HRLab.rs</Link>, the website
              for the HR Lab brand, in collaboration with a designer, using
              React and Gatsby. Improved site performance by 300% compared to
              the previous iteration of the site. I later migrated this site
              from Gatsby to Next.js, with no need for downtime or a feature
              freeze.
            </li>
            <li>
              Implemented CI/CD pipelines for the team's codebases using GitLab
              CI/CD, Docker, Kubernetes, and Helm.
            </li>
            <li>
              Built{" "}
              <Link href="https://accounts.hrlab.rs">accounts.hrlab.rs</Link>,
              an OAuth 2-based identity server for the HR Lab platform. This
              enabled HR Lab products to easily authenticate users through a
              central location.
            </li>
            <li>
              Built an OAuth 2-based frontend for the company's internal LDAP
              database, and retrofitted several internal tools to use it. This
              resulted in a significantly friendlier user experience for
              employees logging into these tools.
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
        title="Sol Press"
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
        <div>
          I worked on various projects for Sol Press -- a now-defunct US-based
          localization and publishing company -- over the course of a few years,
          doing everything from one-off scripts to web development and server
          administration, and largely being responsible for building their Web
          presence from scratch.
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
        companyUrl="https://htecgroup.com/"
        details={
          <>
            <span className="whitespace-nowrap">Intern &middot;</span>{" "}
            <span className="whitespace-nowrap">Mar 2017 &mdash; Apr 2017</span>
          </>
        }
      >
        <div className="flex flex-col gap-3">
          <p>
            (Note: Execom was merged into{" "}
            <Link href="https://htecgroup.com/">HTEC Group</Link> after my time
            there.)
          </p>
          <p>
            During my internship at Execom, I worked independently on multiple
            frontend and full-stack projects for about two months, using tech
            like PHP and AngularJS.
          </p>
        </div>
        <Tags>
          <Tag>PHP</Tag>
          <Tag>JavaScript</Tag>
          <Tag>Symfony</Tag>
          <Tag>AngularJS</Tag>
        </Tags>
      </CVItem>
    </div>
  </>
);

export default Resume;
