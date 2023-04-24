import React, { useState } from "react";
import ListComponent from "./ListComponent";
const App=()=>{


  const [inputlist,setinputlist]=useState("");

 const func =(event)=>{
  setinputlist(event.target.value);
 };

 const [items,setitems]=useState([]);

 const workonclick=()=>{
  setitems((olditems)=>{
    return [...olditems,inputlist];
  })
  setinputlist("");
  
 }


 const deleteitems=(id)=>{
  setitems((olditems)=>{
    return   olditems.filter((arrelem,ind)=>{
      return id!==ind; 
    })
  })

 }

return(
  <>
    <div className="main_div">

      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a item" onChange={func} value={inputlist}/>
        <button onClick={workonclick}>+</button>


        <ol>
          {items.map((itemval,index)=>{
            return <ListComponent   text={itemval} 
              key={index}
              id={index}
              onselect={deleteitems}
            />;
          })}
        </ol>
      </div>
    </div>
  </>

)

};

export default App;