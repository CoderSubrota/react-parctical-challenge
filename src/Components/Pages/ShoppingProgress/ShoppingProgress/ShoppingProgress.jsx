import React, { useState } from 'react';
import "./ShoppingProgressBar.css";
import FirstStep from '../FirstStep/FirstStep';
import SecondStep from '../SecondStep/SecondStep';
import ThirdStep from '../ThirdStep/ThirdStep';
import ForthStep from '../ForthStep/ForthStep';
import DoneShopping from '../Done/Done';
const ShoppingProgressBar = () => {
    let [progress, setProgress] = useState(0);

    let handleProgress = (value) => {
        setProgress(progress += value);
    }
    return (
        <>
            <div className="progressPointers">
                {
                    progress < 25 ? <div id="progressPointer">1</div> : <img src="./done.jpg" id='doneImg' alt='progress done' />
                }
                {
                    progress < 50 ? <div id="progressPointer">2</div> : <img src="./done.jpg" id='doneImg' alt='progress done' />
                }
                {
                    progress < 75 ? <div id="progressPointer">3</div> : <img src="./done.jpg" id='doneImg' alt='progress done' />
                }
                {
                    progress < 100 ? <div id="progressPointer">4</div> : <img src="./done.jpg" id='doneImg' alt='progress done' />
                }
                {
                    progress === 100 ? <img src="./done.jpg" id='doneImg' alt='progress done' /> : <div id="progressPointer">5</div>
                }
            </div>
            <div id='soppingProgress'>
                <div id='progressBar' style={{ width: `${progress}%` }}
                    aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}
                ></div>
            </div>
            <p style={{ textAlign: 'center', marginTop: '10px', color: "white", fontSize: "28px" }}>{`${progress}% Complete`}</p>

            <div className="componentsAndButtons">
                {progress < 25 && <FirstStep></FirstStep>}

                {progress === 25 && <SecondStep></SecondStep>}

                {
                    progress === 50 && <ThirdStep></ThirdStep>
                }
                {
                    progress === 75 && <ForthStep></ForthStep>
                }

                {
                    progress === 100 && <DoneShopping></DoneShopping>
                }
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <button className='btn btn-info text-white my-3' style={{ display: progress === 75 || progress === 100 ? "none" : "block" }} onClick={() => handleProgress(25)}>Next</button>
                    <button className='btn btn-info text-white  my-3' style={{ display: progress === 75 ? "block" : "none" }} onClick={() => handleProgress(25)}>Submit</button>
                    <button className='btn btn-info text-white  my-3' style={{ display: progress === 100 ? "block" : "none" }} disabled={progress === 100} onClick={() => handleProgress(100)}>Submited</button>

                </div>
            </div>

        </>
    );
};

export default ShoppingProgressBar;
