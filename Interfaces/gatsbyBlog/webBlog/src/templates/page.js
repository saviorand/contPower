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



class Page extends React.Component {

  render() {

    const post = this.props.data.mongodbTestPosts;


    return (

  <div>
  <Header />
  <PostBody headerText={post.heading} postContents={post.content.childMarkdownRemark.html} postLead={post.lead} postAuthor={post.author}/>
  <NextPage />
  <Footer />
  </div>


  )
 }
}

export default Page


export const pageQuery = graphql`
  query($id: String!) {
    mongodbTestPosts(id: { eq: $id }) {
      id
      heading
      lead
      content {
      childMarkdownRemark {
        html
      }
    }
      author
    }
  }
`