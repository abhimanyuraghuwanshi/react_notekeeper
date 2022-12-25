import React from "react";

function note(prop){
    function handleclick(){
        prop.ondelete(prop.id)
    }


    return <div className="note">
        <h1>{prop.title}</h1>
        <p>{prop.content}</p>
        <button onClick={handleclick}>Delete</button>
    </div>
};

export default note;