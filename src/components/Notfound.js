import React from "react";
import notf from "../notf.jpg";

const Notfound = () =>{
    return(
        <>
        <div>
            <div className="text-center">
            <img src={notf} style={{"width" : "60%"}} /><br/>
            <button type="button" className="btn btn-danger">Go to Home Page</button>
            </div>
        </div>
        </>
    )
}

export default Notfound;