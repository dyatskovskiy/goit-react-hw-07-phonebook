import { Contact } from 'components/Contact/Contact';
import { Filter } from 'components/Filter/Filter';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = contacts.filter(item => {
    return item.name.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <>
      <h2>Contacts</h2>
      <Filter />
      <ul>
        {filteredContacts.map(item => (
          <Contact
            key={item.id}
            id={item.id}
            name={item.name}
            number={item.phone}
          />
        ))}
      </ul>
    </>
  );
};
