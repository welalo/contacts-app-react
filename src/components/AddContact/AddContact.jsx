import { useState, useContext } from 'react';
import './AddContact.css'
import AddContactForm from '../AddContactForm/AddContactForm';

import { ContactsContext } from '../../contexts/Contacts';


const AddContact = () => {
  
  const {addContact} = useContext(ContactsContext);
  console.log(addContact)

  const [newContactName, setNewContactName] = useState('')
  const [newContactEmail, setNewContactEmail] = useState('')
  const [newContactPhone, setNewContactPhone] = useState('')

  const add = () => {
    addContact(newContactName, newContactEmail, newContactPhone)
 
    setNewContactName('')
    setNewContactEmail('')
    setNewContactPhone('')
  }

  return (
    <div>
      <AddContactForm newContact={{newContactName, newContactEmail, newContactPhone, setNewContactName, setNewContactEmail, setNewContactPhone}}/>
      <button onClick={add}>Add Contact</button>
    </div>
  );
}

export default AddContact;

