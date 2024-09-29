import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import Heading from "~/components/Heading";

export default function Home() {
  return (
    <main>
      <Title>Atang Fino: Portfolio</Title>
      <Counter />
      <Heading textOne="creatives" textTwo="freelance"/>
    </main>
  );
}
