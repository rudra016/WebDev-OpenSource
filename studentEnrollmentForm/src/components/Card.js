import React from 'react'
export default function Card() {
  return (
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
            <tr>
              <th scope="row" className='colm1'>
                <span className='spans'> <h5>Name:  </h5>
                  <h5 ></h5></span>

                <span className='spans'><h6>Gender:  </h6>
                  <p ></p></span>

                <span className='spans'><h6>Email:  </h6>
                  <p>{ }</p></span>

                <span className='spans'><h6>Website:  </h6>
                  <p>{ }</p></span>

                <span className='spans'><h6>Skills:  </h6>
                  <p>{ }</p></span>

              </th>
              <td className='colm2'>
                <img src="https://www.sharpconsumer.uk/audio/drp420bk/" />
              </td>
            </tr>

          </tbody>
        </table>
      </div>
    </div>
  )
}
