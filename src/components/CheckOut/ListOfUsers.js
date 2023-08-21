import React from 'react'


const ListOfUsers = ({user})=>{
    return(
        <div>
            <div className="card">
                <div className="cardtitle">Name:{user.name}<br/>
                UserName:{user.username}</div>
                <div className="cardbody">
                    <div className="email"><h2>Email:{user.email}</h2></div>
                    <div className="address">
                        <p>Street:</p>
                        <p>Suite:{user.address.suite}</p>
                        <p>City:{user.address.city}</p>
                        <p>Zipcode:{user.address.zipcode}</p>
                        
                    </div>
                    <div className="card__footer">
                        <div className='="info"'>
                            <h4>Phone:{user.phone}</h4>
                            <h4>Website:{user.website}</h4>
                            <h5>company:{user.company.name}</h5>
                            <h5>CatchPhrase:{user.company.catchphrase}</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListOfUsers;