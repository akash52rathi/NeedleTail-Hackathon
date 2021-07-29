import React from 'react'
import ContactFilter from '../contacts/ContactFilter'

export const BanksDetail= () => {
    return (

        <div className="grid-2">
        <div>
            <h1 className="demo2">Available Accounts</h1>
            <p1/>
            <a href="/Banks/SBI">State Bank Of India : *************6789</a> <br/> <br/>
            <a href="/Banks/PNB">Punjab National Bank: *************7865</a><br/><br/>
            <a href="/Banks/HDFC">Hdfc Bank: *************5664</a><br/><br/>
            <a href="/Banks/ICICI">Icici Bank: *************6449 </a><br/><br/>
        </div>
<div>
    <ContactFilter/>
</div>
        </div>
    )
}
