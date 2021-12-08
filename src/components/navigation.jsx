import { Link } from "react-router-dom"


function Navigation(props){
    const nav = {
        height: "100vh",
        width: "25%",
        backgroundColor: "green",
        margin: "0px"
    }

    const h1 = {
        margin: "0px",
        padding: "10px"
    }

    const link = {
        padding: "10px",
        margin: "20px"
    }
    return (
        <div style={nav}>
            <div>
                <h1 style={h1}>Address Book</h1>
            </div>
            <div>
                <Link to="/" style={link}>Home</Link>
            </div>
            <br/>
            <div>
                <Link to="/contacts" style={link}>Contacts</Link>
            </div>
        </div>
    )
}

export default Navigation