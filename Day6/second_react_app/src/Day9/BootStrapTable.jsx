import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
function BootStrapTable(){

    const students = [
        {id: 111 , name: "Sameeksha", city: "Mangalore"},   //best practise is to use id to easily identify and compare
        {id: 112 , name: "Shriraksha", city: "Bangalore"},
        {id: 113 , name: "Ravi", city: "Mumbai"},
        {id: 114 , name: "Sachin", city: "Pune"}
    ]
    const handleDeleteButtons = (id) =>
    {
        alert(`Delete student with Id : ${id}`);
        
    }
    return(
        <div className='container mt-4'>
            <h2 className='head3'>Student Table :</h2>
            <Table striped bordered hover >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((s)=>(
                            <tr key={s.id}>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.city}</td>
                                <td>
                                    <Button variant="primary" size='em' onClick={() =>(handleDeleteButtons(s.id))}>Delete</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}
export default BootStrapTable