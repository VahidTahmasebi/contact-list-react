import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import addOneContact from "../../services/addContactService";
import "../form.css";
const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const navigate = useNavigate();

  // change handler for input all
  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  // data send the form handler
  const submitForm = async (e) => {
    // if the from values are empty, display a message
    if (!contact.name || !contact.email) {
      alert("all fields are mandatory");
      return;
    }
    e.preventDefault();
    try {
      // send data to the server
      await addOneContact(contact);
      setContact({ name: "", email: "" });
      // after clicking, it will transfer to the main page
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={submitForm}>
      <div className='formControl'>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className='formControl'>
        <label>Email</label>
        <input
          type='text'
          name='email'
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type='submit'>Add Contact</button>
      <Link to='/' className="Link">go back contact list</Link>
    </form>
  );
};

export default AddContact;
