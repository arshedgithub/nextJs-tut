import React from 'react'

interface User {
    user: {
        id: number;
        name: string;
        email: string;
    }
}

const UserItem = ({ user }: User) => {
    return (
        <div key={user.id} className='userCard'>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    )
}

export default UserItem