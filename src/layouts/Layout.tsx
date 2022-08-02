import "../styles/global.css";

import "@fontsource/barlow/400.css";
import "@fontsource/barlow/400-italic.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";

import * as React from "react";

const NavLink: React.FC<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >
> = ({ children, ...props }) => (
  <a {...props} className="hover:underline">
    {children}
  </a>
);

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <html lang="en" className="min-h-full">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width" />

      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      <title>{title ? `${title} | lynn.zone` : `Lynn Romich`}</title>

      <meta name="description" content="Turning ☕ into 💾 since 19XX" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Lynn Romich" />
      <meta property="og:site_name" content="lynn.zone" />

      <meta name="twitter:creator" content="@lynnntropy" />
    </head>
    <body className="min-h-full px-6 bg-gray-900 text-gray-800 font-sans lg:px-0 dark:text-gray-200">
      <div className="min-h-screen flex flex-col pt-6">
        <nav className="mb-24 w-full max-w-3xl self-center flex items-center gap-8 2xl:fixed 2xl:left-8 2xl:flex-col 2xl:items-stretch 2xl:w-48">
          <a href="/">
            <img
              alt="Go to homepage"
              src="/images/avatar.png"
              className="w-12 rounded-full 2xl:h-16 2xl:w-16 2xl:mx-0 2xl:mb-4"
            />
          </a>
          <ul className="flex gap-4 text-lg 2xl:flex-col 2xl:text-xl">
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
        <main className="flex-1 mb-32 w-full max-w-3xl self-center flex flex-col 2xl:mt-24">
          {children}
        </main>
        <footer className="text-center py-6 text-white/40">
          <p className="mb-2">Made with ❤ on Earth.</p>
          <p className="text-sm text-white/30">
            This site doesn't use tracking cookies.
          </p>
        </footer>
      </div>
    </body>
  </html>
);

export default Layout;
