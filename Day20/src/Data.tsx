

function Data() {

    let userName: string = "sameeksha";
    let age: number = 20;
    let isActive: boolean = true;

    const course : string[] = ['React', 'Vue'];

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
    </div>
  )
}

export default Data