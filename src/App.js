import "./assets/main.css";
import { FullPageContainer } from "./Components/FullPageContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AboutMe } from "./pages/AboutMe";
import { Work } from "./pages/Work";
import axios from 'axios';
import React, {useEffect, useState } from 'react';

// import GA from './seo/GoogleAnalytics'
// import TagManager from 'react-gtm-module'

// const tagManagerArgs = {
//     gtmId: 'G-WMG033N2XN'
// };

// TagManager.initialize(tagManagerArgs)

function App() {

  const [location, setLocation] = useState(null);

  const ipLookUp = () => {
    axios.get(`http://ip-api.com/json`).then(
      (res) => {
        console.log("User's Location Data is ", res);
        console.log("User's Country", res.country);
        // getAddress(res.lat, res.lon);

        setLocation(location);
        putGoogleAnalytic(res.data);
      },
      (err) => {
        console.log("Request failed.  Returned status of", err);
      }
    );
  };

  // const getAddress = () => {
  //   axios.get(`https://maps.googleapis.com/maps/api/geocode/json?' + 'latlng=' + latitude + ',' + longitude + '&key=' + GOOGLE_MAP_KEY`).then(
  //     (res) => {
  //       console.log('User\'s Address Data is ', res)
  //     },
  //     (err) => {
  //       console.log('Request failed.  Returned status of', err)
  //     }
  //   );
  // }

  const putGoogleAnalytic = (res) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "ecommerce_impressions",
      ecommerce: {
          impressions: res
      }
  })
  }

  useEffect(() => {
  
    ipLookUp()
    

    // if ("geolocation" in navigator) {
    //   // check if geolocation is supported/enabled on current browser
    //   navigator.geolocation.getCurrentPosition(
    //    function success(position) {
    //      // for when getting location is a success
    //      console.log('latitude', position.coords.latitude, 'longitude', position.coords.longitude);
    //      getAddress(position.coords.latitude, position.coords.longitude)
    //    },
    //   function error(error_message) {
    //     // for when getting location results in an error
    //     console.error('An error has occured while retrieving location', error_message)
    //     ipLookUp()
    //     putGoogleAnalytic();
    //   });
    // } else {
    //   // geolocation is not supported
    //   // get your location some other way
    //   console.log('geolocation is not enabled on this browser')
    //   ipLookUp()
    //   putGoogleAnalytic();
    // }
    
    return () => {
      
    }

  })

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
