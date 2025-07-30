// import { Link } from 'react-router-dom';

// function NavBar() {
//     return (
//         <div>
//             <Link to="/">Home</Link> <br></br> 
//             {/* link doesnt reload the page */}
//             <Link to="/profile">Profile</Link>
//         </div>
//     )
// }

// export default NavBar

//------------------------------------------------------------------------------------
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>

            <li><a href='/'> Home</a> </li>
            {/* loads the page  */}
            <li><a href='/profile/Sameeksha'> Profile</a> </li>
            {/* <li><a href='/profile/Sachin'> Profile</a> </li>
            <li><a href='/profile/Ajay'> Profile</a> </li> */}
        </div>
    )
}

export default NavBar