function TableList(){
   
    const students = [
        {id: 111 , name: "Sameeksha", city: "Mangalore"},   //best practise is to use id to easily identify and compare
        {id: 112 , name: "Shriraksha", city: "Bengalore"},
        {id: 113 , name: "Ravi", city: "Mumbai"},
        {id: 114 , name: "Sachin", city: "Pune"}
    ]
    return(
        <div>
            <h2>Student Table :</h2>
            <table border ="2" cellPadding="10"  cellSpacing="0">
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
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TableList;