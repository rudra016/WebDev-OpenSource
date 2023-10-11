import React from 'react'
import {Link} from 'react-router-dom';
import "./Footer.css"
export const Footer = () => {
  return (<>
    <div>
    <footer className="py-5">
    <div className="row">
      <div className="col-2">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Features</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">Pricing</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">FAQs</Link></li>
          <li className="nav-item mb-2"><Link to="/" className="nav-link p-0 text-muted">About</Link></li>
        </ul>
      </div>


      <div className="col-4 offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex w-100 gap-2">
            <label for="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="8muofq" />
            <button className="btn btn-primary border-bg-success bg-bg-success" type="button" fdprocessedid="3qqd5i">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2023 FoodSwift, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><Link className="link-dark" to="/"><svg className="bi" width="24" height="24"><use to="/twitter"></use></svg></Link></li>
        <li className="ms-3"><Link className="link-dark" to="/"><svg className="bi" width="24" height="24"><use to="/instagram"></use></svg></Link></li>
        <li className="ms-3"><Link className="link-dark" to="/"><svg className="bi" width="24" height="24"><use to="/facebook"></use></svg></Link></li>
      </ul>
    </div>
  </footer>
    </div>
    </>
  )
}
