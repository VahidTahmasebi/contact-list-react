import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactList from "./Components/ContactList/ContactList";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<AddContact />} />
          <Route path='/' element={<ContactList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
