import React, { useState } from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import notesdata from "./notesdata";
import Createarea from "./createarea";



function App() {
  const [notes, setNotes] = useState([])

  function addnote(newnote) {
    setNotes(prevnotes => {
      return [...prevnotes, newnote]
    })
  }

  function deletenote(id) {
  
    setNotes(prevnote=>{
     return prevnote.filter((noteitem,index)=>{return index!=id})
    })
  }

  return (<>
    <Header />
    <Createarea onAdd={addnote} />

    {notes.map((noteitem, index) => {
      return <Note title={noteitem.title} content={noteitem.content} ondelete={deletenote} key={index} id={index}/>
    })}

    <Footer />
  </>
  );
}

export default App;
