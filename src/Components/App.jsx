/** @format */
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/index.scss";

export default function App() {
  const LazyHome = dynamic(() => import("../Components/Home/Home"));
  const Home = useMemo(() => LazyHome, [LazyHome]);
  const LazyScroll = dynamic(() => import("./SmoothScroll"));
  const Scroll = useMemo(() => LazyScroll, [LazyScroll]);
  const LazyCursor = dynamic(() => import("./Cursor"));
  const Cursor = useMemo(() => LazyCursor, [LazyCursor]);
  const LazyNavbar = dynamic(() => import("../Components/Navbar/Navbar"));
  const Navbar = useMemo(() => LazyNavbar, [LazyNavbar]);

  return (
    <div className={`${styles.center} ${styles.column}`}>
      <Home />
      <Scroll />
      <Cursor />
      <Navbar />
    </div>
  );
}
