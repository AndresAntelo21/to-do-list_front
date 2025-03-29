import { Route, Routes } from "react-router-dom";
import { Welcome } from "@/components/welcome";
export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
      </Routes>
    </>
  );
};
