import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/banner'
import Nav from '../components/nav'


export const query = graphql`
	query($slug:String!){
		markdownRemark(fields : {slug: {eq : $slug}}){
			frontmatter{
				title
				date
			}
			html
		}
	}
`

const Blog = (props) =>{
    return(
        <>
            <Layout>
                <Nav pathExt={props.path} />
                <Banner/>
                
                <section className="section-single-blog-post">
                	<div className="container">
                    	<h1>
                    		{props.data.markdownRemark.frontmatter.title}
                    	</h1>
                        <p className="single-post-date">
                            {props.data.markdownRemark.frontmatter.date}
                        </p>

                        <div className="">

                        </div>
                	</div>
                </section>

            </Layout>
        </>
    )
}

export default Blog