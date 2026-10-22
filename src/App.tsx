import { Route, Routes } from "react-router";
import Home from "./Home";
import LinkPage from "./LinkPage";
import AllLinks from "./AllLinks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/links/" element={<AllLinks />} />
      <Route path="/links/:title" element={<LinkPage />} />
    </Routes>
  );
}

export default App;
