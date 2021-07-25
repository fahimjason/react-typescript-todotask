import React, { useState } from 'react';
import Contact from '../contact/Contact';

interface IContactInfo {
    name: string,
    email: string
}

const Contacts = () => {
    const [contact, setContact] = useState({} as IContactInfo);
    const [contactList, setContactList] = useState<IContactInfo[]>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContact({
            ...contact,
            [e.target.name]: e.target.value
        })
    }

    const handleContact = () => {
        setContactList([...contactList, contact]);
        setContact({
            name: "",
            email: "",
        });
    }

    const handleRemove = (email: string) => {
        const newContactList = contactList.filter(contact => contact.email !== email)
        setContactList(newContactList);
    }
    return (
        <div>
            <input
                value={contact.name}
                onChange={handleChange}
                name="name"
                placeholder="Contact Name"
                type="text"
            />
            <input
                value={contact.email}
                onChange={handleChange}
                name="email"
                placeholder="Contact Email"
                type="email"
            />
            <button onClick={handleContact}>Add</button>

            {
                contactList.map((contact) =>
                    <Contact
                        key={contact.name}
                        name={contact.name}
                        email={contact.email}
                        handleRemove={handleRemove}
                    />
                )
            }
        </div>
    );
};

export default Contacts;