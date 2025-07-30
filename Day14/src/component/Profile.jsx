import React from 'react'

function Profile({ userName }) {
  return (
    <div>
        <h2>Profile Component</h2>
        <p>Profile Component to learn react routing...</p>
        <div>{userName}</div>
    </div>
  )
}

export default Profile