import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<AddContact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
