import React from "react";

export const Header = ({children}) => {
    
    return (
        <header className="header">
            <nav className="header__navigation">
                {children}
            </nav>
        </header>
    );
};