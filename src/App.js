import{BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';
import Sidebar from "./Components/Sidebar";
import Assistant from "./Pages/Assistant";
import Dashboard from "./Pages/Dashboard";
import Flights from "./Pages/Flights";
import Satitics from "./Pages/Satitics";
import Tours from "./Pages/Tours";

function App() {
  return (
    <>
   
      <BrowserRouter>
      <Sidebar>
      <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/flights" element={<Flights/>}/>
          <Route path="/satitics" element={<Satitics/>}/>
          <Route path="/tours" element={<Tours/>}/>
          <Route path="/assistant" element={<Assistant/>}/>
          <Route path="*" element={<h2>Error Page: 404 page not found</h2>}/>
      </Routes>
      </Sidebar> 
      </BrowserRouter>
    </>
  );
}

export default App;
