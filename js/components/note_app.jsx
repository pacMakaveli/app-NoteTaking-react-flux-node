/** @jsx React.DOM */

var React    = require('react');
var NoteBox  = require('./note_box.jsx');
var NoteForm = require('./note_form.jsx');

var NoteApp = React.createClass({

  getInitialState: function() {
    return {
      id: null
    }
  },

  onEdit: function(id) {
    this.setState({
      currentylEdited: id
    });
  },

  onAdd: function() {
    this.setState({
      currentylEdited: null
    });
  },

  render: function() {
    return(
      <div className="test">
        <NoteBox onEdit={ this.onEdit } onAdd={ this.onAdd } />
        <NoteForm id={ this.state.currentylEdited } />
      </div>
    )
  }
});

module.exports = NoteApp;
