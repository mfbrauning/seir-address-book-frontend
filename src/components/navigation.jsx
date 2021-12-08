import { Link } from "react-router-dom"


function Navigation(props){
 
    
    return (
        <div class="nav">
            <div>
                <h1>Address Book</h1>
            </div>
            <div>
                <Link to="/">Home</Link>
            </div>
            <br/>
            <div>
                <Link to="/contacts">Contacts</Link>
            </div>
        </div>
    )
}

export default Navigation