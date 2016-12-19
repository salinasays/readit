import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, browserHistory} from 'react-router';
import CreatePost from './components/CreatePost';
import Home from './components/Home';
import './App.css';
import SinglePost from './components/SinglePost';
var logo = require('../imgs/logo.png')

var App = React.createClass({
	render: function(){
		return(
			<div>
			<img className="logo" src={logo} />

				<nav className="navbar navbar-inverse">
					<div className="container-fluid">
						<div className="nav navbar-nav">
							<Link to='/'>Home</Link>
							<Link to='CreatePost'>Create Post</Link>
						</div>
					</div>
				</nav>
				{this.props.children}
			</div>
		)
	}
})

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRoute component={Home} />
			<Route path='CreatePost' component={CreatePost} />
			<Route path = '/post/:postId' component={SinglePost} />
		</Route>
	</Router>,
	document.getElementById('root'))
