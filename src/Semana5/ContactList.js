export default function ContactList({ selectedContact, contacts, onSelect }) {
    return (
      <select
        className="contact-list"
        value={selectedContact.email}
        onChange={e => {
          const contact = contacts.find(c => c.email === e.target.value);
          onSelect(contact);
        }}
      >
        {contacts.map(contact => (
          <option key={contact.email} value={contact.email}>
            {contact.name}
          </option>
        ))}
      </select>
    );
  }
  