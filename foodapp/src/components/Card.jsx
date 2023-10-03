import React from 'react';
import "./Cards.css";

export const Card = (props) => {
  return (
    <>
      <div className="card bg-white rounded-lg shadow-sm border-0 my-4">
        <img src={props.link} className="card-img-top img-fluid card-img-obj" alt="pic" width={68} height={185.53} />
        <div className="card-body">
          <div className='row'>
            <div className='col-12'>
              <h5 className="card-title fw-bold">{props.title}</h5>
            </div>
            <div className='col-12'>
              <h6 className="card-title fw-bold">{props.price}</h6>
            </div>
            <div className='col-6'>
              <select className='form-select'>
                {Array.from(Array(6), (e, i) => {
                  return (<>
                    <option key={i + 1} value={i + 1}>{i + 1}</option>
                  </>)
                })}
              </select>
            </div>
            <div className='col-6'>
              <select className='form-select'>
                <option value="half">Half</option>
                <option value="regular">Regular</option>
                <option value="medium">Medium</option>
              </select>
            </div>
            <div className='col-12'>
              <input className="btn btn-primary bg-primary mt-3 w-100" type="button" value="Add to Card" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
