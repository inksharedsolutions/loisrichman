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

const Blog = () =>{
    return(
        <>
            <Layout>
                <Banner/>
                
                <section className="section-single-blog-post">
                	
                	<h1>
                		{props.data.markdownRemark.frontmatter.title}
                	</h1>
                	
                </section>

            </Layout>
        </>
    )
}

export default Blog