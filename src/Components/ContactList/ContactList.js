import { useState } from "react";
import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);

  return (
    <section className='listWrapper'>
      <div className='contactList'>
        <div className='listHeader'>
          <h2>Contacts</h2>
          <Link to='/add'>
            <button>Add</button>
          </Link>
        </div>
        {contacts ? (
          contacts.map((contact) => {
            return <Contact key={contact} contact={contact} />;
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
