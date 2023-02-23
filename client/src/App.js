import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/api/login" element={<Login />} />
        <Route path="/api/users" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
