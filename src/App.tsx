import { Route, Routes } from "react-router-dom";
import { Welcome } from "@/components/welcome";
import { Login } from "@/components/login";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};
