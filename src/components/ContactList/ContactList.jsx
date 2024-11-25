import './ContactList.css'
import ContactCard from '../ContactCard/ContactCard';

const ContactList = ({contacts, valueSearch}) => {
  
  const productsFiltered = contacts.filter(contact => {
    return contact.nombre.toLowerCase().includes(valueSearch.toLowerCase())
  });
  
  return (
    productsFiltered.map((contact) => 
      <ContactCard key={contact.id} contact = {contact}/> 
    )
  )
}

export default ContactList;

