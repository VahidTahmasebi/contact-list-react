import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import getContacts from "../../services/getContactsService";
import Contact from "./Contact/Contact";

const ContactList = () => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
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
