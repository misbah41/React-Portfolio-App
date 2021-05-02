import "./App.css";
import Home from "./Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Home/About/About";
import Service from "./Home/Service/Service";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
