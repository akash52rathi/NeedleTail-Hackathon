import React from 'react'

 const BillDetail= () => {
    return (
        <div>
            <h1>Bill Details</h1>
            <table style="width:100%">
            <tr>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Age</th>
            <th>Mobile No</th>
            <th>Total Amount</th>
            </tr>
            <tr>
            <td>Rohit</td>
            <td>Sharma</td>
            <td>48</td>
            <td>9876543210</td>
            <td>24000</td>
            </tr>
            </table>
        </div>
    )
}

export default BillDetail
