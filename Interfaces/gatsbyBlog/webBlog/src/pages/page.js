import React from "react";
import { graphql } from "gatsby";
import "../styles.css";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import Header from "../components/header";
import Footer from "../components/footer";
import NextPage from "../components/NextPage";
import PostBody from "../components/PostBody";



export default ({ data }) => (
  <div>
  <Header headerText={'Hello world'}/>
  <PostBody postContents={data.allMongodbTestPosts.edges.map(({ node }, index) => (<div dangerouslySetInnerHTML={{ __html: node.content }} />))}/>
  <NextPage />
  <Footer />
  </div>

)

export const query = graphql `{
  allMongodbTestPosts {
    edges {
      node {
        id
        content
      }
    }
  }
  site(siteMetadata: {}) {
    siteMetadata {
      title
    }
  }
}`
