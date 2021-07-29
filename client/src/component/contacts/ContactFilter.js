import React , {useContext,useRef,useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
    
    const  contactContext= useContext(ContactContext);
    const text =useRef('');

    const {filterContacts,clearFilter,filtered}=contactContext;

    //  useEffect(() => {
    //  if(filtered===null)
    //  {
    //      text.current.value = '';
    //  }    
     
    //  })

    const onChange = e => {
        if(text.current.value!=='')
        {
            console.log(e.target.value);
            filterContacts(e.target.value);
        }
        else{
            clearFilter();
        }
    }
    
    return (
        <div>


            <h1 className="demo2">Bill Details</h1>
       
<table>
  <tr>
    <th>First Name:</th>
    <td>Rohit</td>
  </tr>
  <tr>
    <th>Last Name:</th>
    <td>Sharma</td>
  </tr>
  <tr>
    <th>Phone No.:</th>
    <td>9876543210</td>
  </tr>
  <tr>
    <th>Amount</th>
    <td>24000</td>
  </tr>
</table>

           </div>
    )
}

export default ContactFilter
