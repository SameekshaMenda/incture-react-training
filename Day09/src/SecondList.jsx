function SecondList(){

    const students = [
        {id: 111 , name: "Sameeeksha", city: "Mangalore"},   //best practise is to use id to easily identify and compare
        {id: 112 , name: "Shriraksha", city: "Bengalore"},
        {id: 113 , name: "Ravi", city: "Mumbai"},
        {id: 114 , name: "Sachin", city: "Pune"},
    ]
    return(
        <div>
             <h2>Student List :</h2>
             {
                students.map((student) => <p key={student.id}>Name : {student.name}  Cty : { student.city}</p>)
             }
        </div>
    )
}
export default SecondList;