import React, { useState } from "react";
import Login from "./Login";
import Workflow from "./Workflow";
import "./styles.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="app-container">
      {loggedIn ? <Workflow /> : <Login onLogin={() => setLoggedIn(true)} />}
    </div>
  );
}

export default App;
