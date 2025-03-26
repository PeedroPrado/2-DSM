// Arquivo App.tsx
import Form from "./components/Form";
import List from "./components/list";
import { ProviderCar } from ".//contexts/Ctxcar";

export default function App2() {
  return (
    <>
      <ProviderCar>
        <Form />
        <List />
      </ProviderCar>
    </>
  );
}
 