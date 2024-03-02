import React, { Component } from 'react'

export class NewsItem extends Component {
	render() {
    	let {title, description, imageUrl, newsUrl, source, date} = this.props;
    	var styles = {
        	border: "1px solid black",
        	borderRadius: "15px",
        	padding: "6px",
        	width: "18rem",
        	marginTop: "2vb",
        	marginBottom: "2vb",
        	height: "33rem",
        	backgroundColor: "#d0e1fc",
        	boxShadow: "2px 2px 4px 0 #e4edfc5d, 5px 5px 20px 0 #e4edfc3c"
    	};
    	return (
      		<>
        	<div className="card" style={styles}>
        	    <img className="card-img-top" src={imageUrl} alt="News" style={{height: "180px", borderRadius: "9px"}}/>
        	    <div className="card-body">
        	        <h5 className="card-title">{title}</h5>
        	        <p className="card-text">{description}</p>
        	        <p className="card-author-date" style={{textAlign: "right"}}>{source} - {date.substr(8,2)}/{date.substr(5,2)}/{date.substr(0,4)}</p>
        	        <a href={newsUrl} className="btn btn-primary btn-dark">Read full article</a>
        	    </div>
        	</div>
      		</>
    	)
  	}
}

export default NewsItem