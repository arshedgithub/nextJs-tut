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
        <div key={user.id} className={styles.card}>
            <div>{user.name}</div>
            <div>{user.email}</div>
        </div>
    )
}

export default UserItem