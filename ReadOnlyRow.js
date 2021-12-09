import React from 'react'

const ReadOnlyRow = ({item,onhandleSubmit}) => {
   
        return (
            <tr>
            <td>{item.id}</td>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.status}</td>
              <td>
                  <button  type="button"onClick = {(event) => onhandleSubmit(event,item)}> Edit</button>
                </td>
              
            </tr>
    )
}

export default ReadOnlyRow
