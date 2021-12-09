import React from 'react'

const Edit = () => {
    return (
        <tr>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter a first name..."
                name="First Name">

                </input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter a last name..."
                name="Last Name">
                    
                </input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter a email..."
                name="Email">
                    
                </input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter a gender..."
                name="Gender">
                    
                </input>
            </td>
            <td>
                <input
                type="text"
                required="required"
                placeholder="Enter a status..."
                name="Status">
                    
                </input>
            </td>
        </tr>
    )
}

export default Edit
