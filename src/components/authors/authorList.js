'use strict';

var React = require('react');
var Link = require('react-router').Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');


var AuthorList = React.createClass({  
   
    propTypes: {
        authors: React.PropTypes.array.isRequired
    },
    deleteAuthor: function(id, event){
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');
        //this.transitionTo('authors');
    },  
    render: function(){
        var createAuthorRow = function(author){
            return (
                <tr key={author.id}>
                    <td><input type="submit" value="Delete" className="btn btn-danger" onClick={this.deleteAuthor.bind(this, author.id)}/></td>                    
                    <td><Link to='manageAuthor' params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };
        return (         
            <table className='table'>
                <thead>
                    <th></th>
                    <th>ID</th>
                    <th>Name</th>
                </thead>
                <tbody>
                    {this.props.authors.map(createAuthorRow, this)}
                </tbody>
            </table>        
        );
    }
});

module.exports = AuthorList;