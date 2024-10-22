import {useState} from "react"
export interface props{ 
    titre:string;
    message:string;
}
export const ClickCounter= ({titre, message}:props)=>{
    const [count, setCount] = useState(0);
    return(

        <div className="card">
            <h3>{titre}</h3>
            <button onClick={() => setCount((count) => count + 1)}> count is {count}</button>  
            <p>{count>=10 ? `${message} rien !` : message}</p>  
        </div>
    
        
    );
}


