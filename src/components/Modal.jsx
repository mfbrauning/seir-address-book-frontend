import ReactDOM from "react-dom"
const portalRoot = document.getElementById("portal-root")

const background = {
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(250,200,240,0.8)",
    position: "fixed",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const content = {
    backgroundColor: "white",
    padding: "20px",
    borderRadius: "20px",
    maxWidth: "90%",
    boxShadow: "0 2px 2px 2px rgba(0,0,0,0.5)"
}

function Modal({isOpen, close, children}){
    if(!isOpen) return null;
    
    return ReactDOM.createPortal(
        <div style={background}>
            <div style={content}>
                <button onClick={close}>close</button>
                {children}
            </div>
        </div>,
        portalRoot
    )
}

export default Modal