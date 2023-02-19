import React from "react";

export const Footer = () =>{

    const year = new Date().getFullYear();

    return (
        <footer className="footer">
            <p className="footer__text">
                &#169; Hillel IT school final project created by Dmytro Stetsenko. {year} year.
            </p>
        </footer>
    )
}