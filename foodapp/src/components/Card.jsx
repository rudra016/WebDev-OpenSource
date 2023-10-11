import React from 'react'

export const Card = (props) => {
  return (
    <>
<div >
<div className="card bg-white" style={{width: "15rem",margin:"15px 5px 55px 95px"}}>
  <img src={props.link} className="card-img-top" alt="pic" width={68} height={185.53}/>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    {/* <p className="card-text"> {props.size}</p> */}
    <h5 className="card-title">{props.price}</h5>
    <div className='container w-100'>
      <select className='m-2 h-100 bg-success'>
        {Array.from(Array(6),(e,i)=>{
          return (<>
            <option key={i+1} value={i+1}>{i+1}</option>
          </>)
        })}
      </select>
      <select className='m-2 h-100 bg-success'>
      <option value="half">Half</option>
      <option value="regular">Regular</option>
      <option value="medium">Medium</option>
      </select>
    </div>
    <input className="btn btn-primary bg-danger" type="button" value="Add to Card" />
  </div>
</div>
</div>
    </>
  )
}
