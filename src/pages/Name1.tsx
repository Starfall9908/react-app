import React, { MouseEventHandler } from "react";

function Name1(props: {
  toggleMode: MouseEventHandler<HTMLInputElement>;
  mode: string;
}) {
  let textMode = props.mode === "light" ? "black" : "white";
  return (
    <div>
      <h1 className="text-center">Name1</h1>
    </div>
  );
}

export default Name1;
