import { Button } from "@hp/design";
import { sayHello } from "@hp/lib";

export default function Home() {
  return (
    <>
      <div>{sayHello()}</div>
      <Button />
    </>
  );
}
