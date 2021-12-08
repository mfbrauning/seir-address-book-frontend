import Contact from "../components/contact"
import Modal from "../components/Modal";
import Form from "./Form";
import { useState } from "react"

function AllContacts(props){
    const nullContact = {
        name: "",
        birthday: "",
        email: "",
        phone: "",
        image: ""
    }

    const addContacts = async (contact) => {
        await fetch(props.url, {
          method: "post",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contact)
        })
        props.getContacts()
    }

    const h1 = {
        textAlign: "center",
        margin: "10px",
      };

      
    const [isOpen, setOpen] = useState(false)

    return (
        <div>
        <h1 style={h1}>Contacts</h1>
        <button onClick={() => setOpen(true)}>Add Contact</button>
        <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <h1>Add Contact</h1>
                <Form initialContact={nullContact} handleSubmit={addContacts} buttonLabel="create contact"/>
        </Modal>
        {props.contacts.map((contact) => <Contact contact={contact} key={contact.id}/>)}
        </div>
        )
}

export default AllContacts