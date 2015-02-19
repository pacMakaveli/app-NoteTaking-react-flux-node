/** @jsx React.DOM */

var React = require('react');
// var React = require('react/addons');

var Note = React.createClass({

  render: function() {
    var note  = this.props.note;
    var title = note.text.length >= 20 ? note.text.substring(0, 20) : note.text;

    return(
      <a href="#" className="note" onClick={ this.handleNoteEdit.bind(null, note._id) }>{ title }</a>
    );
  }
});

module.exports = Note;
