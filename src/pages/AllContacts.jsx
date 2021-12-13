import Contact from "../components/Contact"
import Modal from "../components/Modal";
import Form from "../components/Form";
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


      
    const [isOpen, setOpen] = useState(false)

    return (
        <div class="all-contacts">
        <div class="all-contacts-title">
          <h1>Contacts</h1>
          <button onClick={() => setOpen(true)}>Add Contact</button>
        </div>
        <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <h1>Add Contact</h1>
                <Form initialContact={nullContact} handleSubmit={addContacts} buttonLabel="create contact" isOpen={isOpen} close={() => setOpen(false)}/>
        </Modal>
        {props.contacts.map((contact) => <Contact contact={contact} key={contact.id}/>)}
        </div>
        )
}

export default AllContacts