import React from 'react'
import { useHistory } from 'react-router';
import BillDetail from '../contacts/BillDetail';
import ContactFilter from '../contacts/ContactFilter';
export const AccountDetail = () => {

    let history = useHistory();

     const onSubmit=(e)=>{
         e.preventDefault();
         history.push('/Banks/SBI')

     }

    const handleChange=(e) =>{
        e.preventDefault();
        console.log(e.value)
        history.push(e.value);
    }




    return (
        <div className="grid-2">
        <div>
            <h1 className="demo2">User Details</h1>
            <p className="my-1">Name : Siva </p>
            <p className="my-1">Aadhar No : ***********45 </p>
            <p className="my-1">Address : Hitech City HyderaBad </p>
        

        { /*   <form  onSubmit={onSubmit} >

          <input type="submit" value='Search Bank Account' className="btn btn-primary "/>
         </form>
            */
       }

         <div>
            <h1 className="demo2">Choose Accounts</h1>
            <p1/>
            { /*
             <a href="/Banks/SBI">State Bank Of India : *************6789</a> <br/> <br/>
            <a href="/Banks/PNB">Punjab National Bank: *************7865</a><br/><br/>
            <a href="/Banks/HDFC">Hdfc Bank: *************5664</a><br/><br/>
            <a href="/Banks/ICICI">Icici Bank: *************6449 </a><br/><br/>
             */
}
            <form onSubmit = {onSubmit}>
            <select name="menu1" onChange={handleChange} >
<option value="/Banks/SBI">State Bank Of India : *************6789</option>
<option value="http://www.cnn.com">Punjab National Bank: *************7865</option>
<option value="http://www.abcnews.com">Hdfc Bank: *************5664</option>
<option value="http://www.cbsnews.com">Icici Bank: *************6449</option>

   </select>
   <input type="submit" value='Make Payment' className="btn btn-primary "/>
   </form>

        </div>



         </div>

         <div>
             <ContactFilter/>
         </div>
         </div>
         
    )
}
