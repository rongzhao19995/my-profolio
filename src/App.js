import "./assets/main.css";
import { FullPageContainer } from "./Components/FullPageContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Work } from "./pages/Work";
// import GA from './seo/GoogleAnalytics'
// import TagManager from 'react-gtm-module'

// const tagManagerArgs = {
//     gtmId: 'G-WMG033N2XN'
// };

// TagManager.initialize(tagManagerArgs)

function App() {
  return (
    <div className="App">
      <Router>
        {/* { GA.init() && <GA.RouteTracker /> } */}
        <Switch>
        <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/works">
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
