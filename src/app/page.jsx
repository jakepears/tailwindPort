import { Analytics } from "@vercel/analytics/react";
import dynamic from "next/dynamic";

const PreloaderContext = dynamic(() =>
  import("../Components/Loader/PreloaderContext")
);
const App = dynamic(() => import("../Components/App.jsx"), { useSSR: true });

export default function Home() {
  return (
    <PreloaderContext>
      <App />
      <Analytics />
    </PreloaderContext>
  );
}
