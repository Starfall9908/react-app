import Home from "./pages/Home";
import Music from "./pages/Music";
import Name1 from "./pages/Name1";
import Name2 from "./pages/Name2";
import NavbarComp from "./components/NavbarComp";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <NavbarComp mode={mode} toggleMode={toggleMode} />
      <Router>
        <Routes>
          <Route
            path="/music"
            element={<Music mode={mode} toggleMode={toggleMode} />}
          />
          <Route
            path="/name1"
            element={<Name1 mode={mode} toggleMode={toggleMode} />}
          />
          <Route
            path="/name2"
            element={<Name2 mode={mode} toggleMode={toggleMode} />}
          />
          <Route
            path="/"
            element={<Home mode={mode} toggleMode={toggleMode} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
