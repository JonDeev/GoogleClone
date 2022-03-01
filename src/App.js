import { Home } from "./components/Home";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Gmail } from "./pages/Gmail";
import { Images } from "./pages/Images";

import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/store' element={<Store />} />
        <Route path='/gmail' element={<Gmail />} />
        <Route path='/images' element={<Images />} />
      </Routes>
    </div>
  );
}

export default App;
