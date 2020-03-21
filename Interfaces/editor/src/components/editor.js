import React, { Component } from 'react';
import marked from 'marked';


class Editor extends Component {

	constructor (props){

    super(props);

    this.state = {
      input: '## A sub header (H2 size), \n [a link](www.example.com),\nLorem *markdownum armis turget*, decimo tamen. Cum caelo solidis quicquam modo\nab lacertis postquam. Fletibus pro? **Non sui quo** titulum negabamus quamquam\nconiunx virgineusque faciendus marmore astra erunt saepe copia: deum.',
      lead: 'This post is so great, read it right about now',
      author: 'Your cat',
      heading: 'Awesome heading',
      __html: '',
    };
    
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLead = this.handleLead.bind(this);
    this.handleAuthor = this.handleAuthor.bind(this);
    this.handleHeading = this.handleHeading.bind(this);
  };

    handleAuthor (event) {
      this.setState({
        author: event.target.value
      });
    };

    handleHeading (event) {
      this.setState({
        heading: event.target.value
      });
    };

    handleLead (event) {
      this.setState({
        lead: event.target.value
      });
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
        body: JSON.stringify({ content: this.state.input, heading: this.state.heading, lead: this.state.lead, author: this.state.author })
    };

    fetch('http://localhost:8080/save', requestOptions)
        .then(response => response.body)
       };

  

  render (){
   
    return (

      <div>
      <div className="container-fluid d-flex justify-content-around align-items-center my-5" id="quote-box">

          <div>

          <div class="form-group-lg">
          <label for="headingInput">Enter post heading:</label>
          <input className="form-control form-control-lg" id="headingInput" type="text" placeholder={this.state.heading} onChange={this.handleHeading}></input>    
          </div>

          <div class="form-group-lg">
          <label for="leadInput">Enter your lead paragraph:</label>
          <textarea class="form-control" id="leadInput" placeholder={this.state.lead} rows="3" onChange={this.handleLead}></textarea>
           </div>

           <div class="form-group">
          <label for="authorInput">Enter your name:</label>
          <input className="form-control" id="authorInput" type="text" placeholder={this.state.author} onChange={this.handleAuthor}></input>    
          </div>

          <div class="form-group-lg">
          <label for="postInput">Enter your post:</label>
          <textarea class="form-control" id="postInput" placeholder={this.state.input} rows="6" onChange={this.handleChange}></textarea>
           </div>

        </div>

        <div className="card bg-light p-5 w-50">
        
        <div className="my-5">
        <div><p class="display-4">{this.state.heading}</p></div>

        <div><p class="lead">{this.state.lead}</p></div>
        <footer class="blockquote-footer" style={{fontSize: "1em"}}>{this.state.author}</footer>
        </div>

         <div 
         dangerouslySetInnerHTML = {this.markup(marked(this.state.input))}
          />
   </div>

   </div>
   <div className="bg-light py-2">
   <button className="btn btn-primary" onClick={this.handleClick}>Submit my post</button>
   </div>
   </div>

   );
  }
};

export default Editor;