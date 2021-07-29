import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    CLEAR_FILTER,
    FILTER_CONTACTS,
    UPDATE_CONTACT,
    CONTACT_ERROR,
    CLEAR_CONTACTS
} from '../types.js'

export default (state,action)=>{
    switch(action.type){

        case GET_CONTACTS:
            return {
              ...state,
              contacts: action.payload,
              loading: false
            };

        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload,...state.contacts],
                loading: false
            };

        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    contact._id===action.payload._id?action.payload:contact),
                    loading: false
            };    

        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact => contact._id !== action.payload) ,
                loading: false
                    
                };
        case SET_CURRENT:
            return{
                ...state,
                current:action.payload
            };
        case CLEAR_CURRENT:
            return{
                ...state,
                current:null
            } ;

        case FILTER_CONTACTS:
            return {
                ...state,

            //    filtered: state.contacts.filter(contact =>{
            //        const regex = new RegExp(${action.payload},'gi');
            //        return contact.name.match(regex) || contact.email.match(regex); 
            //    })

            filtered: state.contacts.filter(contact => {
                return (
                  contact.name.toLowerCase().includes(action.payload) ||
                  contact.email.toLowerCase().includes(action.payload)
                );
              })

            } ; 
        case CLEAR_FILTER:
            return {
                ...state,
                filtered:null
            } ;  
        case CONTACT_ERROR:
            return {
                ...state,
                error:action.payload
            };
        case CLEAR_CONTACTS:
            return {
                ...state,
                filtered:null,
                error:null,
                current:null,
                contacts:null
            }               
                    
        default:
            return state;    
    }
}