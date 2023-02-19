import React from "react";

export const Modal = ({active, setActive, children}) => {
    return(
        <div className={active ? 'modal modal--active' : 'modal'} onClick={() => setActive(false)}>
            <div className="modal__content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}