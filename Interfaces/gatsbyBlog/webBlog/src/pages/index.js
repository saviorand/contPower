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
import PostGallery from "../components/PostGallery";
import Bio from "../components/Bio"

class Index extends React.Component {

  render() {

   const { allMongodbTestPosts } = this.props.data

   return (

  <div>
  <Header />
  <Bio />
  <PostGallery postList={allMongodbTestPosts.edges}/>
  <NextPage />
  <Footer />
   </div>
  ) 
 }
}

export default Index

export const pageQuery = graphql`
  query {
  allMongodbTestPosts {
    edges {
      node {
        author
        content {
          childMarkdownRemark {
            html
          }
        }
        heading
        id
        lead
      }
    }
  }
}`