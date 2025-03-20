import { Route, Routes } from "react-router-dom";
import { Home } from "@/components/home";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};
