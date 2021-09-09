import React, { useEffect, useState } from "react";
import EditTask from "../Modals/EditTask";
import './card.css'


const colors = [
 {
   color : '#0275d8'
 },
 {
  color : '#5cb85c'
},
{
  color : '#5bc0de'
},
{
  color : '#f0ad4e'
},
{
  color : '#d9534f'
}
]

const Card = ({taskObj, index, deleteTask, updateTask}) => {

  const [modal, setModal] = useState(false);


  const toggel = ()=>{
    setModal(!modal)
  }

  const handleDelete = ()=>{
    deleteTask(index)
  }

  const handleUpdate = (modifiedObj, index)=>{
    updateTask(modifiedObj, index)
    console.log(modifiedObj)
  }



  return (
    <div class="card">
    <div className = 'card-top' style = {{backgroundColor : colors[index%5].color}}>
    </div>
      <div class="card-body">
        <h5 class="card-title">{taskObj.taskName}</h5>
        <p class="card-text">
         {taskObj.description}
        </p>
      </div>
      <div style={{position:"absolute", right:'20px', bottom:'20px', cursor:'pointer'}}>
        <i className = 'far fa-edit mx-1' style = {{color : colors[index%5].color}} onClick = {()=> setModal(true)}></i>
        <i className = 'fas fa-trash-alt mx-1' style = {{color : colors[index%5].color}} onClick={handleDelete}></i>
      </div>

      <EditTask modal={modal} toggle={toggel} taskObj = {taskObj} handleUpdate={handleUpdate}/>
    </div>
  );
};

export default Card;


