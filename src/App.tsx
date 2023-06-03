import Alert from "./components/Alert";
import Button from "./components/Button";
import Home from "./pages/Home";
import ListGroup from "./components/ListGroup";
import Music from "./pages/Music";
import Name1 from "./pages/Name1";
import Name2 from "./pages/Name2";
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
