"use strict";

var React = require('react');
var Input = require('../comoon/input');

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        erros: React.PropTypes.object
    },    
    render: function(){
        return (
            <form>
                <h1>Manage Author</h1>

                <Input
                    name="firstName"
                    label="FirstName"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                    error={this.props.errors.firstName}/>

                <Input
                    name="lastName"
                    label="LastName"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                    error={this.props.errors.lastName}/>

                <input type="submit" value="Save" className="btn btn-primary" onClick={this.props.onSave}/>
            </form>
        );
    }
});

module.exports = AuthorForm;