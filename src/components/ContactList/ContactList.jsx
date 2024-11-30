import { useContext } from 'react';
import './ContactList.css'
import ContactCard from '../ContactCard/ContactCard';
import { ContactsContext } from '../../contexts/Contacts';

const ContactList = () => {
  

  const {contacts, valueSearch} = useContext(ContactsContext)

  const productsFiltered = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(valueSearch.toLowerCase())
  });
  
  return (
    productsFiltered.map((contact, index) => 
      <ContactCard key={index} contact = {contact}/> 
    )
  )
}

export default ContactList;

