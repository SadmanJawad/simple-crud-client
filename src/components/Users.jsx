import { useLoaderData } from 'react-router-dom';

const Users = () => {

    // data load from /users route
    const users = useLoaderData();
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
                        {user.name} : {user.email} {user._id} <button onClick={()=>handleDelete(user._id)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;