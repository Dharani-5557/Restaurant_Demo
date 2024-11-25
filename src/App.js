
import Header from "./components/Header"
import './App.css'
import Main from "./components/Main"
import About from "./components/About"
import Contact from "./components/Contact"
import { Routes, Route } from "react-router-dom"
import Ourmenu from "./components/Ourmenu"


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Header />}></Route>
        <Route path='/main' element={<Main></Main>}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/Ourmenu' element={<Ourmenu />}></Route>
        <Route path='/contact' element={<Contact />}></Route>

      </Routes>
    </>
  );
}

export default App;
