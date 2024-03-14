import './App.css';
import Header from './component/header';
import AddStudent from './component/AddStudent';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AllStudent from './component/AllStudent';


function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        
        <Routes>
          <Route path="/all" exact element={<AllStudent />} />
          <Route path="/add" exact element={<AddStudent />} />
        </Routes>
        
      </div>
    </Router>
  );
}

export default App;
