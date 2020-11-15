import './assets/main.css'
import { Fullpage } from './Components/FullPage';
import { Header } from './Components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Fullpage/>
      <p class="scrollDown">SCROLLDOWN</p>
      <div class="sky-color"></div>
    </div>
  );
}

export default App;
