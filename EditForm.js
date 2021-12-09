
import { useState } from "react";


const employees = [
    {
        "id": 1,
        "first_name": "John",
        "last_name": "Doe",
        "email": "johndoe@abc.com",
        "gender": "Male",
        "status": "Terminated"
    },
    {
        "id": 2,
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "janedoe@abc.com",
        "gender": "Female",
        "status": "New"
    },
    {
        "id": 3,
        "first_name": "Alice",
        "last_name": "Doe",
        "email": "alicedoe@abc.com",
        "gender": "Female",
        "status": "Leaving"
    },
    {
        "id": 4,
        "first_name": "Bob",
        "last_name": "Doe",
        "email": "bobdoe@abc.com",
        "gender": "Male",
        "status": "Active"
    }
]


const EditForm = () => {
    const [editFormData, seteditFormData] = useState(
        {
            first_name: '',
            last_name: '',
            email: '',
            gender: '',
            status: ''
        });
    const formValues = {
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
        gender: contact.gender,
        status: contact.status
    }
    seteditFormData(formValues);
};
const [inEditMode, setInEditMode] = useState(null);


// function onEdit(currentdata, updateddata) {
//     return setInEditMode(null);
// }
const handleEditFormChange = (event) => {
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;
    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue;
    setInEditMode(newFormData);
}

const handleEditclick = (events, contact) => {
    setInEditMode(contact.id);
}
return (
    <div className="container">
        <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>DESIGNATION</th>
                <th>DEPARTMENT</th>
                <th>MANAGER</th>
                <th>SALARY</th>
                <th>ACTION</th>

            </tr>
            <tbody>

                {employees.map(item => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.gender}</td>
                            <td>{item.status}</td>
                        
                        <td><button type="button" onClick={(event) => handleEditclick(event, contact)}>EDIT</button>
                        </td>

                        </tr>
             
                    )

                }
                )
                }
            </tbody >

        </table>
        <form >
            <label>Enter your name:
                <input
                    type="text"
                    required="required"
                    name="first_name"
                    placeholder="Enter your name"
                    value={editFormData.first_name}
                    onChange={handleEditFormChange}
                />
            </label>
            <label>Enter your last name:
                <input
                    type="text"
                    required="required"
                    name="first_name"
                    placeholder="Enter your last name.."
                    value={editFormData.last_name}
                    onChange={handleEditFormChange}
                />
            </label>
            <label>Enter your email:
                <input
                    type="text"
                    required="required"
                    name="email"
                    placeholder="Enter your email..."
                    value={editFormData.email}
                    onChange={handleEditFormChange}
                />
            </label>
            <label>Enter your status:
                <input
                    type="text"
                    required="required"
                    name="first_name"
                    placeholder="Enter your status"
                    value={editFormData.status}
                    onChange={handleEditFormChange}
                />
            </label>

            
        </form>


       <button type="submit"> SAVE</button>

       
        

    </div>
            )

            
            



            export default EditForm;