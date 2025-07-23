//------------------------------Task 1------------------------------
// import { useState } from "react"
// function NameList(){

//     const [nameList , setNames] = useState([
//         {id: 100, name: "Sameesksha"},  
//         {id: 200, name: "Shriraksha "},
//         {id: 300, name: "Ravi"},
//     ])

//     const handleDeleteNames = (id) =>
//     {
//         const newName = nameList.filter((n)=> n.id != id)
//         setNames(newName)
//     }
//     return(
//         <ul>
//             <h2>Name List :</h2>
//             {

//                 nameList.map((n) => (
//                     <li>
//                     <div key={n.id}>{n.name}
//                     <button onClick={() => {handleDeleteNames(n.id)}}> Delete</button>
//                     </div>
//                     </li>
//                 ))

//             }
//         </ul>
//     )
// }
// export default NameList;

//----------------------------------------Task 2-------------------------
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// function NameList() {

//     const nameList = [
//         { id: 100, name: "Sameesksha", age: 20 },
//         { id: 200, name: "Shriraksha ", age: 20 },
//         { id: 300, name: "Ravi", age: 21 }
//     ]


//     return (
//         <div className='container mt-4'>
//             <h2>Name List :</h2>


//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th> Id </th>
//                         <th> Name </th>
//                         <th> Age </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         nameList.map((name) => (
//                             <tr key={name.id}>
//                                 <td>{name.id}</td>
//                                 <td>{name.name}</td>
//                                 <td>{name.age}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </Table>


//         </div>
//     )
// }
// export default NameList;

//------------------------------------Task 3------------------------------------
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import { useState } from 'react';
// function NameList() {

//     const [nameList , setNames] = useState([
//         {id: 100, name: "Sameeksha"},  
//         {id: 200, name: "Shriraksha "},
//         {id: 300, name: "Ravi"},
//     ])

//     const handleDeleteNames = (id) =>
//     {
//         const newName = nameList.filter((n)=> n.id != id)
//         setNames(newName)
//     }


//     return (
//         <div className='container mt-4'>
//             <h2>Name List :</h2>


//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th> Id </th>
//                         <th> Name </th>
//                         <th> Age </th>
//                         <th>Action </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         nameList.map((name) => (
//                             <tr key={name.id}>
//                                 <td>{name.id}</td>
//                                 <td>{name.name}</td>
//                                 <td>{name.age}</td>
//                                <Button variant="danger" size='em'onClick={() => {handleDeleteNames(name.id)}}> Delete</Button>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </Table>


//         </div>
//     )
// }
// export default NameList;

//-----------------------------------------Task 4 -------------------------------------------------------
// import Table from 'react-bootstrap/Table';
// import Button from 'react-bootstrap/Button';
// import { useState } from 'react';
// function NameList() {

//     const [nameList , setNames] = useState([
//         {id: 100, name: "Sameeksha"},  
//         {id: 200, name: "Shriraksha "},
//         {id: 300, name: "Ravi"},
//     ])



//     const handleAddNames = (name) =>
//     {
//         const addName = nameList.push(name)
//         setNames(addName);
//     }

//     return (
//         <div className='container mt-4'>
//             <h2>Name List :</h2>
//             <input type='text' placeholder='Enter the name'/>
//             <Button variant="primary" size='em' onClick={()=> {handleAddNames(name)}}> Add</Button>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th> Id </th>
//                         <th> Name </th>
//                         <th>Action </th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         nameList.map((name) => (
//                             <tr key={name.id}>
//                                 <td>{name.id}</td>
//                                 <td>{name.name}</td>
//                             </tr>
//                         ))
//                     }
//                 </tbody>
//             </Table>


//         </div>
//     )
// }
// export default NameList;

//--------------------------------------------------task 5---------------------------------
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function NameList() {

    const [nameList, setNames] = useState([

    ])

    const handleDeleteNames = (id) => {
        const newName = nameList.filter((n) => n.id != id)
        setNames(newName)
    }

    const handleDisplay = () => {

        if (nameList.length == []) {
            <div>
                <h2> no data</h2>
                console.log("no data"); 
            </div>
        }
    }
    return (
        <div className='container mt-4' >
            <h2>Name List :</h2>


            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th> Id </th>
                        <th> Name </th>
                        <th> Age </th>
                        <th>Action </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        nameList.map((name) => (
                            <tr key={name.id}>
                                <td>{name.id}</td>
                                <td>{name.name}</td>
                                <td>{name.age}</td>
                                <div>
                                    <Button variant="danger" size='em' onClick={() => { handleDeleteNames(name.id) }}> Delete</Button>
                                </div>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>


        </div>
    )
}

export default NameList;