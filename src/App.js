import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AddContact from "./Components/AddContact/AddContact";
import ContactDetail from "./Components/ContactDetail.js/ContactDetail";
import ContactList from "./Components/ContactList/ContactList";

function App() {
  return (
    <div className='App'>
      <h1>Contact App</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/add' element={<AddContact />} />
          <Route path='/' element={<ContactList />} />
          <Route path='/user/:id' element={<ContactDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
