import {Link, withRouter} from 'react-router-dom';

function UserDetail(props){
    console.log(props);
    return (
        <>
            <h1 className="mb-3">Welcome {props.match.params.name}</h1>
            <p className="mb-5">This is you number  <strong>0000{props.match.params.id}</strong></p>
            <Link to="/users">Back To List</Link>
        </>
    )
}

export default withRouter(UserDetail);