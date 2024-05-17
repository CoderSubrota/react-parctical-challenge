import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const JobSeekers = () => {
const [jobseekers , setCandidates] = useState([]);
useEffect(()=>{
const getCandidates = JSON.parse(localStorage.getItem("candidates") || '[]');
setCandidates(getCandidates) ;
},[])
let filterData = jobseekers.filter((candiadate) => candiadate.role.toLocaleLowerCase().includes('job seekers'.toLocaleLowerCase()));

return (
    <>
        <div className="flex flex-row-reverse justify-self-center">
                <div> <NavLink to="/candidates" className="btn btn-info text-white px-6 py-2 mx-10 my-10">Candidates</NavLink> </div>
                <div> <NavLink to="/all-users" className="btn btn-info text-white px-6 py-2 mx-10 my-10">Search Data</NavLink> </div>
            </div>
            <h2 style={{ fontSize: "28px", color: "white", textAlign: "center" }}> Total job seekers  <span  className="text-info"> {filterData?.length}</span> </h2>

    <div className="grid grid-rows-4 grid-flow-col gap-4 mx-3 my-3">
     {
        filterData.map((candiadate, i) => {
            return (
                <>
                   <div className="card card-compact w-96 bg-base-100 shadow-xl" key={i}>
                                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {candiadate.name}</h2>
                                    <p>Email:{candiadate.email}</p>
                                    <div className="card-actions justify-end">
                                        <p>Role:{candiadate.role}</p>
                                    </div>
                                    <p>Skills : {candiadate?.skills?.map((skill) => {
                                        return (<>
                                            <p>{skill.skill}</p>
                                        </>)
                                    })}</p>
                                </div>
                            </div>
                </>
            )
        }) 
     }
     </div>
    </>
)

}

export default JobSeekers;