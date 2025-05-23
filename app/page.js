import { BackgroundBoxes } from "@/components/Home/BackgroundBoxex";
import { MyProjects } from "@/components/Projects/MyProjects";
import { Skills } from "@/components/Home/Skil";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundBoxes/>
      <Skills />
      <MyProjects />
      <Footer/>
    </>
  );
}
