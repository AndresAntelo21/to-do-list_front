import { Route, Routes } from "react-router-dom";
import { Login } from "@/components/login";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />
      </Routes>
    </>
  );
};
