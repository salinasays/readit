import React from 'react';
import $ from 'jquery';
import Post from './Post.jsx';

var Comment = React.createClass({
	getInitialState: function(){
		return {comments: []}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/comments',
			type: 'GET'
		})
		.done((data) => {
			this.setState({comments: data})
		})
	},
	render: function(){
		return(
			<div>
			</div>
		)
	}
})

export default Comment;