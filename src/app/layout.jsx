import localFont from "next/font/local";

export const metadata = {
  title: "Portfolio",
  description: "Visual portfolio of my work",
};

const myFont = localFont({
  src: "./fonts/TWKLausanne-300.woff2",
  display: "swap",
  subsets: ["latin"],
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
