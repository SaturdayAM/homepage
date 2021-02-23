import React, {Component} from 'react';
import ReactMarkdown from 'react-markdown';
import marked from "marked";


class BlogPage extends Component <any, any>{
	constructor(props: any){
		super(props);
		this.state = {
			markdown: 'nothing'
		}
	}

	componentDidMount(){
		const readMePath = require('./testPost.md');
		fetch('http://localhost:3000/testBlogPost.md')
			.then(response => {
				return response.text()
			})
			.then(text => {
				console.log('here!')
				console.log(text)
				this.setState({
					markdown: text
				})
			})
	}


	render(){
		const {markdown} = this.state;

		return(
			<div
				style={{
					textAlign: 'left'
				}}>
			<ReactMarkdown source={markdown}/>
			</div>
		)
	}
}

export default BlogPage;