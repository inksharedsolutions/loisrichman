import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../../static/author/main_author.png'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-image-container">
                        <img src={AuthorImg}/>
                     </div>

                     <div className="grid-child" id="author-contents">
                        <span>Author & Writer</span>
                        <h1>
                            <span>Lois</span>
                            <span>Richman</span>
                        </h1>
                        <p>
                            Lois Richman left Palm Beach, Florida and went directly to Hollywood,
                            California right after graduation from high school where she was hired
                            as a columnist and west coast editor for various fan magazines.
                            She also wrote articles for national women's magazines before she
                            finished her formal education at Cal State Northridge, earning a B.A. 
                            in English Literature.
                        </p>

                        <div className="button-container">
                            <Link to="">
                                Read More
                            </Link>
                        </div>

                     </div>
                </div>
            </section>
        </>
    )
}

export default Author;