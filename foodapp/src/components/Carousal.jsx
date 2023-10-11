import React from 'react'

export const Carousal = () => {
  return (
    <div>
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" style={{maxHeight:"500px"}}>
  <div className='carousel-caption' style={{zIndex:"10"}}>
  <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success text-white bg-bg-success-subtle" type="submit">Search</button>
    </form>
  </div>
    <div className="carousel-item active" data-bs-interval="10000">
      <img src="
https://www.simplemost.com/wp-content/uploads/2016/07/pepperoni-olive-cheese-pizza-addictive-foods-e1468856431544.jpeg" className="d-block w-100" alt="slide 1" style={{filter:"brightness(40%)"}}/>
    </div>
    <div className="carousel-item" data-bs-interval="2000">
      <img src="
https://th.bing.com/th/id/OIP.gg7XNTtJi8hnSg2IWwah2gAAAA?pid=ImgDet&rs=1" className="d-block w-100" alt="slide 2" style={{filter:"brightness(40%)"}}/>
    </div>
    <div className="carousel-item">
      <img src="
https://th.bing.com/th/id/R.b697aab45c7f0e90b0ea2200dcb4eb14?rik=RJf9vds0JfBGUQ&riu=http%3a%2f%2fwww.foodielovesfitness.com%2fwp-content%2fuploads%2f2013%2f07%2fpasta-pizza-3.jpg&ehk=J9YLYH5jQS6pnQFBnRzuN07DiBqJthbBYXokDGIMjO0%3d&risl=&pid=ImgRaw&r=0" className="d-block w-100" alt="slide 3" style={{filter:"brightness(40%)"}}/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}
