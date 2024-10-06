import { clientOnly } from "@solidjs/start";

const clientOnlyHeading = clientOnly(() => import("~/components/Heading"));
export default function Csr(){
    return  <clientOnlyHeading/>
}