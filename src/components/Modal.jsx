import ReactDOM from "react-dom"
const portalRoot = document.getElementById("portal-root")



function Modal({isOpen, close, children}){
    if(!isOpen) return null;
    
    return ReactDOM.createPortal(
        <div class="modal-background">
            <div class="modal-content">
                <button onClick={close}>close</button>
                {children}
            </div>
        </div>,
        portalRoot
    )
}

export default Modal