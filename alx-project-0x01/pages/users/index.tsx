import Header from '@/components/layout/Header'
import React, { useState } from 'react'
import UserCard from '@/components/common/UserCard'
import { UserProps } from '@/interfaces'
import UserModal from '@/components/common/UserModal'

const Users: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [user, setUser] = useState<UserProps | null>(null);

  const handleAddUser = (newUser: UserProps) => {
    setUser({ ...newUser, id: posts.length + 1 });
  };

  return (
    <div>
      <Header />
      <main>
        <div className="p-4 flex justify-between">
          <button onClick={() => setModalOpen(true)}
            className="bg-blue-700 px-4 py-2 rounded-full text-white m-4">Add User</button>
        </div>
        <div className='text-center text-2xl font-bold p-4'>
          User List
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>
          {posts.map(user => (
            <UserCard key={user.id} {...user} />
          ))}
        </div>
      </main>
      {isModalOpen && (
        <UserModal onClose={() => setModalOpen(false)} onSubmit={handleAddUser} />
      )}
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
