/** @jsx React.DOM */

var React    = require('react');
var NoteBox  = require('./note_box.jsx');
var NoteForm = require('./note_form.jsx');

var NoteApp = React.createClass({

  getInitialState: function() {
    return {
      id: null
    };
  },

  onNoteEdit: function(id) {
    this.setState({
      currentylEdited: id
    });
  },

  onNoteAdd: function() {
    return(
      <div className="test">
        <NoteBox, onNoteEdit={ this.onNoteEdit } onNoteAdd={ this.onNoteAdd } />
        <NoteForm, id={ this.state.currentylEdited } />
      </div>
    )
  }
});

module.exports = NoteApp;
