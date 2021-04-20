import React from 'react'
import {graphql, useStaticQuery, useState } from 'gatsby'
import Layout from '../components/layout'
import Banner from '../components/non-front-banner'
import Nav from '../components/nav'
import BlogComponent from '../components/blog/blog-component'
import { Helmet } from 'react-helmet'

const BlogPage = (props)=>{

    const data = useStaticQuery(
        graphql`
            query{
                allMarkdownRemark{
                    edges{
                        node{
                            frontmatter{
                                title
                                date
                            }
                            fields{
                                slug
                            }
                            html
                        }
                    }
                }
            }
        `
    )

    let count = 0;

    return (
        <>
            <Layout>
                <Helmet title="Blogs | Lois Richman" />
                <Nav pathExt={props.path}/>
                <Banner
                    spanFirst={``}
                    contextHeading={`Blogs`}
                />
                
                <div className="container"  id="blog-body-content-list">
                    <h1 className="heading-section">
                        Blog Contents
                    </h1>

                    <div className="container">
                    {data.allMarkdownRemark.edges.map((edge , indx)=>{
                            if( edge.node.fields.slug != "privacy-policy" && edge.node.fields.slug != "terms-and-condition"  ){
                                count += 1;
                                return(
                                    <>
                                        <BlogComponent
                                            num={`0${count}`}
                                            title={`${edge.node.frontmatter.title}`}
                                            date={`${edge.node.frontmatter.date}`}
                                            content={
                                                `${edge.node.html}`
                                            }
                                            slugPost={`${edge.node.fields.slug}`}
                                        />
                                    </>
                                )
                             }
                          }
                       )
                    }

            
                    </div>
                </div>

            </Layout>
        </>
    ) 
}       

export default BlogPage;