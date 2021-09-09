import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, handleUpdate, taskObj }) => {
  const [modifyTask, setModifyTask] = useState({ taskName: "", description: "" })


  useEffect(()=>{
      setModifyTask({taskName: taskObj.taskName, description:taskObj.description})
  },[])

  const taskHandler =(e)=>{
      const {name, value} = e.target;
      setModifyTask({[name]:value})
      // console.log(task)
  }

  

 const modifyUpdate = (e)=>{
     e.preventDefault();
     handleUpdate(modifyTask)
     console.log(modifyTask)
 }


  const {taskName,description} = modifyTask
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update Task</ModalHeader>
        <ModalBody>
          <form>
            <div className="form-group">
              <label>Task Name</label>
              <input className="form-control" name='taskName' type="text" value={taskName} onChange={taskHandler} />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea className="form-control" name='description' rows="5" value={description} onChange={taskHandler} />
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={modifyUpdate}>
            Update
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditTask;
