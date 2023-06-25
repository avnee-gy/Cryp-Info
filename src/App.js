import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Coins from "./components/Coins";
import Exchanges from "./components/Exchanges";




function App() {
  return (
    <Router><Header/>
      <Routes>
        
        <Route path="/" element= {<Home/>}/>
        <Route path="/coins" element={<Coins></Coins>}/>
        <Route path="/exchanges" element= {<Exchanges/>}/>
      </Routes>
    </Router>
  );
}

export default App;
