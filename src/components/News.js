import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

export class News extends Component {
  constructor() {
    super();
    /*console.log("Hello, I am constructor.");   just to show the working of constructor*/

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      /*pageSize: 15  my doing */
    };
  }

  async componentDidMount() {
    console.log("cdm");

    let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=2492d27b405f4e4ba6b250bed0a238a2&page=1&pageSize=${this.props.pageSize}`
    );
    this.setState({ loading: true });
    let parsedData = await data.json();
    /*console.log(parsedData)*/
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextClick = async () => {
    console.log("Next");
    /*Primary plan to disable the button */
    if (
      !Math.ceil(this.state.totalResults / this.props.pageSize) <
      this.state.page + 1
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2492d27b405f4e4ba6b250bed0a238a2&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      /*console.log(parsedData)*/
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };

  handlePrevClick = async () => {
    console.log("Prevous");

    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2492d27b405f4e4ba6b250bed0a238a2&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    /*console.log(parsedData)*/
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsMonkey Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row my-4">
          {(!this.state.loading) && this.state.articles.map((element) => {
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
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-lg btn-dark d-flex justify-content-between"
            onClick={this.handlePrevClick}
          >
            {"<<- "}Previous
          </button>
          <button
            /*back up plan to diable the button */
            disabled={
              Math.ceil(this.state.totalResults / this.state.pageSize) <
              this.state.page + 1
            }
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
