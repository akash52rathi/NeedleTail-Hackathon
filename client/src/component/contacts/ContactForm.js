import React,{useState,useContext,useEffect} from 'react'
import { useHistory } from 'react-router';
import { Redirect } from 'react-router-dom';
import ContactContext from '../../context/contact/contactContext' 

 const  ContactForm =(props)=> {
    
    const contactContext =  useContext(ContactContext)

    let history = useHistory();
    

    const {addContact,clearCurrent,updateContact, current} = contactContext;

    const [contact,setContact]=useState({

        name:'',
        email:'',
        phone:'',
        type:'personal'
    })

    const {name,email,phone,type}=contact;


    useEffect(()=>{

    if(current!=null)
    setContact(current);
    else
    {
        setContact({
            name:'',
        email:'',
        phone:'',
        type:'personal'
        })
    }
    },[contactContext,current])

    
    const onChange =(e)=>{
        if(e.target.name=="type")
       console.log(e.target.name+" " + e.target.value)
        setContact({ ...contact,[e.target.name]:e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();

        setTimeout(function () {
            history.push('/AccountDetail')

            
           }, 2000); // in milliseconds

        

         

         
    //     if(current===null)
    //     addContact(contact);
    //     else
    //     {
    //         updateContact(contact);

    //     }
    //   clearAll();

    }

    const clearAll =(e)=>{
        clearCurrent();

    };

    


    return (
        
        <form  onSubmit={onSubmit}>

            <h2 className="text-primary">Confirm Finger Print</h2>
            { /* <input type="text" placeholder="fingerPrint"name="name" value={name}  onChange={onChange}/> */ }
            <input type="image" src="https://media.giphy.com/media/12fabXePHmM9Au2fho/giphy.gif" alt="Submit" width="400" height="300"></input>
            { /*<input type="email" placeholder="email"name="email" value={email} onChange={onChange}/>
            <input type="text" placeholder="phone"name="phone" value={phone} onChange={onChange}/> 
            <h5>Contact Type</h5>
            


       <input type="radio" id="Personal" name="type" value={type} onChange={onChange}/>
       <label htmlFor="Personal"> Personal </label>
       <input type="radio" id="Professional" name="type" value="professional" onChange={onChange}/>
       <label htmlFor="Professional">Professional</label>

       */ }


            <div>
               {/* <input type="submit" value={current===null?'ADD Contact':'Update Contact'} className="btn btn-primary btn-block"/> */ }
                   
               <input type="submit" value='Confirm' className="btn btn-primary btn-block"/>

            </div>
            {current &&(
                <div>
                    <button className="btn btn-light btn-block" onClick={clearAll} >
                       Clear </button>
                </div>
            )
            }

        </form>
    )
}

export default ContactForm
