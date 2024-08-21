import React from 'react'
import styles from './User.module.css'

interface User {
    user: {
        id: number;
        name: string;
        email: string;
    }
}

const UserItem = ({ user }: User) => {
    return (
        <div key={user.id} className="p-5 my-5 bg-sky-400 text-white text-xl hover:bg-sky-500">
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    )
}

export default UserItem