import React, { PureComponent } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

class CodeBlock extends PureComponent <any, any> {
	render(){
		const {language, value} = this.props;
		return (
			<SyntaxHighlighter language={language} style={darcula}>
				{value}
			</SyntaxHighlighter>	
		)
	}
} 

export default CodeBlock;