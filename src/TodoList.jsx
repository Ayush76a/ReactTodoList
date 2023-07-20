import React, { useState } from 'react'

const TodoList = () => {

    // variable and its fucntion to handle the task entered in the input box
    const [task, setTask] = useState("");
    
    // List of task and function to handle the list
    const [List, setList] = useState([]);


    // event OnChange Handler
    function getTask(event) {
      setTask(event.target.value);
    }

    //event Handler for clicking Plus + icon
    function AddTask(){
      setList((List)=>{
        const updatedList = setList([...List, task]);
        setTask("");
        return updatedList;
        // now the variable has been added after clicking on + button 
        // then now, empty the input box
        // for this set the task state an empty string, this state "task" is also the value of input tag 
      })
    }
    


    //event Handler for clicking Delete Bin icon
    function deleteTask(i){
       // use filter function to show the left indices
       const updatedList = List.filter( (val,id) => {
        return i!==id;
       })
       //update the list
       setList(updatedList);
    }
    

    function deleteAll(){
        setList([]);
    }

  return (
    <>
    <div className='container'>
        <div className='header'>TODO LIST</div>
        <input className='textIn' type='text' placeholder='Add New Task' value={task} onChange={getTask}></input>
        <i className="fa plusIcon fa-duotone fa-circle-plus fa-beat"  onClick={AddTask}></i>

        <div className='ListData'>
            { List?.map( (val, i ) =>  {
                return (
                    <>
                        <p className='individualData' key={i}>   
                        <button className='binIcon' onClick={ ()=>deleteTask(i) }>💀</button>  
                        {val}
                        </p>
                    </>
                )
            })}
        </div>
    </div>
    <button className='delAll' onClick={deleteAll}>💀 All</button>
    </>
  )
}

export default TodoList