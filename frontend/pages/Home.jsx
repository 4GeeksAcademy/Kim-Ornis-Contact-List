import { useEffect } from "react";

import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {ContactCard} from "../components/ContactCard.jsx";

export const Home = () => {
    const { store, dispatch } = useGlobalReducer()
    
    useEffect(() => {
        fetch(
        "https://playground.4geeks.com/contact/agendas/KOTHECODE/contacts"
        )
        .then((resp) => {
            if (!resp.ok) throw Error(resp.statusText);
            return resp.json();
        })
        .then((data) => {
            console.log(data);
            dispatch({
            'type': 'replace_contacts',
            'contacts': data.contacts
            })
        })
        .catch((error) => {
            console.log(error);
        });
    }, [])

	return (
		<div className="text-center mt-5">
            {store.contacts.map(contact => <ContactCard contact={contact} />)}
		</div>
	);
}; 