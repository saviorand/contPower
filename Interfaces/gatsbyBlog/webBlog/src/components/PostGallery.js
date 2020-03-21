import React from "react";

import PostItem from "./PostItem"

class PostGallery extends React.Component {

	render () {

		const listOfPosts = this.props.postList;

		return (

         <section class="cards grid grid-cols-1 md:grid-cols-3 max-w-2xl mx-auto mb-16 mt-16 gap-8">
          {listOfPosts.map(({ node }) => (
            <PostItem item={node} key={node.id} />
            ))} 
         </section>

			)
	}
}

export default PostGallery