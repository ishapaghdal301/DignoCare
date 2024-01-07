import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Login from './components/login/Login';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;