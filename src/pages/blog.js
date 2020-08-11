import React from 'react'
import {Link} from "gatsby"
import Layout from '../components/layout'
import Banner from '../components/non-front-banner'
import Nav from '../components/nav'

const BlogPage = (props)=>{



    return (
        <>
            <Layout>
                <Nav pathExt={props.path}/>
                <Banner   
                    spanFirst={`blog page`}
                    contextHeading={`Blog`}/>
                
                <div className="container"  id="blog-body-content-list">
                    <h1 className="heading-section">
                        Blog Contents
                    </h1>

                    <div className="container">
                        <section className="grid-parent-blog">
                            <span className="grid-child blog-num">01.</span>
                            <div className="grid-child blog-body">

                                <span className="blog-date">August 11, 2020</span>
                                <h1>Blog Title</h1>
                                <p>
                                    Lois Richman left Palm Beach, Florida and went
                                    directly to Hollywood, California right after
                                    graduation from high school where she was hired as
                                    a columnist and west coast editor for various fan magazines.
                                </p>
                                <div className="blog-link">
                                    <Link to="">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </section>

                        <section className="grid-parent-blog">
                            <span className="grid-child blog-num">01.</span>
                            <div className="grid-child blog-body">

                                <span className="blog-date">August 11, 2020</span>
                                <h1>Blog Title</h1>
                                <p>
                                    Lois Richman left Palm Beach, Florida and went
                                    directly to Hollywood, California right after
                                    graduation from high school where she was hired as
                                    a columnist and west coast editor for various fan magazines.
                                </p>
                                <div className="blog-link">
                                    <Link to="">
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        </section>

                    </div>
                </div>

            </Layout>
        </>
    ) 
}       

export default BlogPage;