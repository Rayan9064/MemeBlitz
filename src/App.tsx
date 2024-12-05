import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import TokenLaunchPlatform from "./pages/TokenLaunch";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* I want to redirect to the blogs page by default when tried to ping diferent router */}
          {/* <Route path="/" element={<Navigate to='/blogs' replace/>}/> */}
          <Route path="/" element={<Home />}/>
          <Route path="/token" element={<TokenLaunchPlatform />}/>

          {/* Catch-all route for any unexpected paths */}
          <Route path="*" element={<Navigate to="/" replace />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
