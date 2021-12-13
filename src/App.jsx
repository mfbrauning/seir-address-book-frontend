import AllContacts from "./pages/AllContacts"
import SingleContact from "./pages/SingleContact"
import HomePage from "./pages/HomePage"
import Navigation from "./components/navigation"

import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"

function App(props) {

  ////////////////////
  // Style Objects
  ////////////////////


  ///////////////
  // State & Other Variables
  ///////////////
  
  const url = "https://fb-address-book-backend.herokuapp.com/contacts/"

  const [contacts, setContacts] = useState([])

 

  //////////////
  // Functions
  //////////////

  const getContacts = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setContacts(data)
  }


  

  
  //////////////
  // useEffects
  //////////////

  useEffect(() => {
    getContacts()
  }, [])

 
  //////////////////////////
  // Returned JSX
  //////////////////////////

  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<HomePage contacts={contacts}/>}/>
        <Route path="/contacts" element={<AllContacts contacts={contacts} getContacts={getContacts} url={url}/>}/>
        <Route path="/contacts/:id" element={<SingleContact contacts={contacts} getContacts={getContacts} url={url}/>}/>
      </Routes>
      {/* <Footer/> */}
    </div>
  )
}

export default App
