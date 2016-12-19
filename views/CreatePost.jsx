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
					<label>Title:</label> 

					<br />

					<input 
					type="text" 
					onChange={this.handleChange.bind(this, "title")}/> 

					<br /> <br />

					<label>Body:</label> 

					<br />

					<input 
					type="text"
					onChange={this.handleChange.bind(this, "body")} /> 

					<br /> <br />

					<input 
					type="submit" 
					value="Submit" />
				</form>
			</div>
		)
	}
})

export default CreatePost;