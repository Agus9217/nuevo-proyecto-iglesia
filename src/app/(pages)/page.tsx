import { Eventos, Form, Hero, Ministerios, AboutUs, ContainerPage } from "@/app/components";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ContainerPage
        width={'1920px'}
      >
        <AboutUs />
        <Ministerios />
        <Eventos />
        <Form />
      </ContainerPage>
    </>
  );
}
