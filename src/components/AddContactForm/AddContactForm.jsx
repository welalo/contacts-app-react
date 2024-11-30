import './AddContactForm.css'

const AddContactForm = ({newContact}) => {
  return (
    <>
      <div>
        <input type="text" placeholder='name' onChange={(event) => newContact.setNewContactName(event.target.value)} value={newContact.newContactName}/>
      </div>
      <div>
        <input type="text" placeholder='email' onChange={(event) => newContact.setNewContactEmail(event.target.value)} value={newContact.newContactEmail}/>
      </div>
      <div>  
        <input type="text" placeholder='phone' onChange={(event) => newContact.setNewContactPhone(event.target.value)} value={newContact.newContactPhone}/>
      </div>
    </>
  );
}

export default AddContactForm;

