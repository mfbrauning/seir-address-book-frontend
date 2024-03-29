import { useState } from "react"
import { useNavigate } from "react-router-dom"


function Form({initialContact, handleSubmit, buttonLabel, isOpen, close}){
    const navigate = useNavigate()

    // form
    const [formData, setFormData] = useState(initialContact)

    // functions

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        handleSubmit(formData)
        close()
    }

    return (
        <form onSubmit={handleSubmission}>
            <input
                type="text"
                value={formData.name}
                name="name"
                placeholder="Name"
                onChange={handleChange}
            />
            <br/>
            <input
                type="text"
                value={formData.birthday}
                name="birthday"
                placeholder="Birthday"
                onChange={handleChange}
            />
            <br/>
            <input
                type="text"
                value={formData.email}
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
            <br/>
            <input
                type="text"
                value={formData.phone}
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
            />
            <br/>
            <input
                type="text"
                value={formData.image}
                name="image"
                placeholder="Image URL"
                onChange={handleChange}
            />
            <br/>
            <input type="submit" value={buttonLabel}/>
        </form>)
}

export default Form