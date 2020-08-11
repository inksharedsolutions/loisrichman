import React from 'react';
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
                </div>

            </Layout>
        </>
    ) 
}       

export default BlogPage;