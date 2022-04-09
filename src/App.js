import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";


import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newProject">Novo Projeto</Link>
      </div>

      <Container>
        <Routes>
            <Route path="/" element={<Home />}></Route>

            <Route path="/company" element={<Company />}></Route>

            <Route path="/contact" element={<Contact />}></Route>

            <Route path="/newProject" element={<NewProject />}></Route>
        </Routes>
      </Container>

      <p>Footer</p>
    </Router>
  );
}

export default App;
