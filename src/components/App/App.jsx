import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import { useState, useEffect } from "react";
import css from "./App.module.css";
const initialValues = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const savedNumbers = window.localStorage.getItem("saved-contact");
    if (savedNumbers !== null) {
      return JSON.parse(savedNumbers);
    }
    return initialValues;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-contact", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const updateContactList = (update) => {
    setContacts((prevContacts) => [...prevContacts, update]);
  };

  const filteredContacts = contacts.filter(
    (contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  const deleteContacts = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm saveContact={updateContactList} />
      <SearchBox searchContacts={setFilter} />
      <ContactList
        contacts={filteredContacts}
        onDelete={deleteContacts}
        filterValue={filter}
      />
    </div>
  );
}

export default App;