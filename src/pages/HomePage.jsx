import { useState } from "react"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos"
import { Link } from "react-router-dom"

function HomePage({contacts}){
    const [currentImg, setCurrentImg] = useState(0)

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{backgroundImage: `url(${contacts[currentImg]?.image})`}}>
                <div className="left" onClick={() => currentImg > 0 && setCurrentImg(currentImg - 1)}>
                    <ArrowBackIosIcon/>
                </div>
                <div className="center">
                    <Link to="/contacts">
                        <button className="see-all">See All Contacts</button>
                    </Link>
                </div>
                <div className="right" onClick={() => currentImg < contacts.length - 1 && setCurrentImg(currentImg + 1)}>
                    <ArrowForwardIosIcon/>
                </div>
            </div>
        </div>
    )
  
}

export default HomePage