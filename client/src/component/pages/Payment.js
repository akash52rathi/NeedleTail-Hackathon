import React from 'react'
import { useHistory } from 'react-router';
import ContactFilter from '../contacts/ContactFilter';

export const Payment = () => {

    let history = useHistory();


    const onChange =(e)=>{
        if(e.target.name=="type")
       console.log(e.target.name+" " + e.target.value)
       // setContact({ ...contact,[e.target.name]:e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();
        history.push('/Home')

    }



    return (
        <div>
        <div className="grid-2">
            <div>
            <h1>Payment Completed </h1>
             </div>
             <div>
             <img className="demo5" src="https://media.giphy.com/media/tf9jjMcO77YzV4YPwE/giphy.gif" width = "" height ="100"/>
             </div>
        </div>
        <div>
        <table>
  <tr>
    <th>Patient Name:</th>
    <td>Rohit Sharma</td>
  </tr>
  <tr>
    <th>Guardian Name:</th>
    <td>Siva</td>
  </tr>
  <tr>
    <th>Phone No.:</th>
    <td>9876543210</td>
  </tr>
  <tr>
    <th>Amount Paid</th>
    <td>24000</td>
  </tr>
</table>

        </div>
        </div>
    )
}
