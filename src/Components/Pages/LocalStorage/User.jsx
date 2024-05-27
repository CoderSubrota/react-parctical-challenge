import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const User = () => {
const {email} = useParams() ;
const [user , setUser] = useState({}) ;
useEffect(()=>{
const getData = JSON.parse(localStorage.getItem("candidates") || '[]');
const candiadate = getData.find((item) => item.email === email) ;
setUser(candiadate) ;
},[]) ;

    return (

        <>
            <div className="card card-compact w-96 m-10 bg-base-100 shadow-xl" key={user.name}>
                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body" >
                    <h2 className="card-title">Name: {user.name}</h2>
                    <p>Email:{user.email}</p>
                    <div className="card-actions justify-end">
                        <p>Role:{user.role}</p>
                    </div>
                    <p>Skills : {user?.skills?.map((skill) => {
                        return (<>
                            <p>{skill.skill}</p>
                        </>)
                    })}</p>
                </div>
            </div>
        </>
    )
}
export default User;