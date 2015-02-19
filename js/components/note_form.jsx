/** @jsx React.DOM */

var React       = require('react');
var NoteActions = require('../actions/note_actions.js');
var NoteStore   = require('../actions/note_store.js');

var NoteFormTextarea = require('../actions/note_form_textarea.js');

var NoteForm = React.createClass({



  handleSave: function(noteContent, id) {
    if(id) {

      NoteActions.editNote({
        id: _id,
        text: noteContent
      });
    } else {

      NoteActions.createNote({
        _id: Date.now(),
        text: noteContent
      })
    }
  },

  componentWillReceiveProps: function(nextProps) {

    this.setState({
      noteContent: noteProps.noteContent
    });

    if(!nextProps.id) {
      this.refs.noteContent.getDOMNode().focus();
    }
  }

  render: function() {
    var note;

    if( this.props.id ) {
      note = NoteStore.getNote( this.props.id );
    }

    return (
      <div className="test2">
        <textarea ref="noteContent" cols="10" value={ this.stateNoContent } onChange={ this.handleChange }></textarea>

        <input type="submit" className="button" value="Create Post" onClick={ this.handleSave } />
      </div>
    );
  }

});


module.exports = NoteForm;
