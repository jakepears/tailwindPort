import localFont from "next/font/local";

export const metadata = {
  title: "About",
  description: "Who I am and what I do",
};
const myFont = localFont({
  src: "fonts/TWKLausanne-300.woff2",
  display: "swap",
  name: "TWKLausanne",
  weight: [300, 400, 500],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <head>
        <link rel="shortcut icon" href="/Pearson.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
