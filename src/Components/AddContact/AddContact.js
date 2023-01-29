import { useState } from "react";

const AddContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    // if the from values are empty, display a message
    if (!contact.name || !contact.email) {
      alert("all fields are mandatory");
      return;
    }
    setContact({ name: "", email: "" });
    e.preventDefault();
  };

  return (
    <form onSubmit={submitForm}>
      <div className='fromControl'>
        <label>Name</label>
        <input
          type='text'
          name='name'
          value={contact.name}
          onChange={changeHandler}
        />
      </div>
      <div className='fromControl'>
        <label>Email</label>
        <input
          type='text'
          name='email'
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type='submit'>Add Contact</button>
    </form>
  );
};

export default AddContact;
