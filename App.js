import React from 'react'
import AddForm from './Components/AddForm';
import "./style.css";
import Edit from './Components/Edit'
import ReadOnlyRow from './Components/ReadOnlyRow';




const App = () => {
  return (
    <div>
       <Edit/> 
      <AddForm/>
      <ReadOnlyRow/>
    </div>
  )
}

export default App
