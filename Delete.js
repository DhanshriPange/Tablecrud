/* eslint-disable valid-typeof */
import React, { useState } from "react";

const sampleData = [
  {
    name: "Siva"
  },
  {
    name: "Arun"
  }
];
export default function Table() {
  const [tableData, setTableData] = useState(sampleData);
  const [name, setName] = useState(null);
  const [index,setIndex ] = useState(null); 

  const deleteData = (index) => {
    const tbData = [...tableData];
    tbData.splice(index, 1);
    setTableData(tbData);
  };

  const getFormName = (event) => {
      const name = event.target.value
      setName(name);
  }
  const formSubmit  = (event) => {
      event.preventDefault()
      const tbData = [...tableData];
      if(typeof index === "number") {
          tbData[index] =  {name }
      }
      else{
        tbData.push({name})

      }
      setIndex(null);
    setTableData(tbData);
  }
  const editData = (index, item) => {
      console.log(index, item)
      setIndex(index)
      setName(item.name)
  }
  return (
    <div className="App">
      <table>
        <tr>
          <th> Name </th>
        </tr>

        <tbody>
          {tableData.map((item, index) => {
            return (
              <tr>
                <td>{item.name} </td>
                <td>
                  <button onClick = {() => editData(index,item)}> Edit</button>
                </td>
                <td>
                  <button onClick={() =>deleteData(index)}> Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <form onSubmit = {formSubmit}>
      <input value = {name} placeholder = "name" onChange = {getFormName}/>
      <button type = "submit">Add</button>
      </form>
    </div>
  );
}