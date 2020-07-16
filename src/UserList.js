import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UserList.css';
const UserList = (props) => {
    const [data, setData] = useState([]);
    const fetchData = () => {
        axios
            .get('http://localhost:8080/api/users')
            .then(response => {
                setData(response.data)
            })
            .catch(err => console.error('Lỗi xảy ra:' + err))
    }
    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="userList">
            <h1> Users List </h1>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data && data.map(
                            user => {
                                return (
                                    <tr key={user.id}>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.address}</td>
                                    </tr>
                                )
                            }
                        )
                    }
                </tbody>
            </table>
        </div >
    )
}
export default UserList