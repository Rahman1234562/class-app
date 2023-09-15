import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    console.log("i am a news compnents");
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount(){
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=97833aa3b9d444c889ebdf43d3018b15&page=1pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles,
    totalResults: parsedData.totalResults 
  })
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=97833aa3b9d444c889ebdf43d3018b15&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
     this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
     })
    
  }

  handleNextClick = async () => {
    if(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

    }
    else{
       let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=97833aa3b9d444c889ebdf43d3018b15&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
     this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
     })
    }
   
    
  }
  
  render() {
  
    return (
    
      <div className="container my-3">
        <h1 className="text-center">Daily-News Top-Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            // console.log(element.url)
            return (
              <div className="col my-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 88) : ""}
                  imageurl={element.urlToImage} newsUrl= {element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
        <button  disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
        <button disabled={(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
