import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Pages/Layout";
import TicTacToe from "./Pages/TicTacToe";
import AlarmClock from "./Pages/AlarmClock";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="Home" element={<Home />} />
          <Route path="TicTacToe"  element={<TicTacToe />} />
          <Route path="Clock"   element={<AlarmClock />} />
          <Route path="Contact" element={<Contact />} />
          <Route path="About" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<><App /></>, document.getElementById("root"));
