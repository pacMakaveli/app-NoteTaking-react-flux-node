/** @jsx React.DOM */

var React       = require('react');

var NoteFormTextarea = require('./note_form_textarea.jsx');

var NoteActions = require('../actions/note_actions.js');
var NoteStore   = require('../stores/note_store.js');

var NoteForm = React.createClass({

  handleSave: function(noteContent, id) {
    if(id) {

      NoteActions.editNote({
        _id: id,
        text: noteContent
      });

    } else {

      NoteActions.createNote({
        _id: Date.now(),
        text: noteContent
      })
    }
  },

  render: function() {
    var note;

    if( this.props.id ) {
      note = NoteStore.getNote( this.props.id );
    }

    return (
      <div className="test2">
        <NoteFormTextarea onSave={ this.handleSave } id={ this.props.id } noteText={ note ? note.text : '' } />
      </div>
    );
  }
});

module.exports = NoteForm;
