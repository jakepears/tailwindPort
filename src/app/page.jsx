import { Analytics } from "@vercel/analytics/react";
import PreloaderContext from "../Components/Loader/PreloaderContext";
import App from "../Components/App";

export default async function Home() {
  return (
    <PreloaderContext>
      <App />
      <Analytics />
    </PreloaderContext>
  );
}
