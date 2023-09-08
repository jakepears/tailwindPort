/** @format */
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import styles from "../styles/index.scss";

export default function App() {
  const LazyNavbar = dynamic(() => import("../Components/Navbar/Navbar"));
  const LazyHome = dynamic(() => import("../Components/Home/Home"));
  const LazyCursor = dynamic(() => import("./Cursor"));
  const LazyScroll = dynamic(() => import("./SmoothScroll"));
  const Cursor = useMemo(() => LazyCursor, [LazyCursor]);
  const Scroll = useMemo(() => LazyScroll, [LazyScroll]);
  const Navbar = useMemo(() => LazyNavbar, [LazyNavbar]);
  const Home = useMemo(() => LazyHome, [LazyHome]);

  return (
    <div className={`${styles.center} ${styles.column}`}>
      <Navbar />
      <Cursor />
      <Scroll />
      <Home />
    </div>
  );
}
