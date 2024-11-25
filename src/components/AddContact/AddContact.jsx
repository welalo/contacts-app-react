import { useState } from 'react';
import './AddContact.css'
import AddContactForm from '../AddContactForm/AddContactForm';

const AddContact = ({contacts, setContacts}) => {

  const [newContactName, setNewContactName] = useState('')
  const [newContactEmail, setNewContactEmail] = useState('')
  const [newContactTelefono, setNewContactTelefono] = useState('')

  const addContact = () => {
    setContacts([...contacts, {
      id: contacts.length +1,
      nombre: newContactName,
      email: newContactEmail,
      telefono: newContactTelefono
    }])

    setNewContactName('')
    setNewContactEmail('')
    setNewContactTelefono('')
  }

  return (
    <div>
      <AddContactForm setNewContactName={setNewContactName} setNewContactEmail={setNewContactEmail} setNewContactTelefono={setNewContactTelefono}/>
      <button onClick={addContact}>Add Contact</button>
    </div>
  );
}

export default AddContact;

