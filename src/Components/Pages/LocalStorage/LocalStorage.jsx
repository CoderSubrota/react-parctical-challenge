import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const LocalStorage = () => {
    const [skill, setSkill] = useState('');
    const [skills, setSkills] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRoll] = useState('')

    const addSkills = () => {
        setSkills([...skills, { skill: skill }]);
        setSkill("");
        //skills
        document.getElementById("skills").value = "";
    }
    const navigate = useNavigate() ;

    const [candidates, setCandidates] = useState([]);

    useEffect(() => {
        const candidates = JSON.parse(localStorage.getItem('candidates') || '[]');
        setCandidates(candidates);
    }, []);

let checkEmail=false;

    const handleCandidates = (e) => {
        e.preventDefault()
        //check email
      
        candidates?.map((item) => {
            if(item.email===email){
                return checkEmail = true ; //function return something
            }
        });
        //

        if (checkEmail===true) {
            document.getElementById("msg").innerText="Email already exist";     
            return ;
         }else{
            document.getElementById("msg").innerText="Account created successfully";
            navigate("/all-users");
         }

        let candiadate = { name: name, email: email, role: role, skills: [...skills] };

         localStorage.setItem('candidates', JSON.stringify([...candidates,candiadate]));//[singale] => null
         candidates.push(candiadate); //push 

        document.getElementById("canidatesForm").reset();
        document.getElementById("skillsShow").innerText=null;
    }

    return (<>
        <div>

            <div>
                { <p id="msg" style={{color:"white",textAlign:"center",fontSize:"25px"}}>  </p> }
                <div className="hero">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center text-white md:text-left">

                            <h1 className="text-5xl font-bold">Register an account </h1>
                            <p className="py-6">This info will be save on your local storage!!</p>
                            
                        </div>
                        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleCandidates} id="canidatesForm" className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" onChange={(e) => setName(e.target.value)} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Role</span>
                                    </label>
                                    <select className="select select-bordered" onChange={(e)=> setRoll(e.target.value)}>
                                       
                                        <option selected disabled>Select your role ?</option>
                                        <option value="Job Seekers">Job Seekers</option>
                                        <option value="Candidate">Candidate</option>
                                    </select>
                                </div>

                                <div className="form-control ">
                                    <button className="btn btn-info text-white skills" type="submit">Submit</button>
                                </div>
                            </form>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Skills</span>
                            </label>
                            <div className="flex row my-5 w-3/4">
                                <input type="text" placeholder="skills" onChange={(e) => setSkill(e.target.value)} className="input input-bordered " id="skills" />
                                <button onClick={() => addSkills()} type="submit" className="btn btn-info text-white  mx-5">Add skill</button>
                            </div>
                            <div className="my-3">
                            <div class="grid grid-rows-4 grid-flow-col gap-4"  id="skillsShow">
                                {
                                    skills.map((item, i) => {
                                        return (
                                            <>
                                   <div
                                   key={i} className="d-flex text-dark bg-base-200 rounded px-3"> {i+1}. {item.skill} 
                                   </div>

                                            </>
                                        )
                                    })
                                }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </>)
}

export default LocalStorage;