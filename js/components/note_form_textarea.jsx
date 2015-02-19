/** @jsx React.DOM */

var React = require('react');
var NoteStore = require('../stores/note_store.js');

var NoteFormTextarea = React.createClass({
    getInitialState:function(){
        return {noteContent:''}
    },

    handleChange: function(event) {
        this.setState({noteContent: event.target.value});
    },

    handleSave:function(){

       this.props.onSave(this.state.noteContent,this.props.id);

       if(!this.props.id) {
           this.refs.textArea.getDOMNode().value = '';
           this.setState({noteContent: ''});
       }

    },

    componentWillReceiveProps: function(nextProps) {

        this.setState({
            noteContent: nextProps.noteContent
        });

        if(!nextProps.id){
            this.refs.textArea.getDOMNode().focus();
        }
    },

    render: function() {
        return (
            <div>
                <textarea className="form-control" ref="textArea" cols="100" rows="20" value={this.state.noteContent} onChange={this.handleChange}></textarea><br/>
                <input type="button" className="btn btn-success btn-lg" value="Save" onClick={this.handleSave}/>
            </div>
        )
    }

});

module.exports = NoteFormTextarea;
