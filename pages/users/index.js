import React from 'react'
import axios from 'axios'

export async function getServerSideProps(){
    const response = await axios.get('http://localhost:3000/users');
    const data = await response.data;

    return{
        props:{
            users:data,
        }
    }
}

const UserPage = ({users}) => {
  return (
    <div>
        <h1>All Users</h1>
        {users.map(user => {
            return(
                <div key={user.id}>
                    <h2>{user.id}</h2>
                    <h2>{user.name}</h2>
                    <hr/>
                </div>
            );
        })}
    </div>
  )
}

export default UserPage