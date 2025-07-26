//---------------------------------------------use of props--------------------------------------------------
// function Card(props)
// {
//     return(
//         <div>
//             <h2>Hello {props.name}</h2>
//             <p>city: {props.city}</p>
//         </div>
//     )
// }
// export default Card;

//----------------------------------------destructuring of props---------------------------------------------
// function Card({name, city})
// {
//     return(
//         <div>
//             <h2>Hello {name}</h2>
//             <p>city: {city}</p>
//         </div>
//     )
// }
// export default Card;

//---------------------------------------------------------------------------------


function Card(props)
{  //props can also be used to access function from parent component
    return(
        <div>
            <h2>Card Component:</h2>  
            <button onClick={props.onClick}>{props.label}</button>
            
        </div>
    )
}
export default Card;