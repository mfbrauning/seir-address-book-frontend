import { Link } from "react-router-dom"

function Contact({contact}){
    //////////////////
    // Style Objects
    //////////////////
    const div = {
        textAlign: "center",
        border: "3px solid",
        margin: "10px auto",
        width: "80%",
    };


    return (
        <div style={div}>
            <Link to={`/contact/${contact.id}`}>
                <h1>{contact.name}</h1>
            </Link>
            <h2>{contact.birthday}</h2>
        </div>
    )
}

export default Contact