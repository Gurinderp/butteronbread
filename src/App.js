import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./pages/Nav"
import Home from "./pages/Home"
import Footer from "./pages/Footer"
import Products from "./pages/Products"
import Bonbread from "./pages/Bonbread"
import Bontoast from "./pages/Bontoast"
import Butter from "./pages/Butter"
import Bread from "./pages/Bread"
import Toast from "./pages/Toast"
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
          <Route path="/products/butteronbread">
            <Bonbread />
          </Route>
          <Route path="/products/butterontoast">
            <Bontoast />
          </Route>
          <Route path="/products/butter">
            <Butter />
          </Route>
          <Route path="/products/bread">
            <Bread />
          </Route>
          <Route path="/products/toast">
            <Toast />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
