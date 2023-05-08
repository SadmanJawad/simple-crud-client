import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    // data load from /users route for Read
    const loadedUsers = useLoaderData();
    
    const [users, setUsers] = useState(loadedUsers);



    // delete data from server
    const handleDelete = _id => {
        console.log('delete', _id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.deletedCount>0){
                alert('deleted successfully');
                const remaining = users.filter(user => user._id !== _id);
                setUsers(remaining);

            }
        })
    }

    return (
        <div>
            <h2>Users: {users.length}</h2>
            <div>
                {/* loop through kore data dekhano */}
                {
                    users.map(user => <p key={user._id}> 
                        {user.name} : {user.email} {user._id} 
                    <Link to={`/update/${user._id}`}><button>Update</button></Link>
                         <button onClick={()=>handleDelete(user._id)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;