import { Link, useLocation } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const { name, email } = location.state.contact;

  return (
    <div>
      <p>name {name}</p>
      <p>email {email}</p>
      <Link to='/' className='Link'>
        go to contact list
      </Link>
    </div>
  );
};

export default ContactDetail;
