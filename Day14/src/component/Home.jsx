import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
      <h2>Home Component</h2>
      <p>Home Cmponent to learn react routing...</p>
       <Link to="/profile">Profile</Link>
    </div>
  )
}

export default Home