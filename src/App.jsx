// import { Dashboard } from "./component/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./Pages/Home"
import {List} from "./Pages/List";
import {AmountProvider} from "./hook/useAmount"


function App() {
  return (
  <AmountProvider>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          {/* <Route path="/list" element={<List/>} /> */}
      </Routes>
      

    </Router>

    </AmountProvider>
  );
}

export default App;
