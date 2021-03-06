import React,{useContext,useEffect} from 'react'
import Contact from '../contacts/Contact'
import ContactForm from '../contacts/ContactForm'
import ContactFilter from '../contacts/ContactFilter'
import AuthContext from '../../context/auth/AuthContext'
import BillDetail from '../contacts/BillDetail'
export const Home = () => {
    
    const authContext = useContext(AuthContext)


    useEffect(()=>{
        authContext.loadUser();
    },[])

    return (
        <div className="grid-2">
           <div>
               <ContactForm/>
           </div>
           <div>
               <ContactFilter/>              
           </div>
        </div>
    )
}
