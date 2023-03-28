import "./components/assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer";
import Routes from "./components/routes";
import { FiChevronsDown } from "react-icons/fi";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="navbar navbar-light navbar-expand-md navigation-home">
          <div className="container">
            <h1 style={{ color: "green" }}>SanDas</h1>
            <button
              data-bs-toggle="collapse"
              className="navbar-toggler"
              data-bs-target="#navcol-1"
            >
              <span className="visually-hidden">Toggle navigation</span>
              <span className="">
                <FiChevronsDown />
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navcol-1">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link home-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link home-link" href="/projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link home-link" href="/methods">
                    Methods
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link home-link" href="/team">
                    Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link home-link" href="/login">
                    Log in
                  </a>
                </li>
                <li className="nav-item">
                  <p className="nav-itemideas">
                    <a className="nav-link home-link" href="/getearlyacess">
                      Get early acess
                    </a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes />

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
