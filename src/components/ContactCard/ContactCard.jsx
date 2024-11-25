import './ContactCard.css'

const ContactCard = ({contact}) => {
  return (
    <div className='ContactCard'>
      <h4>{contact.nombre}</h4>
      <p>{contact.email}</p>
      <p>{contact.telefono}</p>
    </div>
  );
}

export default ContactCard;

