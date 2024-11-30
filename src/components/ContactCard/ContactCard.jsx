import './ContactCard.css'
import {Link} from 'react-router-dom'; 

const ContactCard = ({contact}) => {
  return (

    <div className='ContactCard'>

      <h4>{contact.name}</h4>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button> <Link to='/detailcontact'>Más detalle</Link></button>
      <button>Edit</button>
      <button>Delete</button>
    </div>

  );
}

export default ContactCard;

