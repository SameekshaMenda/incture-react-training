import EmployeeCard from "./EmployeeCard";

// function EmployeeList(){

//     const employees = [                //array of objects in []

//         {id: 111 , name: "Sameeeksha", city: "Mangalore"},   //best practise is to use id to easily identify and compare
//         {id: 112 , name: "Shriraksha", city: "Bengalore"},
//         {id: 113 , name: "Ravi", city: "Mumbai"},
//         {id: 114 , name: "Sachin", city: "Pune"},
//     ]
//     return(
//         <div>
//             <h2>Employee List :</h2>
//             {
//                 employees.map((employee) =>
//                 <EmployeeCard key={employee.id} name={employee.name}/>)
//             }

//         </div>
//     )
// }
// export default EmployeeList;

function EmployeeList(){

    const employees = [                //array of objects in []

        {id: 111 , name: "Sameeeksha", city: "Mangalore"},   //best practise is to use id to easily identify and compare
        {id: 112 , name: "Shriraksha", city: "Bengalore"},
        {id: 113 , name: "Ravi", city: "Mumbai"},
        {id: 114 , name: "Sachin", city: "Pune"},
    ]
    return(
        <div>
            <h2>Employee List :</h2>
            {
                employees.map((employee) =>
                <EmployeeCard key={employee.id} name={employee.name} city={employee.city}/>)
            }

        </div>
    )
}
export default EmployeeList;