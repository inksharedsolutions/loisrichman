import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import UpperMain from "../components/author"
import MidBook from "../components/front-book"
import FeaturedLogos from "../components/mid-main"



const IndexPage = (props) => (
  <Layout>
      <Nav pathExt={props.path}/>
      <Banner/>
      <UpperMain/>
      <MidBook/>
      <FeaturedLogos/>
  </Layout>
)

export default IndexPage