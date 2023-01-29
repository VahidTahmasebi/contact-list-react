import { useState } from "react";
import { Link } from "react-router-dom";

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
        
      </div>
    </section>
  );
};

export default ContactList;
