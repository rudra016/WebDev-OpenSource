import React, { useRef, useState } from 'react'




export default function Form() {

const username = useRef("");
const email = useRef("");
const website = useRef("");
const imagelink = useRef("");
const gender = useRef([]);
const skills = useRef([]);


 const [formData, setformData] = useState({
  username:'',
  email:'',
  website:'',
  imagelink:'',
  gender:'',
  skills:[]
  
 })

 const[records, setRecords] =  useState([]);


 const handleOnChange = (e)=>{
  if (e.target.name === 'skills'){
    let copy = {...formData}
    if (e.target.checked){
      copy.skills.push(e.target.value)
    }else{
      copy.skills = copy.skills.filter(el=>el != e.target.value)

    }
    setformData(copy)
  }else{
setformData(()=> ({
  ...formData,
  [e.target.name]: e.target.value
}))}
}

const saveData = (formData) =>{
  const finished = (error)=>{
    if(error){
      console.error(error)
      return
    }
  }

};
 
const handleOnSubmit=(e)=>{
  e.preventDefault();
console.log(formData);

const newRecord = {...formData, id : new Date().getTime().toString()}

setRecords([...records, newRecord ]);
console.log(records.username);


};


 const handleOnClearing=(e)=>{
   username.current.value = "" ;
   email.current.value = "" ;
   website.current.value = "" ;
   imagelink.current.value = "" ;


  for (let i = 0; i < skills.current.length; i++) {

    skills.current[i].checked = false;
}

for (let i = 0; i < gender.current.length; i++) {

  gender.current[i].checked = false;
}




};

  return (
    <>
      <div className="container text-center">
  <div className="row">
    <div className="col">
    <div className='form'>
    <form   onSubmit={handleOnSubmit} >
<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label  className="col-form-label">Name</label>
  </div>
  <div className="col-auto">
    <input name="username" ref={username}  id="inputPassword6" className="form-control" onChange={handleOnChange} aria-labelledby="passwordHelpInline"/>
  </div>
</div>


<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label className="col-form-label">Email</label>
  </div>
  <div className="col-auto">
    <input name='email' ref={email} id="inputPassword6" onChange={handleOnChange} className="form-control" aria-labelledby="passwordHelpInline"/>
  </div>
</div>


<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label className="col-form-label">Website</label>
  </div>
  <div className="col-auto">
    <input name='website' ref={website} id="inputPassword6" onChange={handleOnChange} className="form-control" aria-labelledby="passwordHelpInline"/>
  </div>
</div>


<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label  className="col-form-label">ImageLink</label>
  </div>
  <div className="col-auto">
    <input name='imagelink' ref={imagelink} id="inputPassword6" onChange={handleOnChange} className="form-control" aria-labelledby="passwordHelpInline"/>
  </div>
</div>



<div className="row g-3 align-items-center">
  <div className="col-auto">
    <label name="gender" className="col-form-label">Gender</label>
  </div>
  <div className="col-auto">
  <div className="form-check form-check-inline">
  <input className="form-check-input"  ref={(element) => { gender.current[0] = element }} onChange={handleOnChange} type="radio" name="gender" id="inlineRadio1" value="male"/>
  <label className="form-check-label" >Male</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input"  ref={(element) => { gender.current[1] = element }} onChange={handleOnChange} type="radio" name="gender" id="inlineRadio2" value="female"/>
  <label className="form-check-label"  >Female</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input"  ref={(element) => { gender.current[2] = element }} onChange={handleOnChange} type="radio" name="gender" id="inlineRadio2" value="others"/>
  <label className="form-check-label" >Others</label>
</div>

</div>
  </div>


<div   className="row g-3 align-items-center">
  <div className="col-auto">
    <label htmlFor="skills" className="col-form-label">Skills</label>
  </div>
  <div className="col-auto">
  <div  className="form-check form-check-inline">
  <input className="form-check-input" ref={(element) => { skills.current[0] = element }} type="checkbox" name="skills" id="inlineCheckbox1" onChange={handleOnChange} value=" C/C++ "/>
  <label className="form-check-label"  htmlFor="c" >C/C++</label>
</div>
<div  className="form-check form-check-inline">
  <input className="form-check-input" ref={(element) => { skills.current[1] = element }} type="checkbox" name="skills" id="inlineCheckbox2" onChange={handleOnChange} value=" javascript "/>
  <label className="form-check-label" htmlFor="javascript" >JavaScript</label>
</div>
<div className="form-check form-check-inline">
  <input className="form-check-input" ref={(element) => { skills.current[2] = element }} type="checkbox" name="skills" id="inlineCheckbox3" onChange={handleOnChange} value=" python " />
  <label className="form-check-label" htmlFor="python"  >Python</label>
</div>
  </div>
</div>




<div className="row g-3 align-items-center">
<button type="submit"  className="btn btn-primary">Enroll Student</button>
<button  type="button" onClick={handleOnClearing}  className="btn btn-danger">Clear</button>
</div>

</form>


    </div>
    </div>
    <div className="col">



    <div className='carrds'>
      

        <h4>Enrolled Students</h4>
        <div>
  <table className="table table-striped">
    <thead>
         <tr>
             <th scope="col" className='colm1'>Description</th>
             <th scope="col" className='colm2'>Photo</th>
         </tr>
    </thead>
  <tbody>
    {records.map((curElem =>{
      return (
        <tr>
            <th scope="row"  className='colm1'>
             <span className='spans'> <p className='first'>Name: </p>
              <p className='second' >{ curElem.username}</p></span>

              <span className='spans'><p className='first'>Gender:  </p>
              <p  className='second'>{ curElem.gender}</p></span>

              <span className='spans'><p className='first'>Email:  </p>
              <p className='second'>{ curElem.email}</p></span>

              <span className='spans'><p className='first'>Website:  </p>
              <p className='second'>{ curElem.website}</p></span>

              <span className='spans'><p className='first'>Skills:  </p>
              <p className='second'>{ curElem.skills}</p></span>
              
            </th>
            <td  className='colm2'>
              <img src={curElem.imagelink}/>
            </td>
         </tr>
      )
  }))}
  </tbody>
</table>
</div>


    </div>



</div>
  </div>
    </div>
    </>
  )
}
