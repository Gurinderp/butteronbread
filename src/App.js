import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./pages/Nav"
import Home from "./pages/Home"
import Footer from "./pages/Footer"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Route exact path="/">
            <Home />
          </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
