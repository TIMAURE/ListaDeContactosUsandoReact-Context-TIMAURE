import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const ContactList = () => {
	const { store, actions } = useContext(Context);
    
    const miFuncion =() =>{
        actions.addContact()
    };

	return (
		<div className="container">
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
                        console.log()
                    ) })}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
