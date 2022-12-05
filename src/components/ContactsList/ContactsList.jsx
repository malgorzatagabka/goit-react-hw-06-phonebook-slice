import PropTypes from 'prop-types';
import style from './Contacts.module.css';
import { getFilterValue, getContacts } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';


export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);
  const normalizedFilter = filterValue.toLowerCase();
  const dispatch = useDispatch();
  

const filteredContacts = () => {
  return (
    contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
    ))
  };

  const contactsFilter = filteredContacts();
  
  return (
    <div>
      <ul className={style.contactsList}>
        {contactsFilter.map(({ id, name, number }) => (
          <li key={id} className={style.contactsItem}>
            <span>{`${name}: ${number}`}</span>
            <button
              type="button"
              className={style.contactBtn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        )
        
        
        )}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
