export const metadata = {
  title: "Portfolio",
  description: "Visual portfolio of my work",
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
