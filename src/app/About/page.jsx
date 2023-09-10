import dynamic from "next/dynamic";

const AboutPage = dynamic(() => import("../src/Components/About/AboutPage"));
export default function about() {
  return <AboutPage />;
}
