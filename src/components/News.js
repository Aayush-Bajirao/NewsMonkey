import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultPops = {
    country: "in",
    pageSize: 9,
    category: "general",
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    /*console.log("Hello, I am constructor.");   just to show the working of constructor*/

    this.state = {
      articles: [],
      loading: false,
      page: 1,
      /*pageSize: 15  my doing */

      totalResults: 0,

    };
  }
  apiKey = "2492d27b405f4e4ba6b250bed0a238a2";
  async componentDidMount() {
    console.log("cdm");

   /* let data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.apiKey}&page=1&pageSize=${this.props.pageSize}`
    );
    this.setState({ loading: true });
    let parsedData = await data.json();
    /*console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });*/
    this.updateNews();
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.apiKey}&page=${
      this.state.page
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    /*console.log(parsedData)*/
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handleNextClick = async () => {
    /*console.log("Next");
    Primary plan to disable the button
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      loading: false,
    });*/
    this.setState({
      page: this.state.page + 1
    });
    this.updateNews();
  };

  handlePrevClick = async () => {
    /*console.log("Prevous");

    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    /*console.log(parsedData)
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loading: false,
    });*/
    this.setState({  
      page: this.state.page - 1, 
    });
    this.updateNews();
  };

  fetchMoreData = () => {
    this.setState({page: this.state.page +1})
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center" style={{ margin: "35px 0" }}>
          NewsMonkey Top Headlines
        </h1>
        {/*{this.state.loading && <Spinner />}  beacuse of infinte loading*/}
        
        {/*!this.state.loading && cause of infinite scrolling*/}

        <InfiniteScroll
        dataLength={this.state.articles.length}
        next={this.fetchMoreData}
        hasMore={this.state.articles.lenght !== this.totalResults}
        loader={<Spinner />}
        >
          <div className="row my-4">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    source={element.source.name}
                    author={element.author}
                    date={element.publishedAt}
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
        </div>

       </InfiniteScroll>


        <div className="container d-flex justify-content-between">
          {/*<button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-lg btn-dark d-flex justify-content-between"
            onClick={this.handlePrevClick}
          >
            {"<<- "}Previous
          </button>
          <button
            /*back up plan to diable the button 
            disabled={
              Math.ceil(this.state.totalResults / this.state.pageSize) <
              this.state.page + 1
            }
            type="button"
            className="btn btn-lg btn-dark d-flex justify-content-between"
            onClick={this.handleNextClick}
          >
            Next{" ->>"}
          </button>*/}
        </div>
      </div>
    );
  }
}

export default News;
