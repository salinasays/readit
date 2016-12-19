import React from 'react';
import Post from './Post.jsx';
import $ from 'jquery';

var Home = React.createClass({
	getInitialState: function(){
		return {allPosts: []}
	},
	componentDidMount: function(){
		$.ajax({
			url: '/api/posts',
			type: 'GET'
		})
		.done((data) => {
			this.setState({allPosts: data})
		})
	},
	render: function(){
		return(
			<div>
				<h2>Top Posts</h2>

				<ol>
					{this.state.allPosts.length === 0 ? null : this.state.allPosts.map((val, idx) => {
						return <li key={idx}> <Post title={val.title} body={val.body}/> </li>
					})}
				</ol>
			</div>
		)
	}
})

export default Home;
