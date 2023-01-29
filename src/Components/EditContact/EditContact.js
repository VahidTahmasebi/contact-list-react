import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import getContacts from "../../services/getContactsService";
import getOneContact from "../../services/getOneContact";
import updateContact from "../../services/UpdateContact";

const EditContact = () => {
  const [contact, setContact] = useState({ name: "", email: "" });

  const navigate = useNavigate();

  const location = useLocation();
  const { id } = location.state.contact;

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      alert("all fields are mandatory");
      return;
    }
    e.preventDefault();
    try {
      await updateContact(id, contact);
      await getContacts();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOneContact(id)
      .then((result) =>
        setContact({ name: result.data.name, email: result.data.email }),
      )
      .catch((err) => console.log(err));
  }, []);

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
          type='email'
          name='email'
          value={contact.email}
          onChange={changeHandler}
        />
      </div>
      <button type='submit'>update Contact</button>
      <Link to='/'>go back home</Link>
    </form>
  );
};

export default EditContact;
