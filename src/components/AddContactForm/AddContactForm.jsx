import './AddContactForm.css'

const AddContactForm = ({setNewContactName, setNewContactEmail, setNewContactTelefono}) => {
  return (
    <>
      <div>
        <input type="text" placeholder='nombre' onChange={(event) => setNewContactName(event.target.value)}/>
      </div>
      <div>
        <input type="text" placeholder='email' onChange={(event) => setNewContactEmail(event.target.value)}/>
      </div>
      <div>  
        <input type="text" placeholder='telefono' onChange={(event) => setNewContactTelefono(event.target.value)}/>
      </div>
    </>
  );
}

export default AddContactForm;

