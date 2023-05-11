import { type } from "@testing-library/user-event/dist/type";
import '../styles/Navigation.css'
import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

function Navigation() {
    return (
    <div className="navBar">
        <ul>
            <li className="navLogo"><a href="##"> <img src="../assets/logo-dark.png"></img>papercard.co</a></li>
            <li><a href="##"><Mail color="black" size={20} strokeWidth={1} /></a></li>
            <li><a href="##"><Twitter color="black" size={20} strokeWidth={1} /></a></li>
            <li><a href="##"><Linkedin color="black" size={20} strokeWidth={1} /></a></li>
            <li><a href="##"><Instagram color="black" size={20} strokeWidth={1} /></a></li>
            <li><a href="##"><Facebook color="black" size={20} strokeWidth={1} /></a></li>
        </ul>
    </div>
    
    )
}

export default Navigation;