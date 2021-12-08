import { Link, useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import Modal from "../components/Modal"
import Form from "./Form"

function SingleContact(props){
    const navigate = useNavigate()
    const params = useParams()
    const id = parseInt(params.id)
    const contacts = props.contacts
    const contact = contacts.find((contact) => contact.id === id)
    const editContact = {
        name: contact.name,
        birthday: contact.birthday,
        email: contact.email,
        phone: contact.phone,
        image: contact.image
    }

    
    ///////////
    // state
    ///////////

    const [isOpen, setOpen] = useState(false)


    // functions
   

    const updateContacts = async (contact) => {
        await fetch(props.url + id, {
          method: "put",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(contact)
        })
        props.getContacts()
    }

    const deleteContact = async (contact) => {
        await fetch(props.url + id, {
            method: "delete"
        })
        props.getContacts()
        navigate("/contacts")
    }

    
   
   

    return (
        <>
        <div class="single-contact">
            <h1>{contact.name}</h1>
            <h2>{contact.birthday}</h2>
            <h2>{contact.phone}</h2>
            <h2>{contact.email}</h2>
            <img alt="contact photo" src={contact.image}/>
            <br/>
            <button onClick={() => setOpen(true)}>Edit Contact</button>
            <button onClick={deleteContact}>Delete</button>
            <Modal isOpen={isOpen} close={() => setOpen(false)}>
                <h1>Edit Contact</h1>
                <br/>
                <Form initialContact={editContact} handleSubmit={updateContacts} buttonLabel="update contact"/>
            </Modal>
        </div>
        </>
    )
}

export default SingleContact