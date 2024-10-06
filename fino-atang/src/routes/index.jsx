import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import Csr from "~/components/CSR-heading";

export default function Home() {
  return (
    <main>
      <Title>Atang Fino: Portfolio</Title>
      <Counter />
      <Csr />
    </main>
  );
}
