import { Addcontact } from "../views/AddContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			
			ListContacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getContacts: async () => {				
				try{
				
				const response = await fetch (
					`https://playground.4geeks.com/contact/agendas/TIMAURE`);
				
				if(response.status == 404){
					await getActions().createAgenda();
				}
				if(!response.ok){
					throw `API error: ${response.statusText}`;
				}
				const data = await response.json()
					setStore({ListContacts: data.contacts })
			} catch (error)
					{console.error(error)}
				},
			    
			
				createOneContact: newContact => {
					fetch("https://playground.4geeks.com/contact/agendas/TIMAURE/contacts", {
						method: "POST",
						body: JSON.stringify({
							full_name: `${newContact.name}`,
							email: `${newContact.email}`,
							agenda_slug: `${newContact.agenda_slug}`,
							address: `${newContact.address}`,
							phone: `${newContact.phone}`
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(response => {
							console.log(response);
							return response.json();
						})
						.then(data => console.log(data))
						.catch(error => console.log(error));
				},
				deleteOneContact: id => {
					fetch(`https://playground.4geeks.com/contact/agendas/TIMAURE/contacts/${id}`, {
						method: "DELETE"
	
					})
						.then(response => response.json())
						.then(data => {
							console.log(data);
							getActions().getAllAgenda();
						}) 
						.catch(error => console.log(error));
				},
	
				updateOneContact: (id, data) => {
					fetch(`https://playground.4geeks.com/contact/agendas/TIMAURE/contacts/${id}`, {
						method: "PUT",
						body: JSON.stringify({
							full_name: `${data.name}`,
							email: `${data.email}`,
							agenda_slug: `${data.agenda_slug}`,
							address: `${data.address}`,
							phone: `${data.phone}`
						}),
						headers: {
							"Content-Type": "application/json"
						}
					})
						.then(response => {
							console.log(response);
	
							return response.json();
						})
						.then(data => {
							console.log(data);
							getActions().getAllAgenda();
						})
						.catch(error => console.log(error));
				}
			}
		};
	};
	
	export default getState;