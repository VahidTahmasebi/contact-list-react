import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = ({ contact, onDelete }) => {
  const { id, name, email } = contact;

  return (
    <div className='item'>
      <Link to={`user/${id}`} state={{ contact }} className='Link'>
        <div style={{ display: "flex", alignItems: "center" }}>
          <FaUserCircle className='icon' alt='user' />
          <div className='userInfo'>
            <p>name: {name}</p>
            <p>email: {email}</p>
          </div>
        </div>
      </Link>
      <div>
        <Link to={`/edit/${id}`} state={{ contact }}>
          <button className='editBtn'>Edit</button>
        </Link>
        <button onClick={() => onDelete(id)}>Delete</button>
      </div>
    </div>
  );
};

export default Contact;
