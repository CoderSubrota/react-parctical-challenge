import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchData = () => {
    const [candidates, setCandidtes] = useState([]);
    const [input, setInput] = useState('');
    useEffect(() => {
        const data = localStorage.getItem("candidates");
        const candidates = JSON.parse(data);
        setCandidtes(candidates);
    }, [])

    const filterData = candidates?.filter((item) => item?.name?.toLocaleLowerCase().includes(input?.toLocaleLowerCase()));

    return (

        <>
            <div className="flex flex-row-reverse justify-self-center">
                <div> <NavLink to="/job-seekers" className="btn btn-info text-white px-6 py-2 mx-10 my-10">Job Seekers</NavLink> </div>
                <div> <NavLink to="/candidates" className="btn btn-info text-white px-6 py-2 mx-10 my-10">Candidates</NavLink> </div>
            </div>
            <h2 style={{ fontSize: "28px", color: "white", textAlign: "center" }}> Total users  <span className="text-primary"> {filterData?.length}</span> </h2>

            <label className="input input-bordered flex  w-1/2 mx-auto my-6 items-center gap-2 ">
                <input type="text" className="grow w-1/4" placeholder="Search by name" onChange={(e) => setInput(e.target.value)} />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </label>
            <div className="grid grid-rows-3 mx-12 grid-flow-col gap-4  my-3">
                {
                    filterData?.map((item, i) => {
                        return (
                            <div className="card card-compact w-96 bg-base-100 shadow-xl" key={i}>
                                <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">Name: {item?.name}</h2>
                                    <p>Email:{item?.email}</p>
                                    <div className="card-actions justify-end">
                                        <p>Role:{item?.role}</p>
                                    </div>
                                    <div className="grid grid-cols-4">
                                       <p> Skills :</p> <br /> {item?.skills?.map((skill, i) => {
                                        return (
                                            <div key={i}>{i + 1}.{skill.skill}</div>
                                        )
                                    })}</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {filterData?.length === 0 && <h2 style={{ fontSize: "28px",  textAlign: "center", marginBottom: "20%", color: "cyan" }}> Sorry!! No data found !!</h2>}
        </>
    )
}

export default SearchData;