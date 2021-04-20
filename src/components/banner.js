import { animated, useSpring } from 'react-spring';
import React, {useState, useEffect, useRef} from 'react'
// import {Link} from 'gatsby'
import  ImgBanner from '../../static/banner/main_banner.png'

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 10}px, ${y / 10}px, 0)`;
const trans2 = (x, y) => `translate3d(${x / 3.5}px, ${y / 3.5}px, 0)`;
const trans3 = (x, y) => `translate3d(${x / 6 - 10}px, ${y / 6 - 15}px, 0)`;

const Banner = ()=>{

   const [props, set] = useSpring(() => ({
       xy: [0, 0], 
       config: {mass: 10, tension: 550, friction: 140} 
    }));

    return (
        <>
            <section className="banner-section">
                <div className="container-gt">
                    <div className="one-grid-layout" id="banner-layout-responsive">
                    
    
                        {/* <div className="banner-contents"> */}

                            <div className="banner-contents" 
                                onMouseMove={({clientX: x, clientY: y}) => set({xy: calc(x, y)})} >
                                

                                <animated.div 
                                    style={{transform: props.xy.to(trans1)}} 
                                    className="first-title" >
                                        <span>Keywest</span>
                                </animated.div>
                                <animated.div 
                                    style={{transform: props.xy.to(trans2)}}
                                    className="second-title">
                                        <animated.div style={{transform: props.xy.to(trans3)}}>
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
                                        </animated.div>
                                        <p>You Now</p>
                                </animated.div>
                                
                            </div>  
                            
                        {/* </div> */}

                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner;

/*
    (function() {
        document.addEventListener("mousemove",parallax);
        const elem = document.querySelector("#parallax");

        function parallax(e){
            let w = window.innerWidth / 2;
            let h = window.innerHeight / 2;
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            let depth1 = `${50 - (mouseX - w) * 0.01}% ${50 - (mouseY - h) * 0.01}%`
            let depth2 = `${50 - (mouseX - w) * 0.02}% ${50 - (mouseY - h) * 0.02}%`
            let depth3 = `${50 - (mouseX - w) * 0.06}% ${50 - (mouseY - h) * 0.06}%`
            let x = `${depth3}, ${depth2}, ${depth1}`;
            console.log(x);
            elem.style.backgroundPosition = x;
        }
    })()
*/