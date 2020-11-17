import "./assets/main.css";
import { Fullpage } from "./Components/FullPage";
import { Header } from "./Components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./pages/About";
import { Work } from "./pages/Work";

export const Users = () => <div>Users Page</div>;

function App() {
  return (
    <div className="App">
      <Router>
        
        
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <Header />
            <Fullpage />
            <p class="scrollDown">SCROLLDOWN</p>
            <div class="sky-color"></div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
