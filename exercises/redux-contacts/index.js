// Build a contact management system using Redux in a vanilla JavaScript environment (no React).

// You should be able to dispatch actions that add a new person and remove an existing person from an array of contacts.

// The contact objects can have whatever properties you want. For example:

// {
//     name: "Tommy Oliver",
//     phone: "925-867-5309",
//     email: "thegreenranger@powerrangers.com"
// }

const redux = require('redux');

let tommy = {
    id: 1,
    name: "Tommy Oliver",
    phone: "925-867-5309",
    email: "thegreenranger@powerrangers.com"
}

let amy = {
    id: 2,
    name: 'Amy Scoville',
    phone: '801-362-4943',
    email: 'amy.scoville2@gmail.com'
}

//reducers
let contacts = (prevContacts = [], action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...prevContacts, action.contact];
        case 'REMOVE_CONTACT':
            let contacts = [...prevContacts];
            return contacts.filter((contact)=>{
                return contact.id !== action.id;
            });
        case 'EDIT_CONTACT':
            let editedContacts = [...prevContacts];
            return editedContacts.map(contact => {
                if (contact.id === action.id) {
                    return action.contact;
                } else {
                    return contact;
                }
            })
        default:
            return prevContacts;
    }
}

//store

let store = redux.createStore(redux.combineReducers({ contacts }));

//subscribe
store.subscribe(() => {
    console.log(store.getState());
})

//actions with type and payload
let addContact = (contact) => {
    return {
        type: 'ADD_CONTACT',
        contact
    }
}

let removeContact = (id) => {
    return {
        type: 'REMOVE_CONTACT',
        id
    }
}

let editContact = (id, contact) => {
    return {
        type: 'EDIT_CONTACT',
        id,
        contact
    }
}

//dispatch
store.dispatch(addContact(tommy));
store.dispatch(removeContact(2));
store.dispatch(editContact(1, 
    {
    id: 1, 
    name: 'Oliver Scoville', 
    phone: 'NA', 
    email: 'NA'
}));
store.dispatch(addContact(amy));


