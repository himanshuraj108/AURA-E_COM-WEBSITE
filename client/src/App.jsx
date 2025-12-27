import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import  {Toaster}  from "react-hot-toast";
import Shopping from "./pages/Shopping";
import Loading from "./components/Loading";

const App = () => {
  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </div>
  );
};

export default App;
