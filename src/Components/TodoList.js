import React,{useEffect, useState} from 'react'
import CreateTask from '../Modals/CreateTask'
import Card from './Card'
import  './todolist.css'

const TodoList = () => {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([])

    useEffect(()=>{
        let arr = localStorage.getItem('taskList');
        if(arr){
            let obj = JSON.parse(arr);
            setTaskList(obj)
        }
    },[])

    const toggle = ()=>{
        setModal(!modal)
    }


    const saveTask = (taskObj)=>{
        let tempList = taskList
        tempList.push(taskObj)
        setTaskList(tempList)
        localStorage.setItem('taskList',JSON.stringify(tempList))
        setModal(false)
    }

    const deleteTask = (index)=>{
        let tempList = taskList;
        tempList.splice(index,1)
        localStorage.setItem('taskList',JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload();
    }

    const updateTask = (modifiedObj, index)=>{
        let tempList = taskList;
        tempList[index] = modifiedObj;
        console.log(tempList)
        localStorage.setItem('taskList', JSON.stringify(tempList))
        setTaskList(tempList)
        // window.location.reload();
    }
    return (
        <>
            <div className='header text-center' >
                <h1>Todo List</h1>
                <button className='btn btn-primary mt-2' onClick={()=>setModal(true)}>Add Task</button>
            </div>
            <div className='task-container'>
                {
                    
                    taskList && taskList.map((obj, index)=> <Card taskObj={obj} index={index} deleteTask={deleteTask} updateTask={updateTask}/>)
                }
            </div>
            
            <CreateTask modal={modal} toggle={toggle} saveTask={saveTask} />
        </>
    )
}

export default TodoList
