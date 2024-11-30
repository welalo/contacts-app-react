import './DetailContact.css';

const DetailContact = ({contact}) => {

    return (
        <div className='DetailContact'>
            <h2>{contact.name}</h2>
            <p>{contact.username}</p>
            <p>{contact.phone}</p>
            <p>{contact.website}</p>
            <p>{contact.address.street}</p>
        </div>
    );
}

export default DetailContact;