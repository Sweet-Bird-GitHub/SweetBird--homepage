import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './styles/App.css';
import Main from './components/Main.js'
import SignIn from './components/SignIn.js'
import SignUp from './components/signUp.js'
import Bulletin from './components/Bulletin.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/bulletin" element={<Bulletin/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
