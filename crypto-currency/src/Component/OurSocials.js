import React from 'react'
import './Styles/OurSocials.css'

const OurSocials = () => {
    return (
        <div className="container-fluid">
            <div className='container mb-5'>
                <h2 className='Feature-Heading my-2 d-flex align-items-center justify-content-center'>Our Socials</h2>
                <h2 className='white mt-5 mb-2 subscribe'><span className='Red'>Subscribe</span> to our <span className='purple'>Newsletter :</span></h2>
                <div className="row Search-Row px-3 mb-5">
                    <div className="col-lg-11 col-md-10 col-sm-12 px-1 SearchBar my-1">
                        <input class="form-control mr-sm-2" type="search" placeholder="Enter Your Email here" aria-label="Search" />
                    </div>
                    <div className="col-lg-1  col-md-2 col-sm-12 px-0 my-1">
                        <button class="Search-Button Search-Btn btn btn-outline-primary my-2 my-sm-0" type="submit">Subscribe</button>
                    </div>
                </div>
                <div className="d-flex flex-row">
                    <h2 className='white'>Follow us on : </h2>
                    {/* insta  */}
                    <a className='Socials-Links' href="/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png" alt="" /></a>

                    {/* twitter  */}
                    <a className='Socials-Links' href="/"><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-twitter-social-media-round-icon-png-image_6315985.png" alt="" /></a>

                    {/* facebook */}
                    <a className='Socials-Links' href="/"><img src="https://static.vecteezy.com/system/resources/previews/023/986/613/original/facebook-logo-facebook-logo-transparent-facebook-icon-transparent-free-free-png.png" alt="" /></a>

                    {/* youtube  */}
                    <a className='Socials-Links' href="/"><img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/hd-youtube-logo-png-transparent-background-20.png" alt="" /></a>
                </div>
            </div>
            <hr />
            <div className="container footer">
                <p className='white'><span className='purple'>&copy;CryptoVault</span> all Right Reseved.</p>
                <div>
                    <a className='white mx-4' href="/">&#9702; Privacy Policy</a>
                    <a className='white' href="/">&#9702; Terms and Conditions</a>
                </div>
            </div>
        </div>
    )
}

export default OurSocials