

function Data() {

    let userName: string = "sameeksha";
    let age: number = 20;
    let isActive: boolean = true;

    const course : string[] = ['React', 'Vue'];

   
    type Employee = {
        id : number;
        name: string;
        city: string;
    }

     const emp1: Employee = {
        id : 100,
        // name: 889,
         name: "ABC",
        city: "Managaluru"
    }


  return (
    <div>
      <h2>User Profile :</h2>
      <p> Name : {userName} </p>
      <p> Age : {age}</p>
      <p> Is Active : {isActive ? "Yes" : "No"}</p>  
      <ul>
        {course.map((c,index ) => (
            <li key={index}> 
              {c}
            </li>
        ))}</ul>  

        <p> Employee Id : {emp1.id}</p>
        <p> Employee name : {emp1.name}</p>
        <p> Employee city : {emp1.city}</p>
    </div>
  )
}

export default Data