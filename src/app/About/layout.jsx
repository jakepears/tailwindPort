import localFont from "next/font/local";

export const metadata = {
  title: "About",
  description: "Who I am and what I do",
};
// const myFont = localFont({
//   src: [
//     {
//       path: "../fonts/TWKLausanne-300.woff2",
//       weight: "300",
//       style: "normal",
//     },
//     {
//       path: "../fonts/TWKLausanne-400.woff2",
//       weight: "400",
//       style: "normal",
//     },
//     {
//       path: "../fonts/TWKLausanne-500.woff2",
//       weight: "500",
//       style: "normal",
//     },
//   ],
//   display: "swap",
//   subsets: ["latin"],
// });

const myFont = localFont({
  src: "../fonts/TWKLausanne-300.woff2",
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
