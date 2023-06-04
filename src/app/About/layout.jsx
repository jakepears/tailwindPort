export const metadata = {
  title: "About",
  description: "About Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/Pearson.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
