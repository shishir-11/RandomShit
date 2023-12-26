import Navbar from "./components/Navbar";
import { BrowserRouter as Router , Route , Routes} from "react-router-dom";
import Home from "./pages/Home";
function App() {

  return (
    <div className="App h-screen">
    <Router>
      <div className="navbar h-16"><Navbar/></div>
      <div className="content">
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/about"}>About</Route>
      </Routes>
      </div>
    </Router>
      
    </div>
  );
}

export default App;
