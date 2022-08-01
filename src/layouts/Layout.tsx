import "../styles/global.css";

import "@fontsource/barlow/400.css";
import "@fontsource/barlow/400-italic.css";
import "@fontsource/barlow/500.css";
import "@fontsource/barlow/600.css";
import "@fontsource/barlow/700.css";

import * as React from "react";

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
    <body className="min-h-full px-6 bg-black text-gray-800 font-sans sm:px-0 dark:text-gray-200">
      <div className="min-h-screen flex flex-col gap-12 pt-6">
        <main className="flex-1 w-full max-w-3xl self-center flex flex-col">
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
