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
    };
  }

  async componentDidMount() {
    console.log("cdm");

    let data = await fetch(
      "https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=1"
    );
    let parsedData = await data.json();
    /*console.log(parsedData)*/
    this.setState({ 
      articles: parsedData.articles,
      page: this.state.page + 1 
    });
  }

  handleNextClick = async () => {
    console.log("Next");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page + 1}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    /*console.log(parsedData)*/
    this.setState({ 
      articles: parsedData.articles,
      page: this.state.page + 1 
    });

  };

  handlePrevClick = async () => {
    console.log("Prevous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apikey=dbe57b028aeb41e285a226a94865f7a7&page=${this.state.page - 1}`;
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
            class="btn btn-lg btn-dark d-flex justify-content-between"
            onClick={this.handlePrevClick}
          >
            {"<<- "}Previous
          </button>
          <button
            type="button"
            class="btn btn-lg btn-dark d-flex justify-content-between"
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
