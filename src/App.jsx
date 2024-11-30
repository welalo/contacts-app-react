import './App.css'
import { Routes, Route } from 'react-router-dom';
import Contacts from './components/Contacts/Contacts';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import AddContact from './components/AddContact/AddContact';

const App = () => {
  return (
    <div className="App">

        <Header />

        <Routes>
            <Route path="/" element={ <Login /> } />
            <Route path="contacts" element={ <Contacts /> } />
            <Route path="contacts/newContact" element={<AddContact />} />
        </Routes>
    </div>
  );
}

export default App;
