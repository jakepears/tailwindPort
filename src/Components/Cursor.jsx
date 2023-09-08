"use client";
import { useEffect } from "react";
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import "../styles/cursor.scss";

export default function CursorFollower() {
  useEffect(() => {
    MouseFollower.registerGSAP(gsap);

    const cursor = new MouseFollower();
  }, []);
  return;
}
