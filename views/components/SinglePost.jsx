import React from 'react';
import Post from './Post.jsx';
import $ from 'jquery';

var SinglePost = React.createClass({
	getInitialState: function(){
		return {post: []}
	},
	componentDidMount: function(){
	
		$.ajax({
			url: '/api/posts/' + this.props.params.postId,
			type: 'GET'
		})
		.done((data) => {
			console.log(data)
			this.setState({post: data})
		})
	},
	render: function(){
		console.log(this.state.post)
		return <div></div>
	}
})

export default SinglePost;
