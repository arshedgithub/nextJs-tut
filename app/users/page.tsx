import React from 'react'
import Button from '../components/button';
import UserItem from '../components/User';

interface User {
    id: number;
    name: string;
    email: string;
}

const UserPage = async () => {

    const res = await fetch('https://jsonplaceholder.typicode.com/users', { next: {revalidate: 200}});
    const users: User[] = await res.json();

  return (
    <>
        <h1>Users</h1>
        <div>{users.map(user => <UserItem user={user} />)}</div>

        <Button />
    </>
  )
}

export default UserPage