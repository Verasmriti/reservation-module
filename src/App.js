import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Feedback from './components/Feedback';
import Home from './components/Home';
import Payment from './components/Payment';
function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/payment" element={<Payment/>}></Route>
          <Route exact path="/feedback" element={<Feedback/>}></Route>
        </Routes>
      </Router>    
    </React.Fragment>  
  );
}

export default App;
