import { useState } from "react";
import { useEffect } from "react";
import "./ProggressBar.css";
const ProgressBar = () => {
    let [progress, setProgress] = useState(0);
    useEffect(() => {
        let intervalId = setInterval(() => {
            setProgress((prevProgress) => {
                let newProgress = prevProgress + 1;
                if (newProgress >= 100) {
                    clearInterval(intervalId); //clear 
                    return 100;//NAN so return 100
                }
                return newProgress;
            })
        }, 200);

        return () => clearInterval(intervalId); //unsubscribe

    }, [])
    return (<>
    <div style={{height:"100vh"}}>
        <div className="progress-bar" >
            <span className="progress-text" style={{ color: progress > 49 ? "white" : "black" }}>{progress}%</span>
            <div className="progress" style={{ width: `${progress}%`, 
            backgroundColor:progress<100?"rgba(233, 193, 15, 0.61)":"rgba(40, 233, 15, 0.61)"
        }} aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}></div>
        </div>
        <div className="text-div">
            {
                progress <= 50 && <p style={{ color: "white" }}> Loading...</p>
            }
            {
                progress >= 60 && <p style={{ display: progress === 100 ? "none" : "block", color: "yellow" }}> Almost done...</p>
            }
            {
                progress === 100 && <p style={{ color: "lime" }}>Completed !!</p>
            }
        </div>
        </div>
    </>)
}

export default ProgressBar;