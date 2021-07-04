import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css"
import Main from "./components/Main/Main";
function App() {
  return (
    <div>
      <CssBaseline />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
