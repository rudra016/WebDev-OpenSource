import React from 'react'
import './Styles/Testimonials.css'

const Testimonials = () => {
    return (
        <div className="container-fluid Review-Section">
            <div className='container mx-auto my-5 '>
                <div className="row Feature-Section">
                    <p className='Feature-Tagline my-2'>Testimonials</p>
                    <h2 className='Feature-Heading my-2'>From Our Clients</h2>
                </div>
                <div className="row my-5">
                    <div className="col Rating-Block">
                        <div className="d-flex flex-row">
                            <img className='User-Logo' src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais" alt="" />
                            <div class="feature-thumb">
                                <h3>Alex John</h3>
                                <p className='post'>Founder</p>
                            </div>
                        </div>
                        <div class="feature-title">
                            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut alias neque. Esse quam atque ipsum facere dignissimos explicabo. Minima voluptatem ullam blanditiis maiores voluptate nostrum possimus! Provident, quidem nisi! </p>
                        </div>
                        <div className="d-flex flex-row star-rating">
                            <span class="fa fa-star checked mx-1"></span>
                            <span class="fa fa-star checked mx-1"></span>
                            <span class="fa fa-star checked mx-1"></span>
                            <span class="fa fa-star mx-1"></span>
                            <span class="fa fa-star mx-1"></span>
                        </div>
                    </div>
                    <div className="col Rating-Block">
                        <div className="d-flex flex-row">
                            <img className='User-Logo' src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696723200&semt=ais" alt="" />
                            <div class="feature-thumb">
                                <h3>Alex John</h3>
                                <p className='post'>Founder</p>
                            </div>
                        </div>
                        <div class="feature-title">
                            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut alias neque. Esse quam atque ipsum facere dignissimos explicabo. Minima voluptatem ullam blanditiis maiores voluptate nostrum possimus! Provident, quidem nisi! </p>
                        </div>
                        <div className="d-flex flex-row star-rating">
                            <span class="fa fa-star checked mx-1"></span>
                            <span class="fa fa-star checked mx-1"></span>
                            <span class="fa fa-star checked mx-1"></span>
                            <span class="fa fa-star mx-1"></span>
                            <span class="fa fa-star mx-1"></span>
                        </div>
                    </div><div className="col Rating-Block">
                        <div className="d-flex flex-row">
                            <img className='User-Logo' src="https://images.news18.com/webstories/2023/08/cropped-image-64dc6f906722a.png" alt="" />
                            <div class="feature-thumb">
                                <h3>Elvish Yadav</h3>
                                <p className='post'>Customer</p>
                            </div>
                        </div>
                        <div class="feature-title">
                            <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ut alias neque. Esse quam atque ipsum facere dignissimos explicabo. Minima voluptatem ullam blanditiis maiores voluptate nostrum possimus! Provident, quidem nisi! </p>
                        </div>
                        <div className="d-flex flex-row star-rating">
                            <span class="fa fa-star checked mx-1"></span>
                            <span class="fa fa-star checked mx-1"></span>
                            <span class="fa fa-star checked mx-1"></span>
                            <span class="fa fa-star mx-1"></span>
                            <span class="fa fa-star mx-1"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials