import React,{useReducer} from 'react'
//import {v4 as uuidv4} from "uuid";
import ContactContext from './contactContext'
import ContactReducer from './contactReducer'
import axios from 'axios'


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

const ContactState = props =>{
    const intialState={
        contacts: null,
        current :null,
        filtered:null,
        error: null
    };

    const [state,dispatch]= useReducer(ContactReducer,intialState)

   ///get contacts


  // Get Contacts
  const getContacts = async () => {
    try {
      const res = await axios.get('/api/contacts');

      dispatch({
        type: GET_CONTACTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: CONTACT_ERROR,
        payload: err.response.msg
      });
    }
  };



///add contact

const addContact= async (contact)=>{

    const config ={
        headers:{
            'Contact-Type':'application/json'
        }
    }
    
    try{
        const res= await axios.post('/api/contacts',contact,config);
        dispatch({type:ADD_CONTACT,payload:res.data})        
    }
    catch(err)
    {
        dispatch({type:CONTACT_ERROR,payload:err.response.msg});

    }


    //const newId = uuidv4()
    //contact.id = newId;
    //console.log(contact)
    
}

//// delete contact 

const deleteContact=async(id)=>{

    try{
        const res= await axios.delete(`/api/contacts/${id}`);
        dispatch({type:DELETE_CONTACT,payload:id})        
    }
    catch(err)
    {
        dispatch({type:CONTACT_ERROR,payload:err.response.msg});

    }

    
}

////Set current contact

const setCurrent = contact  =>{
    dispatch({type:SET_CURRENT,payload:contact})
}

//// clear current

const clearCurrent = ()  =>{
    dispatch({type:CLEAR_CURRENT})
}
///// Update contact

const updateContact = async (contact)  =>{

    const config ={
        headers:{
            'Contact-Type':'application/json'
        }
    }
    
    try{
        const res= await axios.put(`/api/contacts/${contact._id}`,contact,config);
        dispatch({type:UPDATE_CONTACT,payload:res.data})        
    }
    catch(err)
    {
        dispatch({type:CONTACT_ERROR,payload:err.response.msg});

    }
}

//// Filter Contacts

const filterContacts =(text)=>{
    console.log("Text => "+text );
    dispatch({type:FILTER_CONTACTS,payload:text})

}

const clearFilter =() => {
    dispatch({type:CLEAR_FILTER})
};

const clearContacts =() => {
    dispatch({type:CLEAR_CONTACTS})
};




    return (
        <ContactContext.Provider
            value ={{
               contacts: state.contacts,
               current:state.current,
               filtered:state.filtered,
               error:state.error,
               addContact,
               deleteContact,
               setCurrent,
               clearCurrent,
               updateContact,
               filterContacts,
               clearFilter,
               getContacts,
               clearContacts
            }
            }
            >
                    {props.children}

        </ContactContext.Provider>

    );

}   

export default ContactState;