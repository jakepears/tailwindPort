import App from "../Components/App.jsx";
import PreloaderContext from "../Components/Loader/PreloaderContext.jsx";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  
  return(
  <PreloaderContext>
  <App />
  <Analytics />
  </PreloaderContext>
)
}
