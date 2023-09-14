import Alert from "../components/Alert";
import Button from "../components/Button";
import ListGroup from "../components/ListGroup";
import React, { MouseEventHandler, useState } from "react";

function Home(props: {
  toggleMode: MouseEventHandler<HTMLInputElement>;
  mode: string;
}) {
  let textMode = props.mode === "light" ? "black" : "white";

  let items = ["Vega", "Sirius", "Rigel", "Betelgeus", "Antares"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [alertVisible, setAlertVisisbility] = useState(false);

  return (
    <div>
      <h1 className="text-center">Home</h1>
      <ListGroup
        items={items}
        heading="Stars"
        onSelectItem={handleSelectItem}
      />
      {alertVisible && (
        <Alert onClose={() => setAlertVisisbility(false)}>My Alert</Alert>
      )}
      <Button onClick={() => setAlertVisisbility(true)}>Big Button</Button>
    </div>
  );
}

export default Home;
