// import React from 'react'

// function PropComp(props) {
//   return (
//     <div>
//         <h2>PropComp in Typescript :</h2>
//         <p> Name : {props.name}</p>
//     </div>
//   )
// }

// export default PropComp


//------------------------defining te type of props-------------------
//interface defines the structure
interface MyProps {
    name: string;
}

//functional component recieving a props of MyProps type

//destructed
// const PropComp: React.FC<MyProps>= ({ name }) => {


//without destructured
const PropComp = (props: MyProps) => {
    return (
        <div>
            <h2>PropComp in Typesecript</h2>
            {/* <p> Name : {name}</p>  for destructuring */}
            <p> Name : {props.name}</p>
        </div>
    )
}

export default PropComp