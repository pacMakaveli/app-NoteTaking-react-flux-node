/** @jsx React.DOM */

var React = require('react');

var NoteFormTextarea = React.createClass({
  getInitialState: function() {
    return {
      noteContent: ''
    }
  },

  handleChange: function(event) {
    this.setState({
      noteContent: event.target.value
    });
  },


  render: function() {
    return (
      <div />
    );
  }

});

module.exports = NoteFormTextarea;
