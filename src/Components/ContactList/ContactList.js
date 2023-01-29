import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import deleteContactService from "../../services/deleteContactService";
import getContacts from "../../services/getContactsService";
import Contact from "./Contact/Contact";
import "./contactList.css";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    // Receive data from the server
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
    };
    try {
      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  }, []);

  // delete contact handler
  const deleteContactHandler = async (id) => {
    try {
      await deleteContactService(id);
      const filteredContacts = contacts.filter((c) => c.id !== id);
      setContacts(filteredContacts);
    } catch (error) {
      console.log(error);
    }
  };

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
            return (
              <Contact
                key={contact}
                contact={contact}
                onDelete={deleteContactHandler}
              />
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

export default ContactList;
