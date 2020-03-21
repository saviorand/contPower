import React from "react";
import { graphql } from "gatsby";
import { Link } from "gatsby";


class PostItem extends React.Component {

  render () {

      const item = this.props.item

       return (

            <article class="first relative rounded shadow">
            <Link to={`/posts/${item.id}/`}><span><img src="https://source.unsplash.com/random/350x320" alt=""/></span>
                <div class="absolute top-0 my-16 mx-2">
                <h2 class="text-xl font-bold">{item.heading}</h2>
                <div class="content">
                  <p> {item.lead.substr(0,30)}...<i class="fas fa-long-arrow-alt-right text-blue-600"></i></p>
                </div>
              </div></Link>
            </article>

    )
   }
	}

  export default PostItem

  export const postFragment = graphql`
  fragment PostItem on mongodbTestPosts {
    id
    heading
    lead
    content {
      childMarkdownRemark {
        html
      }
    }
  }`