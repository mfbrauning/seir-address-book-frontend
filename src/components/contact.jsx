import { Link } from "react-router-dom"

function Contact({contact}){
    //////////////////
    // Style Objects
    //////////////////




    return (
        <div class="main-card">
            <div class="main-card-left">
                {contact.name}
                <br/>
                <img alt="contact image" src={contact.image}/>
            </div>
            <div class="main-card-right">
                <Link to={`/contacts/${contact.id}`}>
                    <button>View Contact</button>
                </Link>
            </div>
        </div>
    )
}

export default Contact