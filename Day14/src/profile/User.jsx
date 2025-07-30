// import React from 'react'
// import { useParams } from 'react-router-dom'
// function User() {

//     const {userName} = useParams()
//   return (
//     <div>
//         <h2>Welcome : {userName}</h2>
//         <p>This is {userName} Profile Page in react routing</p>

//     </div>
//   )
// }

// export default User

//------------------------------------------------------------
import React from 'react'
import { useParams } from 'react-router-dom'
import User1 from './User1'
import User2 from './User2'
import User3 from './User3'
function User() {

    const { userName } = useParams();
    console.log(userName);
    return (
        <div>
            {userName === 'sameeksha' ? <User1 /> :
                userName === 'sachin' ? <User2 /> :
                    userName === 'ajay' ? <User3 /> :
                        <h2> Guest Component </h2>
            }
        </div>
    )
}

export default User