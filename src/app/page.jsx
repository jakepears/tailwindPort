import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";
import PreloaderContext from "../Components/Loader/PreloaderContext";
import App from "../Components/App";

export default function Home() {
  return (
    <PreloaderContext>
      <App />
      <Analytics />
    </PreloaderContext>
  );
}
