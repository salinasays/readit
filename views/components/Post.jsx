import React from 'react';

var Post = React.createClass({
	
	render: function(){
		return(
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.body}</p>
			</div>
		)
	}
})

export default Post;