import React, { findDOMNode, Component, PropTypes } from 'react';
var asciidoctor = require('asciidoctor.js')(); 
import katex from 'katex';
import renderMathInElement from '../autorender.js'
	 




export default class AdocField extends Component {
	
	constructor(props) {
        super(props);
        var t=this.parseText(this.props.content.toString())
        this.state = {text:t};
    }

	
  render() {
    return (
      <div ref='output'>
      <div dangerouslySetInnerHTML={this.state.text} />
      </div>
      
    );
  }
  
 
  
  componentDidMount () {
	  renderMathInElement(React.findDOMNode(this),{
          delimiters: [
                       {left: "$$", right: "$$", display: true},
                       {left: "\\[", right: "\\]", display: true},
                       {left: "\\$", right: "\\$", display: false},
                       {left: "\\(", right: "\\)", display: false}
                   ]
               });
	  
	  }
	  componentDidUpdate(props,state,root) {
		  renderMathInElement(React.findDOMNode(this),{
	          delimiters: [
	                       {left: "$$", right: "$$", display: true},
	                       {left: "\\[", right: "\\]", display: true},
	                       {left: "\\$", right: "\\$", display: false},
	                       {left: "\\(", right: "\\)", display: false}
	                   ]
	               });
		  
	  }
	  
  parseText(str){
	  var Opal=asciidoctor.Opal
	  var options = Opal.hash2([ 'attributes'], { attributes: ['showtitle']});
	  var text=this.trim(this.props.content)
	  var parsed=asciidoctor.Asciidoctor().$convert(text,options);
	  
	  return {__html: parsed}
  }

  handleClick(e) {
    const node = findDOMNode(this.refs.input);
    const text = node.value.trim();
    this.props.onAddClick(text);
    node.value = '';
  }
  
  handleKey(e) {
    //console.log("Taste "+e.keyCode+" gedrückt");
  if (e.keyCode==13){
    this.handleClick(e);
  }
}
  
   trim(str){

		    // two spaces for tabs as a guess - we don't want to get into the business
		    // of trying to detect tab sizes.
		    var lines  = str.replace(/\t/g, '  ').split('\n');
		    var indent = lines.reduce(function(prev, line) {
		      if (/^\s*$/.test(line)) return prev;  // Completely ignore blank lines.
		      var lineIndent = line.match(/^(\s*)/)[0].length;
		      if (prev === null) return lineIndent;
		      return lineIndent < prev ? lineIndent : prev;
		    }, null);
		    return lines.map(function(l) { return l.substr(indent); }).join('\n');
		    return str.replace(/^[^\S\n]+/gm, '');
		
   }
}



AdocField.propTypes = {
  content: PropTypes.string.isRequired
};