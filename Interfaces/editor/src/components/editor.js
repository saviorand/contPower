import React, { Component } from 'react';
import marked from 'marked';

class Editor extends Component {

	constructor (props){
    super(props);
    this.state = {
      input: '# A header (H1 size),\n## A sub header (H2 size), \n [a link](www.example.com),\n `inline code`,\n\n       a code block, \n\n - a list item, \n\n> a blockquote, \n\n ![an image](www.example.com/img), \n\n **and bolded text**',
      __html: '',
    };
    
    this.handleChange = this.handleChange.bind(this);
  };
    handleChange (event) {
      this.setState({
        input: event.target.value
      });
    };  

    markup(a) {
    	return {__html: a};
    }

  // 
  render (){
   
    return (
      <div class="container-fluid d-flex justify-content-center align-items-center my-5" id="quote-box">
          <div>
          <p> Type your blog </p>
          <div class="card md">
          <div class="card-body">
            <textarea rows="15" cols="22" id="editor" value={this.state.input} onChange={this.handleChange}></textarea>    
        </div>
        </div>  
        </div>     
         <div 
         dangerouslySetInnerHTML = {this.markup(marked(this.state.input))}
         class="box right" />
       
   </div>
   );
  }
};

export default Editor;