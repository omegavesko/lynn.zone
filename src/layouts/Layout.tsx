import * as React from "react";

interface LayoutProps {
  title?: string;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <html lang="en" className="h-full">
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
    <body className="h-full bg-black text-gray-800 dark:text-gray-200">
      <div className="h-full max-w-3xl mx-auto px-8 pt-8 pb-28 2xl:pt-12">
        {children}
      </div>
    </body>
  </html>
);

export default Layout;
