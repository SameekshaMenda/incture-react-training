import React from 'react'
import { useState, useEffect } from 'react'

function UserList() {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);  //loading if data is not available
    const [error, setError] = useState(null); //show error if any error

    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
            if(!response.ok){
                throw new  Error("Something went wrong...");
            }
            return response.json();  // object is converted to javascript type manulally unlike axios
        })
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        })
    }, []);

    if(loading) {
        return <p> Loading Users Details... Please wait for some time.</p>
    }

    if(error){
        return <p style={{color: "red"}}>Error : {error}</p>
    }
  return (
    <div>
        <h2> User List :</h2>
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

export default UserList