import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import Music from "./pages/Music";
import Contacts from "./pages/Contacts";
import Name1 from "./pages/Name1";
import Name2 from "./pages/Name2";
import Home from "./pages/Home";
import { useState } from "react";

function App() {
  let items = ["Vega", "Sirius", "Rigel", "Betelgeus", "Antares"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisisbility] = useState(false);

  return (
    <>
      <Navbar />
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
