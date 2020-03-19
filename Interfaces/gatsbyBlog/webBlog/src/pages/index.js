import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import "../styles.css";

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

import Header from "../components/header";
import Footer from "../components/footer";
import PostGallery from "../components/PostGallery";
import NextPage from "../components/NextPage";

export default ({ data }) => (
  <div>
  <Header/>
  <PostGallery headerText={data.site.siteMetadata.title}/>
  <NextPage />
  <Footer />
   </div>

)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`