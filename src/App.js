import "./assets/main.css";
import { FullPageContainer } from "./Components/FullPageContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Work } from "./pages/Work";
import GA from './seo/GoogleAnalytics'

function App() {
  return (
    <div className="App">
      <Router>
        { GA.init() && <GA.RouteTracker /> }
        <Switch>
        <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/">
            <FullPageContainer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
