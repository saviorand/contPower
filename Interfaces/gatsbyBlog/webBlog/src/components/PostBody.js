import React from "react";

export default (props) => (
    
      <div id="main">
        <div className="inner">
          <section className="flex-col flex-wrap max-w-2xl mx-auto mb-16 mt-16">
            <article class="postArticle" id="firstArticle">
          <header>
            <div className="inner mt-8 mb-8">
            <h1 className="text-4xl text-center">{props.headerText}</h1>
            <p className="text-2xl p-4 m-auto">{props.postLead}</p>
            <p>{props.postAuthor}</p>
            <div id="cover"></div>
          </div>
          </header>
              
                <div className="content text-lg">
                <p><div
              dangerouslySetInnerHTML={{
                __html: props.postContents,
              }}
              className="post"
            /></p>
                </div>
            </article>
            </section>

        </div>
      </div>


	)