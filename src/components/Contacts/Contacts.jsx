
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Contacts.css'
import SearchBar from '../SearchBar/SearchBar';
import ContactList from '../ContactList/ContactList';
import { ContactsContext } from '../../contexts/Contacts';

const Contacts = () => {

  const [contacts, setContacts] = useState([])
  
  const [valueSearch, setValueSearch] = useState('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          console.log('Respuesta de red OK pero respuesta de HTTP no OK');
        }
      })
      .then((data) => {
        setContacts(data);
      })
      .catch((error) => {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      })
  }, [])

  const addContact = (newContactName, newContactEmail, newContactPhone) => {
    setContacts([...contacts, {
      id: contacts.length +1,
      name: newContactName,
      email: newContactEmail,
      phone: newContactPhone
    }])
  }

  return (
    <div className='Contacts'>
        <ContactsContext.Provider value={{contacts, addContact, valueSearch}}>

          <SearchBar valueSearch={valueSearch} setValueSearch={setValueSearch} />
          <br />
          <ContactList/>
          <hr />
          <button><Link to="newContact">add</Link></button>

        </ContactsContext.Provider>  
    </div>
  );
}

export default Contacts;

