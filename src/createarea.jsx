import React, { useState } from "react";

function Createarea(prop) {

    const [note, setnote] = useState({
        title: "", content: ""
    })
    function handlechange(e) {
        const { name, value } = e.target;
        setnote(prevnote => {
            return {
                ...prevnote, [name]: value
            };
        });
    };

    function submit(event) {
        event.preventDefault();
        prop.onAdd(note)
        setnote({
            title: "", content: ""
        })
    }

    return (
        <>
            <form>
                <input className="field" name="title" value={note.title} onChange={handlechange} placeholder="Title" />

                <textarea className="field" name="content" value={note.content} onChange={handlechange} placeholder="Take a note...." rows="3" />
                <button onClick={submit}>Add</button>
            </form>
        </>
    )
};

export default Createarea;