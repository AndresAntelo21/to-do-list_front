import { Route, Routes } from "react-router-dom";
import { Login } from "@/components/login";
import { Home } from "./components/home/home";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />

      </Routes>
    </>
  );
};
