import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';

const UserListAxios = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);  //loading if data is not available
    const [error, setError] = useState("");
    

    // no need to convert object to js type manually

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
                setLoading(false);

            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            })
    })

    if (loading) {
        return <p> Loading Users Details... Please wait for some time.</p>
    }

    if (error) {
        return <p style={{ color: "red" }}>Error : {error}</p>
    }

    return (
         <div>
            <h2> User List with axios :</h2>
        
           <ul>
            {users.map((user) => (
                <li key={user.id}>
                    <strong>{user.name}</strong>  - {user.email}
                </li>
            ))}
        </ul> 
        </div>
    )
}

export default UserListAxios;