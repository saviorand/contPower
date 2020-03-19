import React from "react";

export default (props) => (
    
      <div id="main">
        <div class="inner">
          <section class="flex-col flex-wrap max-w-2xl mx-auto mb-16 mt-16">
            <article class="postArticle" id="firstArticle">
          <header>
            <div class="inner mt-8 mb-8">
            <h1 class="text-4xl text-center">First post heading</h1>
            <p class="text-2xl p-4 m-auto">This is a lead paragraph Donec rhoncus lacus ut ex suscipit aliquam. Etiam aliquam volutpat lorem nec</p>
            <div id="cover"></div>
          </div>
          </header>
              
                <div class="content text-lg">
                <p>{props.postContents}</p>
                </div>
            </article>
            </section>

        </div>
      </div>


	)