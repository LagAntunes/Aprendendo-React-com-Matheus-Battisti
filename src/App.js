import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newProject">Novo Projeto</Link>
      </div>

      <Routes>
        <Route path="/"> /**** Parei na aula 18 */
          <Home />
        </Route>

        <Route path="/company">
          <Company />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/newProject">
          <NewProject />
        </Route>
      </Routes>

      <p>Footer</p>
    </Router>
  );
}

export default App;
