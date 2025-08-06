//--------------------------what hapens if we dont use useEffect-----------------
import React from 'react'
import { useState } from 'react'

function SecondUserList() {
    const [users, setUser] = useState([]);
    const [loading, setLoading] = useState(true);  //loading if data is not available
    const [error, setError] = useState(null); //show error if any error



    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/use")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Something went wrong...");
            }
            return response.json();
        })
        .then((data) => {
            setUser(data);
            setLoading(false);
        })
        .catch((error) => {
            setError(error.message);
            setLoading(false);
        })
    }
    //when a function is used , the component is re rendered again and again


    // if (loading) {
    //     return <p> Loading Users Details... Please wait for some time.</p>
    // }


    if (error) {
        return <p style={{ color: "red" }}>Error : {error}</p>
    }
    return (
        <div>
            <h2> User List :</h2>
            <button onClick={fetchData}> Fetch User</button>
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

export default SecondUserList