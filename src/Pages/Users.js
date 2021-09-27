import {Table} from 'react-bootstrap';
import {BrowserRouter as Router, Link } from 'react-router-dom';

function Users(){

    const UsersData=[
        {
            id:1,
            name:"Rahul A",
            email:"a@xyz.com",
            class_name:"10-A"
        },
        {
            id:2,
            name:"Rahul B",
            email:"b@xyz.com",
            class_name:"10-A"
        },
        {
            id:3,
            name:"Rahul C",
            email:"c@xyz.com",
            class_name:"10-B"
        },
        {
            id:4,
            name:"Rahul D",
            email:"d@xyz.com",
            class_name:"10-B"
        }
    ]

    return (
        <>
            <h1>Users</h1>
            <p>This is Users page </p>
            <Table striped bordered hover size="sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Class</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            UsersData.map((data,datakey)=>{
                                return (
                                    <tr key={data.id} className={data.class_name=="10-B"?"table-primary":"table-warning"}>
                                        <td>{datakey+1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.email}</td>
                                        <td>{data.class_name}</td>
                                        <td><Link to={"/users/"+data.id+"/"+data.name}>View</Link></td>
                                    </tr>
                                )
                            })
                        }
                        
                    </tbody>
                </Table>
        </>
    )
}

export default Users;