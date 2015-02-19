/** @jsx React.DOM */

var React   = require('react');
var NoteApp = require('./components/note_app.jsx');

var App = React.createClass({
  render: function() {
    return (
      <NoteApp />
    )
  }
});

module.exports = App;
