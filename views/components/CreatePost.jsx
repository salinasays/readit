import React from 'react';
import $ from 'jquery';

var CreatePost = React.createClass({
	getInitialState: function(){
		return {title: "", body: ""}
	},
	submitForm: function(e){
		e.preventDefault()
		$.ajax({
			url: '/api/posts',
			type: 'POST',
			data: this.state
		})
	},
	handleChange: function(input, event){
		if(input === "title"){
			this.setState({title: event.target.value})
		} else if (input === "body"){
			this.setState({body: event.target.value})
		}
	},

	render: function(){
		return(
			<div>
				<h2>Create A Post:</h2>

				<form onSubmit={this.submitForm}>
					<label className="label">Title:</label> 

					<br />

					<input
					className="postTitle" 
					type="text" 
					onChange={this.handleChange.bind(this, "title")}/> 

					<br /> <br />

					<label className="label">Body:</label> 

					<br />

					<input
					className="textArea" 
					type="text"
					onChange={this.handleChange.bind(this, "body")} /> 

					<br /> <br />

					<input
					className="submitButton" 
					type="submit" 
					value="Submit" />
				</form>
			</div>
		)
	}
})

export default CreatePost;