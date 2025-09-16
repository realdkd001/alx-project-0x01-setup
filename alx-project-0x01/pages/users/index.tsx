import Header from '@/components/layout/Header'
import React from 'react'
import UserCard from '@/components/common/UserCard'
import { UserProps } from '@/interfaces'

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  return (
    <div>
      <Header />
      <div>
        {posts.map(user => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  )
}


export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const posts = await response.json()

  return {
    props: {
      posts,
    }
  }
}

export default Users;
