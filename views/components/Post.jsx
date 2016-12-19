import React from 'react';
import {Link} from 'react-router';

var Post = React.createClass({
	
	render: function(){
		return(
			<div>
				<h3><Link to={'/post/' + this.props.id}>{this.props.title}</Link></h3>

				<p>{this.props.body}</p>
			</div>
		)
	}
})

export default Post;