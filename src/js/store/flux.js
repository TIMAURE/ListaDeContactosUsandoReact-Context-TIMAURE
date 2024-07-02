import { Addcontact } from "../views/AddContact";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			agenda: 'TIMAURE',
			contacts: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			
			getContacts: async () => {				
				try{
				const agendaName = getStore().agenda;
				const response = await fetch (
					`https://playground.4geeks.com/contact/agendas/${agendaName}`);
				
				if(response.status == 404){
					await getActions().createAgenda();
				}
				if(!response.ok){
					throw `API error: ${response.statusText}`;
				}
				const data = await response.json()
					setStore({contacts: data.contacts })
			} catch (error)
					{console.error(error)}
				},
			    /**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			
			createAgenda: async () =>{
				const agendaName = getStore().agenda;
				try{
				const response = await fetch (`https://playground.4geeks.com/contact/agendas/${agendaName}`, 
				{
					method: 'POST', 
				});
				 
				
			}	catch (error){
				console.error(error)
			 }
				

		}

		}

		}
	}
	


export default getState;
