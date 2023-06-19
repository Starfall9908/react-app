import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import NavbarComp from "./components/NavbarComp";
import { useState } from "react";

function App() {
  let items = ["Vega", "Sirius", "Rigel", "Betelgeus", "Antares"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisisbility] = useState(false);

  return (
    <>
      <NavbarComp />
      <ListGroup
        items={items}
        heading="Stars"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisisbility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisisbility(true)}>Big Button</Button>
    </>
  );
}

export default App;
