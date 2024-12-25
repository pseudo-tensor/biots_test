import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { RecoilRoot } from "recoil";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import EventCard from "./pages/Events";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<EventCard />} />
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
