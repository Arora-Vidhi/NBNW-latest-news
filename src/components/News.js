import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Loader from './Loader.js'
import PropTypes from 'prop-types'

export class News extends Component {
	static defaultProps={
    	country: "in", 
	    pageSize: 6,
    	category: "general"
  	}
  	static propTypes={
    	apiKey: PropTypes.string.isRequired,
	    country: PropTypes.string,
    	catgory: PropTypes.string,
	    pageSize: PropTypes.number
  	}
    constructor(){
        super();
        this.state = {
            articles: [],
            page: 1,
            loading: false
        }
    }
    
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&pagesize=${this.props.pageSize}&page=1`
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false})
    }

    handlePrevClick=async ()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&pagesize=${this.props.pageSize}&page=${this.state.page-1}`
      this.setState({loading: true})
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
		articles: parsedData.articles,
        page: this.state.page-1, loading: false})
    }
    handleNextClick=async ()=>{
      	let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=${this.props.apiKey}&pagesize=${this.props.pageSize}&page=${this.state.page+1}`
      	this.setState({loading: true})
      	let data = await fetch(url);
      	let parsedData = await data.json();
      	this.setState({
        	articles: parsedData.articles,
        	page: this.state.page+1, 
			loading: false
		})
    }

  	render() {
    	return (
    	  	<>
    	    	{this.state.loading && <Loader/>}
    	    	<div className="container my-3">
    	    	    <div className="row">
    	    	        {!this.state.loading && this.state.articles.map((element)=>{
    	    	            return <div className="col-md-4" key={element.url}>
    	    	                <NewsItem title = {element.title?element.title.slice(0,50)+"...":element.title} description = {element.description?element.description.slice(0,100)+"...":element.description} imageUrl={element.urlToImage?element.urlToImage:"https://media.licdn.com/dms/image/D4D0BAQGhMrAp_EiXEg/company-logo_200_200/0/1705366831817?e=1717632000&v=beta&t=UyeT3ke6-lXSdOYgWqhWUM2kLfTzT32RXjyll6vNK0c"} newsUrl={element.url} source={element.source.name} date={element.publishedAt}/>
    	    	            </div>})}
    	    	    </div>
    	    	    <div className="prev-next d-flex justify-content-around">
    	    	      <button disabled={this.state.page<=1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}> &larr; Previous</button>
    	    	      <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
    	    	    </div>
    	    	</div>
    	  	</>
    	)
  	}
}

export default News