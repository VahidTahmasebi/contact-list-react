import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import deleteContactService from "../../services/deleteContactService";
import getContacts from "../../services/getContactsService";
import Contact from "./Contact/Contact";
import "./contactList.css";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Receive data from the server
    const fetchContacts = async () => {
      const { data } = await getContacts();
      setContacts(data);
      setAllContacts(data);
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

  // Search handler
  const searchHandler = (e) => {
    setSearchTerm(e.target.value);
    const search = e.target.value;

    // if the input value was not empty
    // convert the contact subset property to a string
    if (search !== "") {
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
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
        <div>
          <input type='text' value={searchTerm} onChange={searchHandler} />
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
