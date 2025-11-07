export default function Friend({friend}){
    console.log(friend);
    const {name, username, email, phone} = friend;
    
    return(
        <div className="card" style={{
            textAlign: 'left'
        }}>
            <h3>Name: {name}</h3>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
        </div>
    )
}