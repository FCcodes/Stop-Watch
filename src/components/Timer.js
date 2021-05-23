import React from 'react'
import {useState} from 'react'

const Timer = () => {
    const[time, setTime] = useState({s:0, m:0, h:0})
    //const[runTimer, setRunTimer] = useState(true)
    const [interv, setInterv] = useState();

    const start = () => {
        run();        
        setInterv(setInterval(run, 1000));
      };
    
      let  updatedS = time.s, updatedM = time.m, updatedH = time.h;
          
      const run = () => {
        if(updatedM === 60){
            updatedH++
            updatedM = 0
        }
        if(updatedS === 60){
            updatedM++
            updatedS = 0
        }
        updatedS++
        return setTime({s:updatedS, m:updatedM, h:updatedH})
    }
    
    const stop = () => {
    clearInterval(interv);        
    };

    const reset = () => {
        clearInterval(interv)
        setTime({s:0, m:0, h:0})
    }
    
    return (
        <div className="timer" >
            <div className="displayTime">
                <h1 className="hour">{time.h >= 10? <></>: 0}{time.h}</h1>
                <h1>:</h1>
                <h1 className="min">{time.m >= 10? <></>: 0}{time.m}</h1>
                <h1>:</h1>
                <h1 className="sec">{time.s >= 10? <></>: 0}{time.s}</h1>
            </div>

            <div className="btn">
                <button onClick={()=> start()} >Start</button>                                               
                <button onClick={()=> stop()} >Stop</button>                                               
                <button onClick={()=> reset()}>Reset</button>
            </div>                                                           
        </div>
    )
}

export default Timer
