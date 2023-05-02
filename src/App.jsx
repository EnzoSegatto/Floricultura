import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.JSX";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";


function App(){
 return(
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="./pages/Login.jsx" element={<Login/>}/>
        <Route path="./pages/Produtos.jsx" element={<Produtos/>}/>
      </Routes>
    </BrowserRouter>
  </div>
 )
}
export default App
