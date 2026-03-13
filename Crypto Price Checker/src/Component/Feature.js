import React from 'react'
import './Styles/Feature.css'

const Feature = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className="row Feature-Section">
                <p className='Feature-Tagline my-2'>Features</p>
                <h2 className='Feature-Heading my-2'>We Take Care Quality</h2>
            </div>
            <div className="d-flex flex-lg-row flex-md-row flex-sm-column xsmall justify-content-space-between my-5">
                <div className=" my-1 Feature-Block">
                    <div class="feature-thumb">
                        <img className='Feature-Icon' src="https://html.ditsolution.net/cryptobit/trading/assets/images/icons-img.png" alt="" />
                    </div>
                    <div class="feature-title">
                        <h3 className='Title d-flex justify-content-center'>Best Trading Platform</h3>
                        <p className='text-secondary'>Cryptography, encryption process referred to as plaintexts tailers are before best services. </p>
                    </div>
                </div>
                <div className=" my-1 Feature-Block">
                    <div class="feature-thumb">
                        <img className='Feature-Icon' src="https://html.ditsolution.net/cryptobit/trading/assets/images/icon-2.png" alt="" />
                    </div>
                    <div class="feature-title">
                        <h3 className='Title d-flex justify-content-center'>Comportable System</h3>
                        <p className='text-secondary'>Cryptography, encryption process referred to as plaintexts tailers are before best services. </p>
                    </div>
                </div>
                <div className=" my-1 Feature-Block">
                    <div class="feature-thumb">
                        <img className='Feature-Icon' src="https://html.ditsolution.net/cryptobit/trading/assets/images/ico-img.png" alt="" />
                    </div>
                    <div class="feature-title">
                        <h3 className='Title d-flex justify-content-center'>Trusted Security</h3>
                        <p className='text-secondary'>Cryptography, encryption process referred to as plaintexts tailers are before best services. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Feature