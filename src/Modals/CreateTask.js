import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTask = ({ modal, toggle, saveTask }) => {
  const [task, setTask] = useState({ taskName: "", description: "" })

  const taskHandler =(e)=>{
      const {name, value} = e.target;
      setTask({...task,[name]:value})
      // console.log(task)
  }

  const handleSave=()=>{
    saveTask(task)
    setTask({taskName:'', description:''})
  }


  const {taskName,description} = task
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
          <Button color="primary" onClick={handleSave}>
            Create
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CreateTask;
