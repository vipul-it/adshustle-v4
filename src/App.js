import { Route, Routes } from "react-router";
import "./App.css";
import Landingpage from "./component/landingpage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landingpage />}></Route>
      </Routes>
    </>
  );
}

export default App;
