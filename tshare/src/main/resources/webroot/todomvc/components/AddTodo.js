import React, { findDOMNode, Component, PropTypes } from 'react';

export default class AddTodo extends Component {
  render() {
    return (
      <div>
        <input type='text' ref='input' onKeyDown={e => this.handleKey(e)}/>
        <button onClick={e => this.handleClick(e)}>
          {this.props.buttonText}
        </button>
      </div>
    );
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
}



AddTodo.propTypes = {
  onAddClick: PropTypes.func.isRequired
};