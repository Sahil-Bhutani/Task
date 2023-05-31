import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import MainPage from "./components/MainPage";
import Sidebar from "./components/Sidebar";
import AllGroups from "./components/Expanded_Card";
import Table from "./components/Table";
import Expanded_Card from "./components/Expanded_Card";

function App() {
  return (
    <>
      <section className="dahboardMain">
        <BrowserRouter>
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="fulBodyPart">
            <header className="navbar">
              <Navbar />
            </header>
            <div className="bodyPart">
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/expandedCard" element={<Expanded_Card />} />
                <Route path="/table" element={<Table />} />
              </Routes>
            </div>
          </div>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
