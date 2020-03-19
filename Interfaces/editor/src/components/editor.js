import React, { Component } from 'react';
import marked from 'marked';


class Editor extends Component {

	constructor (props){
    super(props);
    this.state = {
      input: '# A header (H1 size),\n## A sub header (H2 size), \n [a link](www.example.com),\n `inline code`,\n\n       a code block, \n\n - a list item, \n\n> a blockquote, \n\n ![an image](www.example.com/img), \n\n **and bolded text**',
      __html: '',
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
    handleChange (event) {
      this.setState({
        input: event.target.value
      });
    };  

    markup(a) {
    	return {__html: a};
    };


    handleClick(e) {
           const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: this.state.input })
    };
    fetch('http://localhost:8080/save', requestOptions)
        .then(response => response.body)
       };

  // 
  render (){
   
    return (
      <div>
      <div className="container-fluid d-flex justify-content-center align-items-center my-5" id="quote-box">
          <div>
          <p> Type your blog </p>
          <div className="card md">
          <div className="card-body">
            <textarea rows="15" cols="22" id="editor" value={this.state.input} onChange={this.handleChange}></textarea>    
        </div>
        </div>  
        </div>     
         <div 
         dangerouslySetInnerHTML = {this.markup(marked(this.state.input))}
         className="box right" />
   </div>
   <button onClick={this.handleClick}>Submit my post</button>
   </div>

   );
  }
};

export default Editor;