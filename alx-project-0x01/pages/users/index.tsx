import Header from '@/components/layout/Header'
import React from 'react'
import UserCard from '@/components/common/UserCard'
import { UserProps } from '@/interfaces'

const Users: React.FC<{ users: UserProps[] }> = ({ users }) => {
  return (
    <div>
      <Header />
      <div>
        {users.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json()

  return {
    props: {
      users
    }
  }
}

export default Users
