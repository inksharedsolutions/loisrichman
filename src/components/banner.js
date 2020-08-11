import React from 'react'
import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/mountain_v2.png'

const Banner = ()=>{
    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-layout" id="banner-layout-responsive">
                    
    
                        <div className="right-col banner-img">

                            <div className="banner-text">
                                <span className="first-title">Keywest</span>
                                <h1>
                                    <span>I</span>
                                    <span>n</span>
                                    <span>t</span>
                                    <span>e</span>
                                    <span>r</span>
                                    <span>l</span>
                                    <span>u</span>
                                    <span>d</span>
                                    <span>e</span>
                                </h1>
                                {/* <p>You Now</p> */}
                            </div>  
                            {/* <img src={ImgBanner}/> */}
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;