/** @jsx React.DOM */

var React = require('react');
var Note  = require('./note.jsx');

var NoteList = React.createClass({

  render: function() {
    return(
      getInitialState: function() {
        return {
          activeNoteId: null
        };
      },

      setActiveNote: function(id) {
        this.setState({
          activeNoteId: id
        });
      }

      render: function() {
        var self = this,
            notes = this.props.notes.concat().reverse();

        var noteNodes = notes.map(function(note) {
          return(
            <Note
              key={ note._id }
              active={ self.state.activeNoteId === note._id }
              note={ note }
              onEdit={ self.props.onEdit }
              onSelect={ self.setActiveNote } />
          )
        });

        return(
          <div className="note-list">
            { noteNodes }
          </div>
        )
      }
    );
  }
});

module.exports = NoteList;
