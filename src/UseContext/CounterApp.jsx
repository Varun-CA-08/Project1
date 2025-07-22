import { useContext } from "react";
import { useContext } from "react";
import CounterContext from "./CounterContext";

const CounterContext=()=>{
    const {count,IncrementCount,DecrementCount,ResetCount}=useContext(CounterContext);
    return(
        <div>
            <h1> Counter App</h1>
            <h2>
                Count:{count}
            </h2>
        </div>
    )
        
}
