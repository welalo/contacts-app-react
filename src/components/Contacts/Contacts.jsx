
import { useState } from 'react';

import './Contacts.css'
import SearchBar from '../SearchBar/SearchBar';
import ContactList from '../ContactList/ContactList';
import AddContact from '../AddContact/AddContact';

const Contacts = () => {

  const [contacts, setContacts] = useState([
    {
      id: 1,
      nombre: 'Juan Perez',
      email: 'juanperez@correo.es',
      telefono: '666 666 666'
    },
    {
      id: 2,
      nombre: 'Manuel Rodriguez',
      email: 'manuel@correo.es',
      telefono: '666 777 777'
    }
  ])
  
  const [valueSearch, setValueSearch] = useState('')



  return (
    <div>
        <h1>Contacts APP</h1>
        <hr />
        <SearchBar valueSearch={valueSearch} setValueSearch={setValueSearch} />
        <br />
        <ContactList contacts={contacts} valueSearch={valueSearch}/>
        <hr />
        <AddContact contacts={contacts} setContacts={setContacts}/>
    </div>
  );
}

export default Contacts;

