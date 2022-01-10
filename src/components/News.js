import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    /*console.log("Hello, I am constructor.");   just to show the working of constructor*/

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      pageSize: 15 /* my doing */
    };
  }

  async componentDidMount() {
    console.log("cdm");

    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=2492d27b405f4e4ba6b250bed0a238a2&page=1&pageSize=${this.state.pageSize}`
    );
    let parsedData = await data.json();
    /*console.log(parsedData)*/
    this.setState({ 
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    console.log("Next");

    if(Math.ceil(this.state.totalResults/this.state.pageSize) < this.state.page + 1){
      
    }else{
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2492d27b405f4e4ba6b250bed0a238a2&page=${this.state.page + 1}&pageSize=${this.state.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      /*console.log(parsedData)*/
      this.setState({ 
        articles: parsedData.articles,
        page: this.state.page + 1 
      });
    }

  };

  handlePrevClick = async () => {
    console.log("Prevous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2492d27b405f4e4ba6b250bed0a238a2&page=${this.state.page - 1}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    /*console.log(parsedData)*/
    this.setState({ 
      articles: parsedData.articles,
      page: this.state.page - 1 
     });

  };

  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey Top Headlines</h2>
        <div className="row my-4">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title}
                  description={element.description}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button          
            type="button"
            className="btn btn-lg btn-dark d-flex justify-content-between"
            onClick={this.handlePrevClick}
          >
            {"<<- "}Previous
          </button>
          <button
            type="button"
            className="btn btn-lg btn-dark d-flex justify-content-between"
            onClick={this.handleNextClick}
          >
            Next{" ->>"}
          </button>
        </div>
      </div>
    );
  }
}

export default News;
