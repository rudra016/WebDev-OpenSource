import React from 'react'

const AddTodo = ({addTask , setShowAddTodo}) => {
    let [title,setTitle] = React.useState("")
    let [desc,setDesc] = React.useState("")

    onsubmit = (event) => {
        event.preventDefault();
        if(title.length === 0 || desc.length === 0){
            alert("Title and Description can't be Blank!")
        }
        else{
            setShowAddTodo(false);
            addTask(title,desc);
        }
    }

    return (
        <>
            <form className='container d-flex flex-column justify-content-center align-items-center my-5'>
                <h4>Add Your Task</h4>
                <div className='addForm'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input type="text" value={title} placeholder='Enter your Title Here' className="form-control" onChange={(e)=>{setTitle(e.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" value={desc} placeholder='Enter your Description Here' className="form-control" onChange={(e)=>{setDesc(e.target.value)}} id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>
        </>
    )
}

export default AddTodo