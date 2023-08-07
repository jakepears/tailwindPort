import PreloaderContext from "../components/Loader/PreloaderContext";
import App from "../Components/App.jsx";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return(
  <PreloaderContext>
  <App />
  <Analytics />
  </PreloaderContext>
)
}
