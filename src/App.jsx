import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {Home} from "./Pages/Home"
import {Drink} from "./Pages/Drink";
import {DrinksProvider} from "./hook/useDrinks"

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
  <DrinksProvider>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/drink/:drink" element={<Drink/>} />
      </Routes>
    </Router>

  </DrinksProvider>
  );
}

export default App;
