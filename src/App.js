
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Newdash from './components/newdash.jsx';
import NewSidebar from './components/newside.js'
import Dashboard from "./components/data/Dashboard";
import { useState } from "react"


function App() {

  const [query, setQuery] = useState(true)
  return (

    
    <div className="App">
      <Newdash onQuery={setQuery}/>
      <div className='contain'>
      <NewSidebar query = {query}/>      
       
   
      <div className='others'>
      
      <Router>
      <Routes>
          <Route path="/" element={<Dashboard />} />
          </Routes>
          </Router>
      
      </div>
    
      </div>
    </div>
    
  );
}

export default App;
