import React from 'react'
import { useEffect, useState } from 'react'

const UserInfo = () => {

    const [users, setUsers] = useState([])
    console.log('UserData', users);

    const [error, setError] = useState()

    useEffect(() => {
        // const fetchUsers = async () => {
        //     try {
        //         const response = await fetch('https://fakestoreapi.com/users')

        //         if (!response.ok) {
        //             throw new error('Network response was not ok')
        //         }
        //         const data = await response.json()
        //         setUsers(data)

        //     } catch (error) {
        //         setError(error.message)
        //     }
        // }

        // fetchUsers()

        fetch('https://fakestoreapi.com/users')
            .then((response) => {
                if (!response.ok) {
                    throw new error('Network response was not ok')
                }
                return response.json()
            })
            .then((data) => {
                setUsers(data)
            })
            .catch((error) => {
                setError(error.message)
            })
    }, [])

    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2 className='headText'>User Information Table</h2>
            <table className="table-auto w-full border-collapse border border-gray-300 mt-4">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Address</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Password</th>
                        <th className="border border-gray-300 px-4 py-2">Phone</th>
                        <th className="border border-gray-300 px-4 py-2">Username</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-100">
                            <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                City: {user.address.city}<br />
                                Number: {user.address.number}<br />
                                Street: {user.address.street}<br />
                                Zipcode: {user.address.zipcode}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">
                                First Name: {user.name.firstname}<br />
                                Last Name: {user.name.lastname}
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{user.password}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.phone}</td>
                            <td className="border border-gray-300 px-4 py-2">{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div >
    )
}

export default UserInfo