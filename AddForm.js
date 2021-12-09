import { useState, Fragment } from "react";
import { nanoid } from 'nanoid';
import ReadOnlyRow from './ReadOnlyRow';
import Edit from './Edit';
// import employees from './/mock-Data.json';
//import './style.css';
//import './tablestyle.css';


const employees = [
  {
    "jobid": 101,
    "id": 1,
    "first_name": "John",
    "last_name": "Doe",
    "email": "johndoe@abc.com",
    "gender": "Male",
    "status": "Terminated"
  },
  {
    "jobid": 102,
    "id": 2,
    "first_name": "Jane",
    "last_name": "Doe",
    "email": "janedoe@abc.com",
    "gender": "Female",
    "status": "New"
  },
  {
    "jobid": 103,
    "id": 3,
    "first_name": "Alice",
    "last_name": "Doe",
    "email": "alicedoe@abc.com",
    "gender": "Female",
    "status": "Leaving"
  },
  {
    "jobid": 104,
    "id": 4,
    "first_name": "Bob",
    "last_name": "Doe",
    "email": "bobdoe@abc.com",
    "gender": "Male",
    "status": "Active"
  }
]


// const getLocalItems =() =>{
//   let list= localStorage.getItem('tableData');
//   console.log(list);
//   if (list){
//   return JSON.parse (localStorage.getItem('tableData'));
// }}


const AddForm = () => {

  const [tableData, setTableData] = useState(employees);
  //const [inputs, setInputs] = useState(getLocalItems());
  const [first_name, setfirst_Name] = useState(null);
  const [last_name, setlast_Name] = useState(null);
  const [email, setEmail] = useState(null);
  const [status, setStatus] = useState(null);
  const [gender, setGender] = useState(null);
  const [index, setIndex] = useState(null);
  const [editdata, setEditdata] = useState(null);


  const getfirstName = (event) => {
    const first_name = event.target.value;
    setfirst_Name(values => ({ ...values, [first_name]: first_name }))
    setfirst_Name(first_name);
  };

  const getlastName = (event) => {
    const last_name = event.target.value;
    setlast_Name(values => ({ ...values, [last_name]: last_name }))
    setlast_Name(last_name);
  };

  const getEmail = (event) => {
    const email = event.target.value;
    setEmail(values => ({ ...values, [email]: email }))
    setEmail(email);
  };

  const getStatus = (event) => {
    const status = event.target.value;
    setStatus(values => ({ ...values, [status]: status }))
    setStatus(status);
  };
  const getgender = (event) => {
    const gender = event.target.value;
    setGender(values => ({ ...values, [gender]: gender }))
    setGender(gender);
  };
  // const handleChange = (event) => {
  //   const name = event.target.name;
  //   const value = event.target.value;
  //   setInputs(values => ({ ...values, [name]: value }))
  // }


  const deleteData = (index) => {
    const tbData = [...tableData];
    tbData.splice(index, 1);
    setTableData(tbData);
  };

  const onhandleSubmit = (event, item, index) => {
    event.preventDefault();
    setIndex(index)
    setEditdata(item.id);
    setfirst_Name(item.first_name);
    setlast_Name(item.last_name);
    setEmail(item.first_name);
    setStatus(item.last_name);
    setGender(item.first_name);
  
  }






  function handleOnAdd(event, index) {
    event.preventDefault();
    const tbData = [...new Set(tableData)];
    //const tbData = Array.from(new Set(tableData));

    //const tbData = [...new Set(tableData)];

    //const tbData = [...tableData];

    if (typeof index === "number" && tbData.item === tbData.last_name) {
      //tbData[index] = {id}
      tbData[index] = { first_name }
      tbData[index] = { last_name }
      tbData[index] = { email }
      tbData[index] = { status }
      tbData[index] = { gender }
      //alert ("Duplicate Entry");
      console.log("Duplicate Entry");
    }
    else {
      tbData.push({
        id: nanoid(),
        first_name: first_name,
        last_name: last_name,
        email: email,
        gender: gender,
        status: status

      });

      setIndex(null);
      setTableData(tbData);
    }
  }






  // useEffect(() => {
  //   localStorage.setItem('lists', JSON.stringify(tableData));
  //   // return () => {
  //   //   cleanup
  //   // }
  // }, [tableData]);

  // useEffect(() => {
  //   const list =localStorage('item')
  //   const tbData =[...tableData]
  //   tbData =[...list]
  //   return () => {
  //   //   cleanup
  //   }
  // }, [tableData]
  // )

  return (

    <div className="container">
      <form>
        <table>
          <tr>
            <th>ID</th>
            <th>FIRST NAME</th>
            <th>LAST NAME</th>
            <th>EMAIL</th>
            <th>GENDER</th>
            <th>STATUS</th>
            <th>ACTIONS</th>

          </tr>
          <tbody>

            {tableData.map((item, index) => {
              return (

                <Fragment>
                  {editdata === item.id ? <Edit /> : <ReadOnlyRow item={item} onhandleSubmit={onhandleSubmit} />}

                </Fragment>
              );
            })}
          </tbody>

        </table>
      </form>

      <form onSubmit={handleOnAdd}>
        <label>Enter your name:
          <input
            type="text"
            name="first_name"
            value={first_name}
            onChange={getfirstName} />
        </label>
        <label>Enter your last name:
          <input
            type="text"
            name="last_name"
            value={last_name}
            onChange={getlastName} />
        </label>
        <label>Enter your email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={getEmail} />
        </label>
        <label>Enter your gender:
          <input
            type="text"
            name="gender"
            value={gender}
            onChange={getgender} />

        </label>
        <label>Enter your status:
          <input
            type="text"
            name="status"
            value={status}
            onChange={getStatus} />

        </label>

        <button type="submit"> add</button>
      </form>
      {/* <form action="/action_page.php" onsubmit="myFunction()">
        Enter name: <input type="text" name="fname">
        <input type="submit" value="Submit">
      </form> */}
    </div>
  )
}

export default AddForm;

