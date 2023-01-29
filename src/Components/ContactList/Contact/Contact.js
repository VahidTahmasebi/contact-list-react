import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = ({ contact }) => {
  const { id, name, email } = contact;

  return (
    <div className='item'>
      <div style={{ display: "flex", alignItems: "center" }}>
        <FaUserCircle className='icon' alt='user' />
        <Link to={`user/${id}`}>
          <div className='userInfo'>
            <p>name: {name}</p>
            <p>email: {email}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
