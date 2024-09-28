import { Title } from "@solidjs/meta";
import Countr from "~/components/Counter";
import Headi from "~/components/Hero";

export default function Home() {
  return (
    <main>
      <Title>Hello World</Title>
      <h1>Hello world!</h1>
      <Countr />
      <p>
        Visit{" "}
        <a href="https://start.solidjs.com" target="_blank">
          start.solidjs.com
        </a>{" "}
        to learn how to build SolidStart apps.
      </p>
      <Headi />
    </main>
  );
}
