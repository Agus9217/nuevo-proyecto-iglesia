import { Eventos, Hero, Ministerios } from "@/app/components";
import { AboutUs } from "@/app/components/aboutUs/AboutUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Ministerios />
      <Eventos />
    </>
  );
}
