//import React, { useState } from 'react';
import './App.css';
// import Contact, { ContactDemo } from './components/contact/Contact';
// import Contacts from './components/Contacts/Contacts';
import AddTask from './components/AddTask/AddTask';

function App() {

    // const [contact, setContact] = useState("");
    // const [contactList, setContactList] = useState<string[]>([]);

    // const handleContact = () => {
    //   setContactList([...contactList, contact]);
    //   setContact("");
    // }

    return (
        <div className="">
            {/* <input
        value={contact}
        onChange={e => setContact(e.target.value)}
        name="name"
        placeholder="Contact Name"
        type="text"
      />

      <button onClick={handleContact}>Add</button> */}

            {/* {
        contactList.map(contact => <Contact key={contact} name={contact} />)
      }
      <ContactDemo name="Jisan" email={"@mail"} /> */}

            <AddTask />
            {/* <Contacts /> */}
        </div>
    );
}

export default App;
