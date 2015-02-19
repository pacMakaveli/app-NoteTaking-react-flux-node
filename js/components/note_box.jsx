/** @jsx React.DOM */

var React = require('react');

var NoteList = require('./note_list.jsx');
var NoteStore = require('../stores/note_store.js');

var NoteBox = React.createClass({

  getInitialState: function() {
    return {
      notes: NoteStore.getNotes()
    };
  },

  onChange: function(notes) {
    this.setState({
      notes: notes
    });
  },

  componentDidMount: function() {
    this.unsubscribe = NoteStore.listen(this.onChange);
  },

  componentWillMount: function() {
    this.unsubscribe();
  },

  onAdd: function(event) {
    event.preventDefault();

    this.props.onAdd();
    this.refs.noteList.setActiveNote(null);
  },

  render: function() {
    return (
      <div className="note-box">
        <div className="note-new">
          <a href="" onClick={ this.onAdd }>New Note</a>
        </div>

        <NoteList ref="noteList" notes={ this.state.nodes } onEdit={ this.props.edit } />
      </div>
    );
  }

});

module.exports = NoteBox;
