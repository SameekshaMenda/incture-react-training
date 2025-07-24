
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
function NameList() {

    const [nameList, setNames] = useState([

        { id: 1, name: "Ajay", age: 25 },
        { id: 2, name: "Sachin ", age: 30 },
        { id: 3, name: "Ravi", age: 23 }
    

    ]);

    const [newName , setNewName] = useState('');
    const [newAge , setNewAge] = useState('');

    const handleDeleteUser = (id) => {
        const deleteUser = nameList.filter((user) => user.id != id)
        setNames(deleteUser);
    }
    
    const handleAddUser = () => {
        if(newName === '' || newAge === '') return False;

        const lastUserId = nameList.length > 0 ? nameList[nameList.length - 1].id : 0;
        const newUser = {
            id: lastUserId + 1,
            name: newName,
            age: newAge
        };
        
        setNames([...nameList, newUser]);
        
    }
    
    return (
        <div className='container mt-4' >
            <h2>Name List :</h2>

            <input type='text' placeholder='Enter the name' value={newName} onChange={(event) => setNewName(event.target.value)}/>
            <input type='number' placeholder='Enter the age' value={newAge} onChange={(event) => setNewAge(event.target.value)}/>
             <Button variant="primary" onClick={handleAddUser} className='mb-4'>
                Add User
            </Button>
            {
            nameList.length === 0 ? <p>No users available</p> :
            (
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
                        nameList.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Button variant="danger" size='em' onClick={() => { handleDeleteUser(user.id) }}> Delete</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            )
        }


        </div>
    )
}

export default NameList;