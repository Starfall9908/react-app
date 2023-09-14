import React, { MouseEventHandler } from "react";

function Name2(props: {
  toggleMode: MouseEventHandler<HTMLInputElement>;
  mode: string;
}) {
  let textMode = props.mode === "light" ? "black" : "white";
  return (
    <div>
      <h1 className="text-center">Name2</h1>
    </div>
  );
}

export default Name2;
