import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  const { id, name, email } = contact;

  return (
    <Link to={`user/${id}`} state={{ contact }} className='Link'>
      <div className='item'>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaUserCircle className='icon' alt='user' />
          <div className='userInfo'>
            <p>name: {name}</p>
            <p>email: {email}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Contact;
