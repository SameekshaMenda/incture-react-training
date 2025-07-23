//--------------------------------not a good practice since key is not defined----------------------------------
// function FirstList(){

//     const city = ["Mangalore", "Mysore", "Delhi"];
//     return(
//         <div>
//             <h2>City List :</h2>
//             {
//                 city.map((c_name) =>  // using map to access city name  
//                     <p>{c_name}</p>
//                 )
//             }
//         </div>
//     )
// }
// export default FirstList;
//--------------------------------not a good practice since key is not defined----------------------------------
function FirstList(){

    const city = ["Mangalore", "Mysore", "Delhi"];
    return(
        <div>
            <h2>City List :</h2>
            {
                city.map((c_name, c_index) =>  // using map to access city name  
                    <p key={c_index}>{c_name}</p>
                )
            }
        </div>
    )
}
export default FirstList;